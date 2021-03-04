import React, { Component } from 'react'
import axios from 'axios'
import '../styles/JobDescription.css'
import CreateSteps from './CreateSteps'
import ShowSteps from './ShowSteps'
import config from '../config'

class JobDescription extends Component {


    render() {
        return (
        <div>
         <div className="topLeft">
            <div className="mainContainer">
                <div className="leftSide">
                  <div>
                      <h1>Job Title</h1> 
                      <h3>Company Name</h3>
                      <h6>Application Date</h6>
                  </div>
                  <div>
                      <h6>Job description:</h6>
                      <p>Maecenas at consequat dolor. Donec pretium mollis sapien. Morbi nec sem tincidunt est bibendum consectetur. 
                      Vivamus suscipit lorem sed sollicitudin mattis. Proin egestas facilisis leo, et ultrices leo porta ac. 
                      .</p>
                  </div>
                  <div>
                      <h6>Point of contact:</h6>
                      <p>Name</p>
                  </div>
                  <div>
                      <h6>Contact number:</h6>
                      <p>Number</p>
                  </div>
                  <div>
                      <h6>Contact email:</h6>
                      <p>Email</p>
                  </div>
                  <div>
                      <h6>Rate your interview process:</h6>
                  </div>
                  <div>
                      <h6>Application link:</h6>
                      <p>www.linkedin.com</p>
                  </div>
                  <div>
                      <h6>Salary:</h6>
                      <p>40 000$</p>
                  </div>
                </div>
                <div className="rightSide">
                  <div>
                      <h6>Interview date:</h6>
                      <p>10/03/2021</p>
                  </div>
                  <div>
                      <h6>Job location:</h6>
                      <p>Paris</p>
                  </div>
                  <div>
                      <h6>Satus:</h6>
                      <p>applied / in interview process/ negotiations / received offer / not received</p>
                  </div>
                    <CreateSteps />
                  <div>
                    <ShowSteps />
                  </div>
                </div>
            </div>
            <div className="editJobDesc">
              <button className="submit1">Edit</button>
            </div>
         </div>
        </div>
        )
    }
}

export default JobDescription