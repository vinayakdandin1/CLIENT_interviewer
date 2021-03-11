import React, { Component } from 'react'
import '../styles/Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'

library.add(faLinkedin, faGithub); 

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="copy-right" >Developed By</div>
                <div className="footer-main">  
                    <div>  
                    <h4>Benjamin</h4>
                    <div className="footer-flex" >
                        <div>
                            <a href="https://www.linkedin.com/in/benjamin-megret" target="_blank" >
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Benjamin-dev-ironhack" target="_blank">
                                <FontAwesomeIcon  icon={['fab', 'github']} />
                            </a>
                        </div>
                    </div>
                    </div>
                    <div>  
                    <h4>Zelimhan</h4>
                    <div className="footer-flex" >
                        <div>
                            <a href="https://www.linkedin.com/in/zelimhan-ismailov/" target="_blank" >
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/musason" target="_blank">
                                <FontAwesomeIcon  icon={['fab', 'github']} />
                            </a>
                        </div>
                    </div>
                    </div>
                    <div>  
                    <h4>Vinayak</h4>
                    <div className="footer-flex" >
                        <div>
                            <a href="https://www.linkedin.com/in/vinayak-dandin" target="_blank" >
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/vinayakdandin1" target="_blank" >
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                        </div>
                    </div>
                    </div>                  
                </div>
                <div className="copy-right">&copy; 2021 Benjamin, Zelimhan and Vinayak</div>
            </div>
        )
    }
}

export default Footer