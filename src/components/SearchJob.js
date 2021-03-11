import React, { Component } from 'react'
import { Link } from "react-router-dom";
import loupe from "../picture/magnifying-2681173_1920.png";
import "../styles/SearchJob.css"
import Rmembrall from "../picture/Remembrall.png"
import Empty from "../picture/remembrall_empty.png"

export default class SearchJob extends Component {
    render() {
        const { filteredJobs } = this.props
        console.log(filteredJobs)
        return (
            <div className="searchDiv">
                {filteredJobs.length ?
                    filteredJobs.map((e) => {
                        return  (
                          <div>
                            <div className="card3">
                              <Link className="searchResult" style={{ textDecoration: 'none' }} to={`/home/${e._id}`}>
                                <h3>{e.companyName}</h3>
                                <h3>{e.jobTitle}</h3>
                              </Link>
                            </div>
                            <div>
                              <img src={Rmembrall} alt="remembrall" />
                            </div>
                          </div>
                          
                        )
                    }):<div className="searchResult">
                    
                         <div className="card3">
                         <Link className="searchResult" style={{ textDecoration: 'none' }} to="/home">
                          <h3>No Jobs exist with your given Input</h3>
                         </Link>
                         </div>
                          <div className="emptyImg">
                            <img src={Empty} alt="remembrall" />
                          </div>
                       </div>
                }
            </div>
        )
    }
}
