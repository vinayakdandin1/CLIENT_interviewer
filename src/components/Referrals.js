import React, { Component } from 'react'
import '../styles/Referrals.css'
import { Redirect} from 'react-router-dom';
import axios from 'axios';
import config from '../config'

class Referrals extends Component {

    state= {
        referrals: [],
    }


    handleInitialReferrals = () => {
        axios
          .get(`${config.API_URL}/api/referrals`, { withCredentials: true })
          .then((response) => {
            this.setState({
              referrals: response.data,
            });
          })
          .catch((err) => {
            console.log("Fetching data failed", err);
          });
      }
    
    handleDeleteReferral = (referralId) => {
        axios
        .delete(`${config.API_URL}/api/referral/${referralId}`, {
          withCredentials: true,
        })
        .then(() => {
          let filteredReferrals = this.state.referrals.filter((referral) => {
            return referral._id !== referralId;
          });
          this.setState(
            {
              referrals: filteredReferrals,
            },
            () => {
              this.props.history.push(`/referrals`);
            }
          );
        })
        .catch((err) => {
          console.log("delete referral failed", err);
        });
      }
    
    handleReferral = (event) => { 
        event.preventDefault();
        let newReferralDetails = {
          jobTitle: event.target.jobTitle.value,
          companyName: event.target.companyName.value,
          contactPerson: event.target.contactPerson.value,
          contactDetail: event.target.contactDetail.value,
          jobDescription: event.target.jobDescription.value,
          applicationLink: event.target.applicationLink.value,
          jobLocation: event.target.jobLocation.value,
          referralEmail: event.target.referralEmail.value
        };
        axios
          .post(`${config.API_URL}/api/referrals`, newReferralDetails, {withCredentials: true,})
            .then((response) => {
              this.setState(
                {
                  referrals: [...this.state.referrals, response.data],
                },
                () => {
                  this.props.clearValues();
                  this.props.history.push("/referrals");
                }
              );
            })
            .catch(() => {
              console.log("Fetching Failed!!!");
            });
      };

      componentDidMount() {
          this.handleInitialReferrals()
      }


    render() {
        if (!this.props.user) {
            return <Redirect to={"/"} />;
        }
      
        return (
        <div className="card1">
            <h1>Job Referrals from our Users</h1>
            <div className="referrals-flex">
                <div>
                 
                    {this.state.referrals.map((detail) => {
                            return (   
                            <div key={detail._id}>
                                
                                <div className="un">
                                    {detail.jobTitle}
                                    <br></br>
                                    {detail.companyName.toUpperCase()}
                                    <br></br>
                                    {detail.contactPerson}
                                    <br></br>
                                    {detail.contactDetail}
                                    <br></br>
                                    {detail.jobDescription}
                                    <br></br>
                                    {detail.applicationLink}
                                    <br></br>
                                    {detail.jobLocation}
                                    {   this.props.user ? 
                                        ((detail.userId === this.props.user._id) ? 
                                        <button onClick={() => {this.handleDeleteReferral(detail._id)}} className="deleteStep">DELETE</button>
                                        : null) : null
                                    }
                                </div>
                            </div>
                            ); 
                    })}
                </div>
                <div>     
                    <form onSubmit={this.handleReferral}>
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
                        <input
                        name="referralEmail"
                        type="text"
                        placeholder="Referral email-id"
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