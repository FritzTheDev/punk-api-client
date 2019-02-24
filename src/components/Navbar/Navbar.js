import React from 'react';
import { Navbar , Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Toggle />
                <Link to="/" className="navbar-brand">Punk API Client</Link>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Link to="/" className="nav-link">Home</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavbar;