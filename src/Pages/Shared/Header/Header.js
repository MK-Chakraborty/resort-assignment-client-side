import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Container fluid className="px-0">
            <Navbar bg="danger" variant="dark" expand="lg">
                <Container>
                    <Link to="/home">
                        <Navbar.Brand><i className="fas fa-dungeon"> Resort Palatial</i></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/link"><Button variant="outline-light">Sign In</Button></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar bg="danger" variant="dark" expand="lg" className="border-0 border-top border-3">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to="/home" className="text-decoration-none"><h6 className="fs-6 fw-bold text-white px-3 py-2">Home</h6></NavLink>
                            <NavLink to="/link" className="text-decoration-none"><h6 className="fs-6 fw-bold text-white px-3 py-2">Donation</h6></NavLink>
                            <NavLink to="/event" className="text-decoration-none"><h6 className="fs-6 fw-bold text-white px-3 py-2">Events</h6></NavLink>
                            <NavLink to="/link" className="text-decoration-none"><h6 className="fs-6 fw-bold text-white px-3 py-2">Blog</h6></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;