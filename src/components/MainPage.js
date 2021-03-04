import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import config from '../config'

class MainPage extends Component {

    render() {

        if(!this.props.user) {
            return <Redirect to={'/'} />
        }

        return (
            <div>
                This is main Page
               
                
            </div>
        )
    }
}

export default MainPage