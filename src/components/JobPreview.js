import axios from 'axios'
import React, { Component } from 'react'
import config from "../config";
import { Route, Link } from "react-router-dom";


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
      <div className="card3">
        <div>
          <div>
            <h2>{companyName}</h2>
            <h3>{jobTitle}</h3>
            <h5>{applicationDate ?this.dateFormatChange(applicationDate):null}</h5>
            <h5>{contactPerson}</h5>
            <h5>{contactDetail}</h5>
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