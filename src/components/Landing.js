import React, { Component } from "react";
import { Row, Container, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import '../styles/Landing.css'
import JobPreview from './JobPreview'

class Landing extends Component {

  state = {
    showPrev: false,
    processing: true
  }

  showPreview = () => {
    this.setState({
      showPrev: true
    })
  }

  render() {
    if (!this.props.loggedInUser) {
      return <Redirect to={"/"} />;
    }
    const { jobDetails } = this.props;

    if(!this.props.loggedInUser) {
      return <Redirect to="/" />
    }

    const { onDateFilter, oninterviewFilter, onSalarySort } = this.props;
    
    return (
      <div>
       <div className="mainContainer">
        <div className="leftSide">
          <Row>
            <Col>
             <div className="card2">
               <div className="topTitle">
               <h1>Job Offers</h1>
                <div>
                 <DropdownButton id="dropdown-basic-button" title="SORT BY">
                  <Dropdown.Item onClick={onDateFilter}>Application Date</Dropdown.Item>
                  <Dropdown.Item onClick={oninterviewFilter}>Interview Date</Dropdown.Item>
                  <Dropdown.Item onClick={onSalarySort}>Salary</Dropdown.Item>
                 </DropdownButton>
                </div>
               </div>
             <div className="scrollDown1">
                {jobDetails.map((detail) => {
                  if (detail.userId == this.props.loggedInUser?._id) {
                    return (
                      <div key={detail._id}>
                        <Link to={`/dashboard/${detail._id}`}>
                          <div className="un">
                            {detail.jobTitle}
                            <br></br>
                            {detail.companyName.toUpperCase()}
                          </div>
                        </Link>
                      </div>
                    );
                  }
                })}
             </div>
             </div>
            </Col>
          </Row>
          <div>
            {this.props.isJobPreview && <JobPreview {...this.props}/>}
          </div>
        </div>
        <div className="rightSide">
            <Col>
              <form onSubmit={this.props.onAdd}>
                <input name="jobTitle" type="text" placeholder="Job Title" />
                <input name="companyName" type="text" placeholder="Company" />
                <br></br>
                <label>
                  <strong>Application Date</strong>
                </label>
                <input type="date" id="start" name="applicationDate" />
                <br></br>
                <input
                  name="contactPerson"
                  type="text"
                  placeholder="Contact Person"
                />
                <input
                  name="contactDetail"
                  type="text"
                  placeholder="Contact detail"
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
                  name="sourceOfApplication"
                  type="text"
                  placeholder="Source of Application"
                />
                <input name="salary" type="number" placeholder="Salary" />
                <br></br>
                <label>
                  <strong>Interview Date</strong>
                </label>
                <input type="date" id="start" name="interviewDate" />
                <br></br>
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
            </Col>
        </div>
       </div>
      </div>
    );
  }
}

export default Landing;
