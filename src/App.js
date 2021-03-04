import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import axios from "axios";
import config from "./config";

export default class App extends Component {

  state = {
    jobDetails:[]
  }


  addJobDetails = (event) => {
    event.preventDefault()
    let newJobDetails = {
      jobTitle: event.target.jobTitle.value,
      companyName: event.target.companyName.value,
      // applicationDate: event.target.applicationDate.value,
      contactPerson: event.target.contactPerson.value,
      contactDetail: event.target.contactDetail.value,
      jobDescription: event.target.jobDescription.value,
      // companyRating: event.target.companyRating.value,
      applicationLink: event.target.applicationLink.value,
      sourceOfApplication: event.target.sourceOfApplication.value,
      salary: event.target.salary.value,
      // interviewDate: event.target.interviewDate.value,
      jobLocation: event.target.jobLocation.value,
    };

    axios.post(`${config.API_URL}/api/create-status`, newJobDetails)
      .then((response) => {
        this.setState({
          jobDetails: response.data,
        });
      })
      .catch (() => {
        console.log("Fetching Failed!!!")
      })

  };




  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={(routeProps) => {
              return <Landing onAdd={this.addJobDetails} {...routeProps} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}




