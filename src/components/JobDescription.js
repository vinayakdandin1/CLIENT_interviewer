import React, { Component } from 'react'
import axios from 'axios'
import '../styles/JobDescription.css'
import CreateStep from './CreateStep'
import ShowSteps from './ShowSteps'
import config from '../config'

class JobDescription extends Component {
  state = {
    oneJob: {},
    showEdit: false,
  };

  showForm = () => {
    this.setState({ showEdit: true });
  };

  getOneJob = () => {
    let jobId = this.props.match.params.jobId;
    axios
      .get(`${config.API_URL}/api/home/${jobId}`, { withCredentials: true })
      .then((response) => {
        this.setState({
          oneJob: response.data,
        });
      })
      .catch((err) => {
        console.log("Fetching data failed", err);
      });
    };
    
    handleEditChange = (event) => {
    console.log(event.target.value);
    let text = event.target.value;
    let clonedText = JSON.parse(JSON.stringify(this.state.oneJob));
    clonedText = text;

    this.setState({
      oneJob: clonedText,
    });
    };
    
//     handleSubmit = (event) => {
//         event.preventDefault()
//         let jobTitle = event.target.jobTitle.value
//         let companyName = event.target.companyName.value;
//         let applicationDate = event.target.applicationDate.value;
//         let contactPerson = event.target.contactPerson.value;
//         let contactDetail = event.target.contactDetail.value;
//         let jobDescription = event.target.jobDescription.value;
//         let applicationLink = event.target.jobTitle.value;
//         let jobTitle = event.target.jobTitle.value;
//     }

//   componentDidMount() {
//     this.getOneJob();
//   }

  // componentDidUpdate() {
  //     if (this.state.showEdit === true) {
  //         this.setState({
  //             showEdit: false
  //         })
  //     }
  // }

  render() {
    const { oneJob, steps, showEdit } = this.state;
    return (
      <div>
        <div className="topLeft">
          <div className="mainContainer">
            {showEdit ? (
              <form onSubmit={this.props.onAdd}>
                <input
                  name="jobTitle"
                  type="text"
                  onChange={this.handleEditChange}
                  value={oneJob.jobTitle}
                  placeholder="Job Title"
                />
                <input
                  name="companyName"
                  onChange={this.handleEditChange}
                  value={oneJob.companyName}
                  type="text"
                  placeholder="Company"
                />
                <br></br>
                <label>
                  <strong>Application Date</strong>
                </label>
                <input
                  type="date"
                  id="start"
                  name="applicationDate"
                  onChange={this.handleEditChange}
                  value={oneJob.applicationDate}
                />
                <br></br>
                <input
                  name="contactPerson"
                  type="text"
                  placeholder="Contact Person"
                  onChange={this.handleEditChange}
                  value={oneJob.contactPerson}
                />
                <input
                  name="contactDetail"
                  type="text"
                  placeholder="Contact detail"
                  onChange={this.handleEditChange}
                  value={oneJob.contactDetail}
                />
                <input
                  name="jobDescription"
                  type="text"
                  placeholder="Job Description"
                  onChange={this.handleEditChange}
                  value={oneJob.jobDescription}
                />
                {/* <input name="companyRating" type="text" placeholder="Company Rating"/> */}
                <input
                  name="applicationLink"
                  type="text"
                  placeholder="Application Link"
                  onChange={this.handleEditChange}
                  value={oneJob.applicationLink}
                />
                <input
                  name="sourceOfApplication"
                  type="text"
                  placeholder="Source of Application"
                  onChange={this.handleEditChange}
                  value={oneJob.sourceOfApplication}
                />
                <input
                  name="salary"
                  type="number"
                  placeholder="Salary"
                  onChange={this.handleEditChange}
                  value={oneJob.salary}
                />
                <br></br>
                <label>
                  <strong>Interview Date</strong>
                </label>
                {/* <input type="date" id="start" name="interviewDate"/> */}
                <br></br>
                <input
                  name="jobLocation"
                  type="text"
                  placeholder="Job Location"
                  onChange={this.handleEditChange}
                  value={oneJob.jobLocation}
                />
                <br></br>
                <button type="submit">Submit</button>
              </form>
            ) : (
              <div className="leftSide">
                <div>
                  <h1>{oneJob.jobTitle}</h1>
                  <h3>{oneJob.companyName}</h3>
                  <h6>{oneJob.applicationDate}</h6>
                </div>
                <div>
                  <h6>Job description:</h6>
                  <p>{oneJob.jobDescription}</p>
                </div>
                <div>
                  <h6>Point of contact:</h6>
                  <p>{oneJob.contactPerson}</p>
                </div>
                <div>
                  <h6>Contact Detail:</h6>
                  <p>{oneJob.contactDetail}</p>
                </div>
                <div>
                  <h6>Rate your interview process:</h6>
                </div>
                <div>
                  <h6>Application link:</h6>
                  <p>{oneJob.jobTitle}</p>
                </div>
                <div>
                  <h6>Salary:</h6>
                  <p>{oneJob.jobTitle}</p>
                </div>
              </div>
            )}
            <div className="rightSide">
              <div>
                <h6>Interview date:</h6>
                <p>{oneJob.interviewDate}</p>
              </div>
              <div>
                <h6>Job location:</h6>
                <p>{oneJob.jobLocation}</p>
              </div>
              <div>
                <h6>Satus:</h6>
                <p>
                  applied / in interview process/ negotiations / received offer
                  / not received
                </p>
              </div>
              <CreateStep
                handleSubmitStep={this.props.handleSubmitStep}
                jobId={this.state.oneJob._id}
              />
              <div>
                <ShowSteps
                  handleDeleteStep={this.props.handleDeleteStep}
                  steps={this.props.steps}
                  jobId={this.state.oneJob._id}
                />
              </div>
            </div>
          </div>
          <div className="editJobDesc">
            <button
              onClick={() => {
                this.showForm();
              }}
              className="submit1"
            >
              Edit
            </button>
            <button
              onClick={() => {
                this.props.handleDeleteAllJobSteps(oneJob._id);
                this.props.handleDeleteJob(oneJob._id);
              }}
              className="submit1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDescription