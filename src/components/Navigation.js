import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
    render() {
        return (
            <div >
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand className="navigation-brand" to="/">interVIEWER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto navigation-links">
                            <Nav.Link to="/about">About</Nav.Link>
                            {
                                this.props.user ? (
                                    <div className="conditionalNav">
                                    <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                                    </div>
                                    ) : null
                            }  
                            {
                                this.props.user ? (
                                    <div className="conditionalNav">
                                    <Nav.Link to="/profile">Profile</Nav.Link>  
                                    </div>
                                    ) : null
                            }
                            {
                                this.props.user ? (
                                    <div className="conditionalNav">
                                    <Nav.Link onClick={this.props.onLogout}>Log out</Nav.Link>
                                    </div>
                                    ) : null
                            }  
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation