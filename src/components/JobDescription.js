import React, { Component } from 'react'
import axios from 'axios'
import '../styles/JobDescription.css'
import CreateStep from './CreateStep'
import ShowSteps from './ShowSteps'
import config from '../config'
import { Redirect } from "react-router-dom";
class JobDescription extends Component {
  state = {
    id: "",
    jobTitle: "",
    companyName: "",
    applicationDate: "",
    contactPerson: "",
    contactDetail: "",
    jobDescription: "",
    companyRating: "",
    applicationLink: "",
    sourceOfApplication: "",
    salary: "",
    interviewDate: "",
    jobLocation: "",
    editForm: false,
  };

  showForm = () => {
    this.setState({ editForm: true });
  };

  getOneJob = () => {
    let jobId = this.props.match.params.jobId;
    axios
      .get(`${config.API_URL}/api/home/${jobId}`, { withCredentials: true })
      .then((response) => {
        this.setState({
          id: response.data._id,
          jobTitle: response.data.jobTitle,
          companyName: response.data.companyName,
          applicationDate: response.data.applicationDate,
          contactPerson: response.data.contactPerson,
          contactDetail: response.data.contactDetail,
          jobDescription: response.data.jobDescription,
          companyRating: response.data.companyRating,
          applicationLink: response.data.applicationLink,
          sourceOfApplication: response.data.sourceOfApplication,
          salary: response.data.salary,
          interviewDate: response.data.interviewDate,
          jobLocation: response.data.jobLocation,
        });
      })
      .catch((err) => {
        console.log("Fetching data failed", err);
      });
  };

  handleEditChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
        // editForm: false
      },
      () => {
        // console.log(this.state.jobTitle);
      }
    );
  };

  handleEditSubmit = (event) => {
    event.preventDefault();
    let jobId = this.state.id;

    let jobTitle = this.state.jobTitle;
    let companyName = this.state.companyName;
    let applicationDate = this.state.applicationDate;
    let contactPerson = this.state.contactPerson;
    let contactDetail = this.state.contactDetail;
    let jobDescription = this.state.jobDescription;
    let companyRating = this.state.companyRating;
    let applicationLink = this.state.applicationLink;
    let sourceOfApplication = this.state.sourceOfApplication;
    let salary = this.state.salary;
    let interviewDate = this.state.interviewDate;
    let jobLocation = this.state.jobLocation;

    axios
      .patch(
        `${config.API_URL}/api/home/${jobId}`,
        {
          jobTitle,
          companyName,
          applicationDate,
          contactPerson,
          contactDetail,
          jobDescription,
          companyRating,
          applicationLink,
          sourceOfApplication,
          salary,
          interviewDate,
          jobLocation,
        },
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          jobTitle: response.data.jobTitle,
          companyName: response.data.companyName,
          applicationDate: response.data.applicationDate,
          contactPerson: response.data.contactPerson,
          contactDetail: response.data.contactDetail,
          jobDescription: response.data.jobDescription,
          companyRating: response.data.companyRating,
          applicationLink: response.data.applicationLink,
          sourceOfApplication: response.data.sourceOfApplication,
          salary: response.data.salary,
          interviewDate: response.data.interviewDate,
          jobLocation: response.data.jobLocation,
          editForm: false,
        });
      })
      .catch((err) => {
        console.log("Fetching data failed", err);
      });
  };

  componentDidMount() {
    this.getOneJob();
  }

  dateFormatChange = (date) => {
    let newDate = date.split("T", 1).reverse();
    return newDate;
  };

  render() {
     if (!this.props.user) {
       this.props.onProtRoute();
       return <Redirect to={"/"} />;
     }
    const {editForm} = this.state
    const {
      id,
      jobTitle,
      companyName,
      applicationDate,
      contactPerson,
      contactDetail,
      jobDescription,
      applicationLink,
      sourceOfApplication,
      salary,
      interviewDate,
      jobLocation,
    } = this.state;
    return (
      <div>
        <div className="topLeft">
          <div className="mainContainer">
            {editForm ? (
              <div className="leftSide">
                <form onSubmit={this.handleEditSubmit}>
                  <input
                    onChange={this.handleEditChange}
                    value={jobTitle}
                    name="jobTitle"
                    type="text"
                    placeholder="Job Title"
                  />
                  <input
                    onChange={this.handleEditChange}
                    value={companyName}
                    name="companyName"
                    type="text"
                    placeholder="Company"
                  />
                  <br></br>
                  <label>
                    <strong>Application Date</strong>
                  </label>
                  <input
                    onChange={this.handleEditChange}
                    value={applicationDate}
                    type="date"
                    id="start"
                    name="applicationDate"
                  />
                  <br></br>
                  <input
                    value={contactPerson}
                    onChange={this.handleEditChange}
                    name="contactPerson"
                    type="text"
                    placeholder="Contact Person"
                  />
                  <input
                    value={contactDetail}
                    onChange={this.handleEditChange}
                    name="contactDetail"
                    type="text"
                    placeholder="Contact detail"
                  />
                  <input
                    value={jobDescription}
                    onChange={this.handleEditChange}
                    name="jobDescription"
                    type="text"
                    placeholder="Job Description"
                  />
                  {/* <input name="companyRating" type="text" placeholder="Company Rating"/> */}
                  <input
                    value={applicationLink}
                    onChange={this.handleEditChange}
                    name="applicationLink"
                    type="text"
                    placeholder="Application Link"
                  />
                  <input
                    value={sourceOfApplication}
                    onChange={this.handleEditChange}
                    name="sourceOfApplication"
                    type="text"
                    placeholder="Source of Application"
                  />
                  <input
                    value={salary}
                    onChange={this.handleEditChange}
                    name="salary"
                    type="number"
                    placeholder="Salary"
                  />
                  <br></br>
                  <label>
                    <strong>Interview Date</strong>
                  </label>
                  <input
                    type="date"
                    id="start"
                    value={interviewDate}
                    onChange={this.handleEditChange}
                    name="interviewDate"
                  />
                  <br></br>
                  <input
                    value={jobLocation}
                    onChange={this.handleEditChange}
                    name="jobLocation"
                    type="text"
                    placeholder="Job Location"
                  />
                  <br></br>
                  <button className="stepButton" type="submit">
                    SUBMIT
                  </button>
                </form>
              </div>
            ) : (
              <div className="leftSide">
                <div>
                  <h1>{jobTitle}</h1>
                  <h3>{companyName}</h3>
                  <h6>
                    {applicationDate
                      ? this.dateFormatChange(applicationDate)
                      : null}
                  </h6>
                </div>
                <div>
                  <h6>Job description:</h6>
                  <p>{jobDescription}</p>
                </div>
                <div>
                  <h6>Point of contact:</h6>
                  <p>{contactPerson}</p>
                </div>
                <div>
                  <h6>Contact Detail:</h6>
                  <p>{contactDetail}</p>
                </div>
                <div>
                  <h6>Rate your interview process:</h6>
                </div>
                <div>
                  <h6>Application link:</h6>
                  <p>{applicationLink}</p>
                </div>
                <div>
                  <h6>Source of application:</h6>
                  <p>{sourceOfApplication}</p>
                </div>
                <div>
                  <h6>Salary:</h6>
                  <p>
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(salary)}
                  </p>
                </div>
              </div>
            )}

            <div className="rightSide">
              <div>
                {!editForm ? <h6>Interview date:</h6> : null}
                {!editForm ? (
                  <p>
                    {interviewDate
                      ? this.dateFormatChange(interviewDate)
                      : null}
                  </p>
                ) : null}
              </div>
              <div>
                {!editForm ? <h6>Job location:</h6>:null}

                {!editForm ? <p>{jobLocation}</p> : null}
              </div>
              <CreateStep
                handleSubmitStep={this.props.handleSubmitStep}
                jobId={id}
              />
              {!this.props.steps.length ? null : (
                <div>
                  <ShowSteps
                    handleDeleteStep={this.props.handleDeleteStep}
                    steps={this.props.steps}
                    jobId={id}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="editJobDesc">
            <button
              onClick={() => {
                this.showForm();
              }}
              className="submit1"
            >
              EDIT
            </button>
            <button
              onClick={() => {
                this.props.handleDeleteAllJobSteps(id);
                this.props.handleDeleteJob(id);
              }}
              className="submit1"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDescription