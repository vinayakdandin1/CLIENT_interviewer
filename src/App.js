import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import LoadPage from './components/LoadPage'
import Navigation from './components/Navigation';
import axios from 'axios';
import config from './config'
import MainPage from './components/MainPage';
import Landing from "./components/Landing";

class App extends Component {

  state = {
    jobDetails: [],
    loggedInUser: null,
  }


  addJobDetails = (event) => {
    event.preventDefault()
    let newJobDetails = {
      jobTitle: event.target.jobTitle.value,
      companyName: event.target.companyName.value,
      // applicationDate: event.target.applicationDate.value,
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

    axios.post(`${config.API_URL}/api/create`, newJobDetails)
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
          console.log(this.props.history);
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
          console.log(response.data);
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

  render() {
    return (
      <div>
        <Navigation />
        { <Switch>
          <Route exact path="/"  render={(routeProps) => {
              return  <LoadPage onSignIn={this.handleSignIn} onSignUp={this.handleSignUp} {...routeProps}  />
            }}/>
          <Route  path="/home"  render={(routeProps) => {
            return  <MainPage />
          }}/>
          <Route
            exact
            path="/dashboard"
            render={(routeProps) => {
              return <Landing onAdd={this.addJobDetails} {...routeProps} />;
            }}
          />
           
        </Switch> }
      </div>
    )
  }
}

export default withRouter(App)
