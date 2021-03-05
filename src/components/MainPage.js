import { Navbar, Nav  } from 'react-bootstrap';
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../styles/MainPage.css'


class MainPage extends Component {

    render() {

        // if(!this.props.user) {
        //     return <Redirect to={'/'} />
        // }

        return (
            
            <div className="home-page-main">
                {
                    console.log(this.props.user)
                }
            </div>
        )
    }
}

export default MainPage