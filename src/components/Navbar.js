import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Link to="/">
                <Navbar.Brand>
                    Test
                </Navbar.Brand>
            </Link>
        </Navbar>
    )
}


export default AppNavbar;