import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
    render() {
        return (
            <div >
                <Navbar id="navBar" bg="dark" variant="dark" expand="lg">
                    <Link to="/">
                    <Navbar.Brand className="navigation-brand">interVIEWER</Navbar.Brand>
                    </Link>
                        <Form className="searchBar" onSubmit={this.props.onSearch}>
                            <FormControl type="text" name="s" placeholder="Search for job" className="mr-sm-2" />
                            <Button className="searchButton" type="submit" variant="outline-info">Search</Button>
                        </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ml-auto navigation-links"> 
                            <Link className="linkTo" to="/about">About</Link>
                            {
                                this.props.user ? (
                                    <div className="conditionalNav">
                                    <Link className="linkTo" to="/dashboard">Dashboard</Link>
                                    </div>
                                    ) : null
                            }  
                            {
                                this.props.user ? (
                                    <div className="conditionalNav">
                                    <Link className="linkTo" to="/profile">Profile</Link>  
                                    </div>
                                    ) : null
                            }
                            {
                                this.props.user ? (
                                    <div className="conditionalNav">
                                    <Link className="linkTo" to="/" onClick={this.props.onLogout}>Logout</Link>
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