import { Navbar, Nav  } from 'react-bootstrap';
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../styles/MainPage.css'

//import axios from 'axios';
//import config from '../config'

class MainPage extends Component {

    componentDidMount() {
        this.props.initialDetails()
    }

    render() {
        
        if(!this.props.user){
            return <Redirect to={'/'}/>
        }
        // const { logoutUser } = this.props;
        const {jobDetails, user} = this.props
        console.log(user)

        let interviewCount = 0
        let todayDate = new Date()
        todayDate = JSON.stringify(todayDate)

        return (
            <div>
                <div>
                    <h1>welcome {user.firstName}</h1>
                    <h3>You have applied to {jobDetails.length} jobs</h3>
                    {
                        jobDetails.map((single) => {
                            if(single.interviewDate){
                                if(single.interviewDate >= todayDate){
                                    interviewCount++
                                }
                            }
                        })
                    }
                    <h3>You have {interviewCount} upcoming interviews</h3>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>

            </div>
        )
    }
}

export default MainPage