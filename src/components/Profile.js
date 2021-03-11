import React, { Component } from 'react'
import axios from "axios";
import config from "../config";
import { Redirect } from "react-router-dom";

export default class Profile extends Component {


  render() {
    if (!this.props.user) {
      this.props.onProtRoute();
      return <Redirect to={"/"} />;
    }
    const { user } = this.props;
    return (
      <div>
        <h1>Name: {user.firstName}</h1>
      </div>
    );
  }
}
