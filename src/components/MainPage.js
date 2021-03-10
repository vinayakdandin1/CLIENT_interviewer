import { Navbar, Nav  } from 'react-bootstrap';
import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import '../styles/MainPage.css'

//import axios from 'axios';
//import config from '../config'

class MainPage extends Component {

    componentDidMount() {
        this.props.initialDetails()
    }



    render() {
        


        if (!this.props.user) {
            this.props.onUnlogged()
            return <Redirect to={'/'}  />
        }
        // const { logoutUser } = this.props;
        const {jobDetails, user} = this.props
        

        let interviewCount = 0
        let todayDate = new Date()
        todayDate = JSON.parse(JSON.stringify(todayDate))
        return (
            <div>
              <div className="mainContainer">
                <div className="centralCard">
                  <div className="welcome">
                    <h1>Welcome {user.firstName} !</h1>
                  </div>
                  <div className="welcome">
                    <h3>You have applied to {jobDetails.length} jobs</h3>
                  </div>  
                  <div className="welcome">
                  {
                        jobDetails.map((single) => {
                            if(single.interviewDate){
                                if(single.interviewDate >= todayDate){
                                    interviewCount++
                                    console.log(single.interviewDate)
                                }
                            }
                        })
                    }
                    <h3>You have {interviewCount} upcoming interviews</h3>
                  </div>
                </div>
              </div>
                 <div className="linkButton">
                   <Link to="/dashboard">
                    <button className="goTo">Dashboard</button>
                   </Link>
                   <Link to="/profil">
                    <button className="goTo">Profil</button>
                   </Link>
              </div>
            </div>
        )
    }
}

export default MainPage