import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';
import { Link } from 'react-router';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand>
                Test
            </Navbar.Brand>
        </Navbar>
    )
}


export default AppNavbar;