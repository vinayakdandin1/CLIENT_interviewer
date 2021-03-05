import { Navbar, Nav  } from 'react-bootstrap';
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../styles/MainPage.css'

//import axios from 'axios';
//import config from '../config'

class MainPage extends Component {

    render() {

        // if(!this.props.user) {
        //     return <Redirect to={'/'} />
        // }

        return (
            
            <div className="home-page-main">
                Main page works
            </div>
        )
    }
}

export default MainPage