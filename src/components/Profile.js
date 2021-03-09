import React, { Component } from 'react'

export default class Profile extends Component {






    render() {
        if (!this.props.user) {
          return <Redirect to={"/"} />;
        }
        const {user}=this.props
        return (
            <div>
                <h1>Name: {user.firstName}</h1>
            </div>
        )
    }
}
