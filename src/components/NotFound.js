import React, { Component } from 'react'
import Surprise from "../picture/surprise copie.png"
import notfound from "../picture/error-2129569_1920.jpg"
import "../styles/Notfound.css"

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="notFound">
                    <div>
                    <img className="surprise" src={Surprise} alt="You know who"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound
