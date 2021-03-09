import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
    render() {
        return (
            <div >
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand className="navigation-brand" to="/">interVIEWER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline onSubmit={this.props.onSearch}>
                            <FormControl type="text" name="s" placeholder="Search for Job" className="mr-sm-2" />
                            <Button type="submit" variant="outline-info">Search</Button>
                        </Form>
                        <Nav className="ml-auto navigation-links">
                            <Link to="/about">About</Link>
                            {
                                this.props.user ? (
                                    <div className="conditionalNav">
                                    <Link to="/dashboard">Dashboard</Link>
                                    </div>
                                    ) : null
                            }  
                            {
                                this.props.user ? (
                                    <div className="conditionalNav">
                                    <Link to="/profile">Profile</Link>  
                                    </div>
                                    ) : null
                            }
                            {
                                this.props.user ? (
                                    <div className="conditionalNav">
                                    <Link onClick={this.props.onLogout}>Log out</Link>
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