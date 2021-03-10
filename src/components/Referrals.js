import React, { Component } from 'react'
import '../styles/Referrals.css'

class Referrals extends Component {
    render() {
        return (
        <div className="card1">
            <h1>Job Referrals from our Users</h1>
            <div className="referrals-flex">
                <div>
                    <h3>Place to show referrals by other users</h3>
                </div>
                <div>     
                    <form onSubmit={this.props.handleReferral}>
                        <input name="jobTitle" type="text" placeholder="Job Title" />
                        <input name="companyName" type="text" placeholder="Company" />
                        <input
                        name="contactPerson"
                        type="text"
                        placeholder="Contact Person - optional"
                        />
                        <input
                        name="contactDetail"
                        type="text"
                        placeholder="Contact detail - optional"
                        />
                        <input
                        name="jobDescription"
                        type="text"
                        placeholder="Job Description"
                        />
                        {/* <input name="companyRating" type="text" placeholder="Company Rating"/> */}
                        <input
                        name="applicationLink"
                        type="text"
                        placeholder="Application Link"
                        />
                        <input
                        name="jobLocation"
                        type="text"
                        placeholder="Job Location"
                        />
                        <br></br>
                        <div className="formSubmit">
                        <button className="submit2" type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div> 
        )
    }
}

export default Referrals