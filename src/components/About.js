import React, { Component } from 'react'
import "../styles/About.css"

class About extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="aboutUs">
                  <div className="card3">
                  <h6>Hello ! We are delighted to welcome you to our interViewer website. Us ? The Ironhack dream team, Zelimhan, Vinayak & Benjamin, the three most powerfull fullstack developper of the century! (or almost ..)</h6>
                  <h6>We had the idea of inventing an application where everyone can register the job offers to which they have responded and thus follow the recruitment process. You can update the job offer as well as create steps (call HR, go to interview, call HR back ...)</h6>
                  <h6>When you login you have a quick reminder of how many jobs you have applied and how many interview are upcoming</h6>
                  </div>
                  <div className="ourProfil">
                      <div className="card4"></div>
                      <div className="card4"></div>
                      <div className="card4"></div>
                  </div>
                </div>
            </div>
        )
    }
}

export default About;