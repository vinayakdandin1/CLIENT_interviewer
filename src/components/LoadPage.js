import React, { Component } from 'react'
import '../styles/LoadPage.scss'
import { Alert } from "react-bootstrap";


class LoadPage extends Component {

    
    state = {
        hasClass: true,
        classes: "cont",
        showSignUp: false
    }

    showSignUp = () => {
      this.setState({
        showSignUp: true
      })
    }

    showSignIn = () => {
      this.setState({
        showSignUp: false
      })
    }

    classToggle = () => {    
        this.state.hasClass ? this.setState({ classes: "cont s--signup", hasClass: false}) : this.setState({ classes: "cont", hasClass: true})
  }
  
  unLoggedUser = () => {
    this.setState({
      isUser: false,
    });
  }

  render() {
    const {protRoute} = this.props;
        return (
          <div className="landing-main">
            <div className="landing-responsive">
              <div className={this.state.classes}>
                <div className="form sign-in">
                  <h2>Welcome back,</h2>
                  <form onSubmit={this.props.onSignIn}>
                    <label className="inLabels">
                      <span>Email</span>
                      <input name="emailId" type="email" />
                    </label>
                    <label className="inLabels">
                      <span>Password</span>
                      <input name="password" type="password" />
                    </label>
                    <button type="submit" className="submit">
                      Sign In
                    </button>
                  </form>
                </div>

                <div className="sub-cont">
                  <div className="img">
                    <div className="img__text m--up">
                      <h2>New here?</h2>
                      <p>Sign up and manage your interviews!</p>
                    </div>
                    <div className="img__text m--in">
                      <h2>One of us?</h2>
                      <p>If you already have an account, just sign in!</p>
                    </div>
                    <div onClick={this.classToggle} className="img__btn">
                      <span className="m--up">Sign Up</span>
                      <span className="m--in">Sign In</span>
                    </div>
                  </div>
                  <div className="form sign-up">
                    <h2>Time to manage your interview Schedules,</h2>
                    <form onSubmit={this.props.onSignUp}>
                      <label className="inLabels">
                        <span>First Name</span>
                        <input name="firstName" type="text" />
                      </label>
                      <label className="inLabels">
                        <span>Last Name</span>
                        <input name="lastName" type="text" />
                      </label>
                      <label className="inLabels">
                        <span>Email</span>
                        <input name="emailId" type="email" />
                      </label>
                      <label className="inLabels">
                        <span>Password</span>
                        <input name="password" type="password" />
                      </label>
                      <button type="submit" className="submit">
                        Sign Up
                      </button>
                    </form>                  
                  </div>
                </div>
              </div>
              
            </div>

            <div className="landing-mobile">
                  

                  {(this.state.showSignUp) ? 
                  
                    (<div className="landing">
                    <form onSubmit={this.props.onSignUp}>
                        <label className="inLabels">
                          <span>First Name</span>
                          <input name="firstName" type="text" />
                        </label>
                        <label className="inLabels">
                          <span>Last Name</span>
                          <input name="lastName" type="text" />
                        </label>
                        <label className="inLabels">
                          <span>Email</span>
                          <input name="emailId" type="email" />
                        </label>
                        <label className="inLabels">
                          <span>Password</span>
                          <input name="password" type="password" />
                        </label>
                        <button type="submit" className="submit">
                          Sign Up
                        </button>
                      </form>
                      <div>
                        <h2>One of us?</h2>
                        <button onClick={this.showSignIn} className="submit" >Sign in</button> 
                      </div> 
                  </div>
                  ) : (
                    <div className="landing-mobile-signin">
                      <form onSubmit={this.props.onSignIn}>
                        <label className="inLabels">
                          <span>Email</span>
                          <input name="emailId" type="email" />
                        </label>
                        <label className="inLabels">
                          <span>Password</span>
                          <input name="password" type="password" />
                        </label>
                        <button type="submit" className="submit">
                          Sign In
                        </button>
                      </form> 
                      <div>
                        <h2>New here?</h2>
                        <button onClick={this.showSignUp} className="submit" >Sign up</button> 
                      </div>              
                    </div>
                  )}
              </div>
            <div className="alertMessage">
              {!this.props.protRoute ? (
                <Alert variant="danger">
                  Please Sign in first
                </Alert>
              ) : null}
            </div>
          </div>
        );
    }
}

export default LoadPage