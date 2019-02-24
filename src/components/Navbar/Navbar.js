import React from 'react';
import { Navbar , Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Container>
                <Link to="/">
                    <Navbar.Brand>
                        Test
                    </Navbar.Brand>
                </Link>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link>Test</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;