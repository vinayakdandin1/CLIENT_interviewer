import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import JobDescription from './components/JobDescription'
import CreateStep from './components/CreateStep'
import ShowSteps from './components/ShowSteps'
import config from './config'
import { Route, Switch, withRouter } from 'react-router-dom';
import LoadPage from './components/LoadPage'
import Navigation from './components/Navigation';
import axios from 'axios';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Landing from "./components/Landing";
import { Spinner } from 'react-bootstrap'
import Profile from "./components/Profile";
import SearchJob from "./components/SearchJob";
import NotFound from "./components/NotFound"
import About from "./components/About.js"
import Referrals from './components/Referrals'


class App extends Component {
  state = {
    jobDetails: [],
    loggedInUser: null,
    steps: [],
    logoutUser: false,
    fetchingUser: false,
    unloggedUser: false,
    filteredJobs: [],
    protRoute: true,
  };

  handleProtRoute = () => {
    this.setState({
      protRoute: false,
    });
  };
  handleSearch = (event) => {
    event.preventDefault();
    const { jobDetails } = this.state;
    let searchText = event.target.s.value.toLowerCase();
    let filteredList = jobDetails.filter((single) => {
      return (
        single.companyName.toLowerCase().includes(searchText) ||
        single.jobTitle.toLowerCase().includes(searchText)
      );
    });
    this.setState(
      {
        filteredJobs: filteredList,
      },
      () => {
        this.props.history.push("/search");
      }
    );
  };
  handleDateFilter = () => {
    const { jobDetails } = this.state;
    let clonedJobs = jobDetails.reverse();
    let dateFilterJobs = clonedJobs.sort(
      (a, b) => new Date(b.applicationDate) - new Date(a.applicationDate)
    );
    this.setState({
      jobDetails: dateFilterJobs,
    });
  };
  handleInterviewDate = () => {
    const { jobDetails } = this.state;
    let clonedJobs = jobDetails.reverse();
    let interviewFilter = clonedJobs.sort((a, b) =>
      !a.interviewDate
        ? 999999
        : new Date(a.interviewDate) - new Date(b.interviewDate)
    );
    this.setState({
      jobDetails: interviewFilter,
    });
  };
  handleSalarySort = () => {
    const { jobDetails } = this.state;
    let clonedJobs = jobDetails;
    let dateFilterJobs = clonedJobs.sort((a, b) => b.salary - a.salary);
    this.setState({
      jobDetails: dateFilterJobs,
    });
  };
  clearValues = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      itemvalues: [{}],
    });
  };
  googleSignUp = (event) => {
    let user = {
      emailId: event.profileObj.email,
      firstName: event.profileObj.givenName,
      lastName: event.profileObj.familyName,
    };

    axios
      .post(`${config.API_URL}/api/google/auth`, user, {
        withCredentials: true,
      })
      .then((response) => {
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
        this.setState({
          error: err.response.data,
        });
      });
  };
  googleSignIn = (event) => {
    axios({
      method: "POST",
      url: `${config.API_URL}/api/google/signin`,
      data: { tokenId: event.tokenId },
      withCredentials: true,
    })
      .then((response) => {
        this.setState(
          {
            loggedInUser: response.data,
          },
          () => {
            this.props.history.push("/home");
          }
        );
      })
      .catch(() => {
        console.log("Something went wrong", err);
      });
  };
  loggedIn = () => {
    axios
      .get(`${config.API_URL}/api/user`, { withCredentials: true })
      .then((response) => {
        this.setState({
          loggedInUser: response.data,
          fetchingUser: true,
        });
      })
      .catch(() => {
        this.setState({
          fetchingUser: true,
        });
      });
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
  getStates = () => {
    axios
      .get(`${config.API_URL}/api/home/steps`, { withCredentials: true })
      .then((response) => {
        this.setState({
          steps: [...response.data],
        });
      })
      .catch((err) => {
        console.log("Fetching data failed", err);
      });
  };
  addJobDetails = (event) => {
    event.preventDefault();
    let newJobDetails = {
      jobTitle: event.target.jobTitle.value,
      companyName: event.target.companyName.value,
      applicationDate: event.target.applicationDate.value,
      contactPerson: event.target.contactPerson.value,
      contactDetail: event.target.contactDetail.value,
      jobDescription: event.target.jobDescription.value,
      applicationLink: event.target.applicationLink.value,
      sourceOfApplication: event.target.sourceOfApplication.value,
      salary: event.target.salary.value,
      interviewDate: event.target.interviewDate.value,
      jobLocation: event.target.jobLocation.value,
    };
    axios
      .post(`${config.API_URL}/api/create`, newJobDetails, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState(
          {
            jobDetails: [...this.state.jobDetails, response.data],
          },
          () => {
            this.clearValues();
          }
        );
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
            jobDetails: [],
            steps: [],
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch(() => {});
  };
  handleSubmitStep = (event) => {
    event.preventDefault();
    let date = event.target.date.value;
    let description = event.target.description.value;
    let jobId = event.target.jobId.value;

    axios
      .post(
        `${config.API_URL}/api/home/create-steps`,
        {
          date: date,
          description: description,
          jobId: jobId,
        },
        { withCredentials: true }
      )
      .then((response) => {
        this.setState(
          {
            steps: [response.data, ...this.state.steps],
          },
          () => {
            this.clearValues();
            this.props.history.push(`/home/${response.data.jobId}`);
          }
        );
      })
      .catch((err) => {
        console.log("create failed", err);
      });
  };
  handleDeleteStep = (stepsId, jobId) => {
    axios
      .delete(`${config.API_URL}/api/home/${stepsId}`, {
        withCredentials: true,
      })
      .then(() => {
        let filteredSteps = this.state.steps.filter((step) => {
          return step._id !== stepsId;
        });
        this.setState(
          {
            steps: filteredSteps,
          },
          () => {
            this.props.history.push(`/home/${jobId}`);
          }
        );
      })
      .catch((err) => {
        console.log("delete failed", err);
      });
  };

  handleDeleteAllJobSteps = (jobId) => {
    axios
      .delete(`${config.API_URL}/api/home/steps/${jobId}`, {
        withCredentials: true,
      })
      .then(() => {
        let filteredSteps = this.state.steps.filter((step) => {
          return step.jobId !== jobId;
        });
        this.setState({
          steps: filteredSteps,
        });
      })
      .catch((err) => {
        console.log("delete failed", err);
      });
  };
  handleDeleteJob = (jobId) => {
    axios
      .delete(`${config.API_URL}/api/home/job/${jobId}`, {
        withCredentials: true,
      })
      .then(() => {
        let filteredJobs = this.state.jobDetails.filter((job) => {
          return job._id !== jobId;
        });
        this.setState(
          {
            jobDetails: filteredJobs,
          },
          () => {
            this.props.history.push(`/dashboard`);
          }
        );
      })
      .catch((err) => {
        console.log("delete failed", err);
      });
  };
  componentDidMount() {
    this.getStates();
    this.getInitialDetails();
    
    if (!this.state.loggedInUser) {
      this.loggedIn();
    }
  }
  handleEditJobDesc = (jobId) => {
    axios.patch(`${config.API_URL}/api/home/steps/${jobId}`);
  };
  handleUnloggedUser = () => {
    this.setState({
      unloggedUser: true,
    });
  };
  render() {
    const {
      jobDetails,
      loggedInUser,
      logoutUser,
      unloggedUser,
      filteredJobs,
      protRoute,
    } = this.state;
    if (!this.state.fetchingUser) {
      return (
        <div>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }

    return (
      <div>
        <Navigation
          user={loggedInUser}
          directToSearch={this.directToSearch}
          onSearch={this.handleSearch}
          onLogout={this.handleLogout}
        />
        {
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => {
                return !loggedInUser ? (
                  <LoadPage
                    errorGoogleSignIn={this.errorGoogleSignIn}
                    loggedInUser={loggedInUser}
                    googleSignUp={this.googleSignUp}
                    googleSignIn={this.googleSignIn}
                    onSignIn={this.handleSignIn}
                    onSignUp={this.handleSignUp}
                    {...routeProps}
                    unloggedUser={unloggedUser}
                    protRoute={protRoute}
                  />
                ) : (
                  <MainPage
                    jobDetails={jobDetails}
                    initialDetails={this.getInitialDetails}
                    user={loggedInUser}
                    logoutUser={logoutUser}
                    {...routeProps}
                    onProtRoute={this.handleProtRoute}
                    unloggedUser={unloggedUser}
                  />
                );
              }}
            />
            <Route
              exact
              path="/search"
              render={(routeProps) => {
                return (
                  <SearchJob
                    filteredJobs={filteredJobs}
                    {...routeProps}
                    protRoute={protRoute}
                    user={loggedInUser}
                  />
                );
              }}
            />
            <Route
              exact
              path="/home"
              render={(routeProps) => {
                return (
                  <MainPage
                    jobDetails={jobDetails}
                    initialDetails={this.getInitialDetails}
                    user={loggedInUser}
                    logoutUser={logoutUser}
                    {...routeProps}
                    onUnlogged={this.handleUnloggedUser}
                    onProtRoute={this.handleProtRoute}
                  />
                );
              }}
            />
            <Route
              path="/home/:jobId"
              render={(routeProps) => {
                return (
                  <JobDescription
                    handleDeleteAllJobSteps={this.handleDeleteAllJobSteps}
                    handleDeleteJob={this.handleDeleteJob}
                    handleDeleteStep={this.handleDeleteStep}
                    handleSubmitStep={this.handleSubmitStep}
                    onProtRoute={this.handleProtRoute}
                    steps={this.state.steps}
                    user={loggedInUser}
                    {...routeProps}
                  />
                );
              }}
            />
            <Route
              path="/home/:jobId/steps"
              render={(routeProps) => {
                return (
                  <ShowSteps
                    user={loggedInUser}
                    {...routeProps}
                    onProtRoute={this.handleProtRoute}
                  />
                );
              }}
            />
            <Route
              path="/home/:jobId/create-steps"
              render={(routeProps) => {
                return (
                  <CreateStep
                    user={loggedInUser}
                    onProtRoute={this.handleProtRoute}
                    {...routeProps}
                  />
                );
              }}
            />
            <Route
              exact
              path="/dashboard"
              render={(routeProps) => {
                return (
                  <Landing
                    steps={this.state.steps}
                    onDateFilter={this.handleDateFilter}
                    oninterviewFilter={this.handleInterviewDate}
                    onSalarySort={this.handleSalarySort}
                    jobDetails={jobDetails}
                    loggedInUser={loggedInUser}
                    toLogIn={this.loggedIn}
                    onAdd={this.addJobDetails}
                    onProtRoute={this.handleProtRoute}
                    {...routeProps}
                  />
                );
              }}
            />
            <Route
              path={"/dashboard/:jobId"}
              render={(routeProps) => {
                return (
                  <Landing
                    steps={this.state.steps}
                    handleSubmitStep={this.handleSubmitStep}
                    jobDetails={jobDetails}
                    loggedInUser={loggedInUser}
                    onAdd={this.addJobDetails}
                    onProtRoute={this.handleProtRoute}
                    {...routeProps}
                    isJobPreview
                  />
                );
              }}
            />
            <Route
              path="/profile"
              render={(routeProps) => {
                return (
                  <Profile
                    user={loggedInUser}
                    {...routeProps}
                    onProtRoute={this.handleProtRoute}
                  />
                );
              }}
            />
            <Route path="/about" component={About} />
            <Route
            
              path="/referrals"
              render={(routeProps) => {
                return <Referrals 
                clearValues={this.clearValues}
                  user={loggedInUser} {...routeProps} />;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        }
        <Footer />
      </div>
    );
  }
}

export default withRouter(App)