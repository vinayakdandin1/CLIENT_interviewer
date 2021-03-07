import React, { Component } from 'react'
import '../styles/Footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-main">
                    <div >Footer Content</div>
                    <div >Links-1</div>
                    <div >Links-2</div>
                </div>
                <div className="copy-right">Copyright place</div>
            </div>
        )
    }
}

export default Footer