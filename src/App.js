import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import LoadPage from './components/LoadPage'
import Navigation from './components/Navigation';
import axios from 'axios';
import config from './config'
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Landing from "./components/Landing";
import JobPreview from './components/JobPreview';

class App extends Component {
  state = {
    jobDetails: [],
    loggedInUser: null,
  };

  clearValues = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      itemvalues: [{}],
    });
  };

  loggedIn = () => {
    axios
      .get(`${config.API_URL}/api/user`, { withCredentials: true })
      .then((response) => {
        this.setState({
          loggedInUser: response.data,
        });
      })
      .catch(() => {});
  };
  getInitialDetails = () => {
    axios
      .get(`${config.API_URL}/api/dashboard`, { withCredentials: true })
      .then((response) => {
        this.setState({
          jobDetails: response.data,
        });
      })
      .catch((err) => {
        console.log("Fetching data failed", err);
      });
  };
  componentDidMount() {
    this.getInitialDetails();
    this.loggedIn()
  }

  addJobDetails = (event) => {
    event.preventDefault();
    let newJobDetails = {
      jobTitle: event.target.jobTitle.value,
      companyName: event.target.companyName.value,
      applicationDate: event.target.applicationDate.value,
      contactPerson: event.target.contactPerson.value,
      contactDetail: event.target.contactDetail.value,
      jobDescription: event.target.jobDescription.value,
      // companyRating: event.target.companyRating.value,
      applicationLink: event.target.applicationLink.value,
      sourceOfApplication: event.target.sourceOfApplication.value,
      salary: event.target.salary.value,
      // interviewDate: event.target.interviewDate.value,
      jobLocation: event.target.jobLocation.value,
    };
    // console.log(event.target.applicationDate.value);
    axios
      .post(`${config.API_URL}/api/create`, newJobDetails, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          jobDetails: [...this.state.jobDetails, response.data],
        }, () => {
          this.clearValues()
        });
      })
      .catch(() => {
        console.log("Fetching Failed!!!");
      });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    let user = {
      emailId: event.target.emailId.value,
      password: event.target.password.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    };

    axios
      .post(`${config.API_URL}/api/signup`, user)
      .then((response) => {
        this.setState(
          {
            loggedInUser: response.data,
          },
          () => {
            this.props.history.push("/home");
            console.log("Sign in successful");
          }
        );
      })
      .catch((err) => {
        this.setState({
          error: err.response.data,
        });
      });
  };

  handleSignIn = (event) => {
    event.preventDefault();
    let user = {
      emailId: event.target.emailId.value,
      password: event.target.password.value,
    };

    axios
      .post(`${config.API_URL}/api/signin`, user, { withCredentials: true })
      .then((response) => {
        // console.log(response.data);

        this.setState(
          {
            loggedInUser: response.data,
          },
          () => {
            this.props.history.push("/home");
          }
        );
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  handleLogout = () => {
    axios
      .post(`${config.API_URL}/api/logout`, {}, { withCredentials: true })
      .then(() => {
        this.setState(
          {
            loggedInUser: null,
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch(() => {});
  };

  render() {
    const { jobDetails, loggedInUser } = this.state;
    return (
      <div>
        <Navigation  onLogout={this.handleLogout} user={this.state.loggedInUser} />
        
        { <Switch>

          <Route exact path="/"  render={(routeProps) => {
              return  <LoadPage onSignIn={this.handleSignIn} onSignUp={this.handleSignUp} {...routeProps}  />
            }}/>
          <Route  path="/home"  render={(routeProps) => {
            return  <MainPage user={this.state.loggedInUser} {...routeProps}  />
          }}/>
          <Route path="/dashboard" render={(routeProps) => {
            return <Landing jobDetails={jobDetails} loggedInUser={loggedInUser} onAdd={this.addJobDetails} {...routeProps} />     
          }}/>
          <Route path="/dashboard/:jobId" render={(routeProps) => {
            return <JobPreview loggedInUser={loggedInUser} />     
          }}/>
           
        </Switch> }
        <Footer />
        
      </div>
    );
  }
}

export default withRouter(App)


