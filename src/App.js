import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import LoadPage from './components/LoadPage'
import Navigation from './components/Navigation';
import axios from 'axios';
import config from './config'
import MainPage from './components/MainPage';

class App extends Component {

  state = {
    loggedInUser: null,
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
    return (
      <div>
        <Navigation onLogout={this.handleLogout} />
        { <Switch>
          <Route exact path="/"  render={(routeProps) => {
              return  <LoadPage onSignIn={this.handleSignIn} onSignUp={this.handleSignUp} {...routeProps}  />
            }}/>
          <Route  path="/home"  render={(routeProps) => {
            return  <MainPage user={this.state.loggedInUser} {...routeProps}  />
          }}/>
           
        </Switch> }
      </div>
    )
  }
}

export default withRouter(App)