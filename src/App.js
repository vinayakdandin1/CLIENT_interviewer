import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import JobDescription from './components/JobDescription'
import EditJob from './components/EditJob'
import CreateSteps from './components/CreateSteps'
import ShowSteps from './components/ShowSteps'
import config from './config'
import { Route, Switch, withRouter } from 'react-router-dom';
import LoadPage from './components/LoadPage'
import Navigation from './components/Navigation';
import axios from 'axios';
import MainPage from './components/MainPage';

class App extends Component {

  state = {
    steps: [],
    loggedInUser: null,
  }

  componentDidMount(){
    axios.get(`${config.API_URL}/api/steps`)
      .then((response) => {
        console.log(response.data)
        this.setState({steps: response.data})
      })
      .catch(() => {
        console.log('Fetching failed')
      })
  }

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
          steps: [response.data, ... this.state.steps]
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
          <Route exact path="/home"  render={(routeProps) => {
            return  <MainPage />
          }}/>
          <Route path="/home/:jobId" render={(routeProps) => {
            return <JobDescription  />
          }}/>
          <Route path="/home/:jobId" render={(routeProps) => {
            return <EditJob />
          }} />
           
        </Switch> }
      </div>
    )
  }
}

export default withRouter(App)
