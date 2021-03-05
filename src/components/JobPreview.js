import axios from 'axios'
import React, { Component } from 'react'
import config from "../config";
import { Route, Link } from "react-router-dom";


class JobPreview extends Component {
     
    state = {
        singleJob: {}
    }

    singleJob = () => {
        let jobId = this.props.match.params.jobId
        axios.get(`${config.API_URL}/api/dashboard/${jobId}`, {withCredentials: true})
            .then((response) => {
                this.setState({
                    singleJob: response.data
                })
            })
            .catch((err) => {
                console.log('Fetching data failed', err)
            })
    }
    componentDidMount(){
        this.singleJob()
    }

    componentDidUpdate() {
        let jobId = this.props.match.params.jobId;
        if (this.state.singleJob._id !== jobId) {
            this.singleJob()
        }
    }

    render() {
        const {
          singleJob: {
            companyName,
            applicationDate,
            jobTitle,
            contactPerson,
            contactDetail,
            _id
          },
        } = this.state;
        return (
          <div>
            <div>
              <h2>{companyName}</h2>
              <h3>{applicationDate}</h3>
              <h3>{jobTitle}</h3>
            </div>
            <div>
              <Link to={`/home/${_id}`}>
                <button className="submit">Details/Update</button>
              </Link>
              {contactPerson}
              {contactDetail}
            </div>
          </div>
        );
    }
}

export default JobPreview;