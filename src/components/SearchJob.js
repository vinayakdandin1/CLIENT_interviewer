import React, { Component } from 'react'
import { Link } from "react-router-dom";
import loupe from "../picture/magnifying-2681173_1920.png";
import "../styles/SearchJob.css"

export default class SearchJob extends Component {
    render() {
        const { filteredJobs } = this.props
        console.log(filteredJobs)
        return (
            <div>
                {filteredJobs.length ?
                    filteredJobs.map((e) => {
                        return  (
                          <Link style={{ textDecoration: 'none' }} to={`/home/${e._id}`}>
                            <div>
                              {e.companyName}
                              {e.jobTitle}
                            </div>
                          </Link>
                        )
                    }):<div>No Jobs exist with your given Input</div>
                }
            </div>
        )
    }
}
