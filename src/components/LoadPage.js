import React, { Component } from 'react'
import '../styles/LoadPage.scss'
import GoogleLogin from 'react-google-login';


class LoadPage extends Component {

    
    state = {
        hasClass: true,
        classes: "cont"
    }

    classToggle = () => {    
        this.state.hasClass ? this.setState({ classes: "cont s--signup", hasClass: false}) : this.setState({ classes: "cont", hasClass: true})
    }

    render() {
        return (
          <div className="landing-main">
            <div className={this.state.classes}>
              <div className="form sign-in">
                <h2>Welcome back,</h2>
                <form onSubmit={this.props.onSignIn}>
                  <label className="inLabels">
                    <span>Email</span>
                    <input name="emailId" type="email"/>
                  </label>
                  <label className="inLabels">
                    <span>Password</span>
                    <input name="password" type="password" autocomplete="off" />
                  </label>
                  <button type="submit" className="submit">
                    Sign In
                  </button>
                </form>
                {/* <button type="button" className="fb-btn">Connect with <span>Google</span></button> */}
                <GoogleLogin
                  clientId={`${process.env.CLIENT_ID}`}
                  buttonText="Login"
                  onSuccess={this.props.googleSignIn}
                  onFailure={this.props.errorGoogleSignIn}
                  cookiePolicy={"single_host_origin"}
                />
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
                  {/* <button type="button" className="fb-btn">Join with <span>Google</span></button> */}

                  <GoogleLogin
                    clientId={`${process.env.CLIENT_ID}`}
                    buttonText="SignUp"
                    onSuccess={this.props.googleSignUp}
                    onFailure={this.props.googleSignUp}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            </div>

            {/* <a rel="noreferrer" href="https://dribbble.com/shots/3306190-Login-Registration-form" target="_blank" className="icon-link">
                <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png" alt="" />
                </a>
                <a rel="noreferrer" href="https://twitter.com/NikolayTalanov" target="_blank" className="icon-link icon-link--twitter">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" alt="" />
                </a> */}
            <div>
              {this.props.unloggedUser ? <h1>Please Log in First</h1> : null}
            </div>
          </div>
        );
    }
}

export default LoadPage