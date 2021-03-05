import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import JobDescription from './components/JobDescription'
import EditJob from './components/EditJob'
import CreateStep from './components/CreateStep'
import ShowSteps from './components/ShowSteps'
import config from './config'
import { Route, Switch, withRouter } from 'react-router-dom';
import LoadPage from './components/LoadPage'
import Navigation from './components/Navigation';
import axios from 'axios';
import MainPage from './components/MainPage';
import Landing from "./components/Landing";

class App extends Component {

  state = {
    jobDetails: [],
    loggedInUser: null,
  }

 /* componentDidMount(){
    axios.get(`${config.API_URL}/api/steps`)
      .then((response) => {
        console.log(response.data)
        this.setState({steps: response.data})
      })
      .catch(() => {
        console.log('Fetching failed')
      })
  }
  */

  handleSubmitStep = (event) => {
    event.preventDefault()
    let date = event.target.date.value
    let description = event.target.description.value

    axios.post(`${config.API_URL}/api/create-steps`, {
      date: date,
      description: description,
    })
      .then((response) => {
        this.setState({
          steps: [response.data, ...this.state.steps]
        }, () => {
          this.props.history.push('/home/:jobId')
        })
      })
      .catch((err) => {
        console.log('create failed', err)
      })
  }

  handleDeleteStep = (stepId) => {
    axios.delete(`${config.API_URL}/api/steps/${stepId}`)
      .then(() => {
        let filteredSteps = this.state.steps.filter((step) => {
          return step._id !==stepId
        })
        TouchList.setState({
          steps: filteredSteps
        }, () => {
          this.props.history.push('/home/:jobId')
        }) 
      })
      .catch((err) => {
        console.log('delete failed', err)
      })
  }
  componentDidMount() {
    axios.get(`${config.API_URL}/api/dashboard`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        this.setState({
          
          jobDetails: response.data
        })
      })
      .catch((err) => {
        console.log('Fetching data failed', err)
      })
  }

  addJobDetails = (event) => {
    event.preventDefault()
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
    axios.post(`${config.API_URL}/api/create`, newJobDetails,{withCredentials: true})
      .then((response) => {
        this.setState({
          jobDetails: response.data,
        });
      })
      .catch (() => {
        console.log("Fetching Failed!!!")
      })

  };

  handleSignUp = (event) => {
    event.preventDefault()
    let user = {
      emailId: event.target.emailId.value,
      password: event.target.password.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    } 

  
    axios.post(`${config.API_URL}/api/signup`, user)
      .then((response) => {
        this.setState({
          loggedInUser: response.data
        }, () => {
          this.props.history.push('/home')
          console.log("Sign in successful")
        })
      })
      .catch((err) => {          
        this.setState({
          error: err.response.data
        })
      })
  }

  handleSignIn = (event) => {
    event.preventDefault()
    let user = {
      emailId: event.target.emailId.value,
      password: event.target.password.value
    } 
  
    axios.post(`${config.API_URL}/api/signin`, user, {withCredentials: true})
      .then((response) => {
          console.log(response.data)
          
          this.setState({
            loggedInUser: response.data
          }, () => {
            this.props.history.push('/home')
          })  
          
      })
      .catch((err) => {
          console.log('Something went wrong', err)
      })
   }

   handleLogout = () => {
    axios.post(`${config.API_URL}/api/logout`, {}, {withCredentials: true})
      .then(() => {
        this.setState({
          loggedInUser: null
        }, () => {
          this.props.history.push('/')
        })
      })
      .catch(() => {
  
      })
   }

  render() {
    const { jobDetails } = this.state
    return (
      <div>
        <Navigation onLogout={this.handleLogout} />
         <Switch>
          <Route exact path="/"  render={(routeProps) => {
              return  <LoadPage onSignIn={this.handleSignIn} onSignUp={this.handleSignUp} {...routeProps}  />
            }}/>
          <Route exact path="/home"  render={(routeProps) => {
            return  <MainPage user={this.state.loggedInUser} {...routeProps}  />
          }}/>
          <Route path="/home/:jobId" render={(routeProps) => {
            return <JobDescription user={this.state.loggedInUser} {...routeProps} />
          }}/>
          <Route path="/home/:jobId/edit" render={(routeProps) => {
            return <EditJob />
          }} />
          <Route path="/home/:jobId/steps" render={(routeProps) => {
            return <ShowSteps onDeleteStep={this.handleDeleteStep} {...routeProps}/>
          }} />
          <Route path="/home/:jobId/create-step" render={(routeProps) => {
            return <CreateStep onSubmitStep={this.handleSubmitStep} {...routeProps} />
          }} />
          <Route exact path="/dashboard" render={(routeProps) => {
              return <Landing jobDetails={jobDetails} onAdd={this.addJobDetails} {...routeProps} />;
            }}
          />
           
        </Switch> 
      </div>
    )
  }
}

export default withRouter(App)
