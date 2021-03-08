import React, { Component } from 'react'
import axios from 'axios'
import '../styles/JobDescription.css'
import CreateStep from './CreateStep'
import ShowSteps from './ShowSteps'
import config from '../config'

class JobDescription extends Component {

    state = {
        oneJob: {}
    }

    getOneJob = () => {
        let jobId = this.props.match.params.jobId
        axios.get(`${config.API_URL}/api/home/${jobId}`, {withCredentials: true})
            .then((response) => {
                this.setState({
                    oneJob: response.data
                })
            })
            .catch((err) => {
                console.log('Fetching data failed', err)
            })
    }     

    componentDidMount(){
        this.getOneJob()
    }

    handleJobTitleChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.jobTitle = text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleCompanyNameChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.companyName = text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleApplicationDateChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.applicationDate = text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleJobDescriptionChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.jobDescription = text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleContactPersonChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.contactPerson= text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleContactDetailChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.contactDetail = text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleApplicationLinkChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.applicationLink = text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleSalaryChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.salary = text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleSourceOfApplicationChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.sourceOfApplication = text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleInterviewDateChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.interviewDate= text

        this.setState({
            oneJob : cloneOneJob
        })
    }

    handleJobLocationChange = (event) => {
        let text = event.target.value 
        let cloneOneJob = JSON.parse(JSON.stringify(this.state.oneJob))
        cloneOneJob.jobLocation = text

        this.setState({
            oneJob : cloneOneJob
        })
    }



    render() {
        const {oneJob, steps} = this.state
        
        return (
        <div>
         <div className="topLeft">
            <div className="mainContainer">
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
                      <p>{oneJob.applicationLink}</p>
                  </div>
                  <div>
                      <h6>Salary:</h6>
                      <p>{oneJob.salary}</p>
                  </div>
                </div>
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
                      <p>applied / in interview process/ negotiations / received offer / not received</p>
                  </div>
                    <CreateStep handleSubmitStep={this.props.handleSubmitStep} jobId={this.state.oneJob._id} />
                  <div>
                    <ShowSteps handleDeleteStep={this.props.handleDeleteStep} steps={this.props.steps} jobId={this.state.oneJob._id}/>
                  </div>
                </div>
            </div>
            <div className="editJobDesc">
              <button className="submit1">Edit</button>
              <button onClick={() => {this.props.handleDeleteAllJobSteps(oneJob._id); this.props.handleDeleteJob(oneJob._id); }} className="submit1">Delete</button>
            </div>
         </div>
        </div>
        )
    }
}

export default JobDescription