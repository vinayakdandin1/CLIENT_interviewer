import React, { Component } from 'react'
import { Navbar, Nav  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Navigation extends Component {
    render() {
        return (
            <div >
                <Navbar  bg="dark" variant="dark">
                    <Navbar.Brand className="navigation-brand" href="/">Home</Navbar.Brand>
                    <Nav className="ml-auto navigation-links">
                    <Nav.Link href="/about">About</Nav.Link>
                    {/* <Nav.Link href="/"></Nav.Link> */}
                    <Nav.Link onClick={this.props.onLogout}>Log out</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation