import axios from 'axios'
import React, { Component } from 'react'
import config from "../config";
import { Route, Link } from "react-router-dom";
import "../styles/JobPreview.css"


class JobPreview extends Component {
  state = {
    singleJob: {},
  };

  singleJob = () => {
    let jobId = this.props.match.params.jobId;
    axios
      .get(`${config.API_URL}/api/dashboard/${jobId}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          singleJob: response.data,
        });
      })
      .catch((err) => {
        console.log("Fetching data failed", err);
      });
  };
  componentDidMount() {
    this.singleJob();
  }

  componentDidUpdate() {
    let jobId = this.props.match.params.jobId;
    if (this.state.singleJob._id !== jobId) {
      this.singleJob();
    }
  }
  dateFormatChange = (date) => {
    let newDate = date.split("T", 1).reverse();
    return newDate;
  };

  render() {
    const {
      singleJob: {
        companyName,
        applicationDate,
        jobTitle,
        contactPerson,
        contactDetail,
        _id,
      },
    } = this.state;
    return (
      <div className="card5">
        <div>
          <div className="jobOverview">
            <h3>Company Name: {companyName}</h3>
            <h4>Job Position: {jobTitle}</h4>
            <h5>Application Date: {applicationDate ?this.dateFormatChange(applicationDate):null}</h5>
            <h5>Contact person: {contactPerson}</h5>
            <h5>Contact details: {contactDetail}</h5>
          </div>
        </div>
        <div className="detailsButton">
              <Link style={{ textDecoration: 'none' }} to={`/home/${_id}`}>
                <button className="submit2">DETAILS / UPDATE</button>
              </Link>
            </div>
      </div>
    );
  }
}

export default JobPreview;