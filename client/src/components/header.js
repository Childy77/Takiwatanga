import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand id="Name" href="#home"><i className="fa-solid fa-hands-holding-child"></i> Takiwatanga</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/ourstory">Our Story</Link>
            <Link className="nav-link" to="/post">Post</Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/profile">Profile</Link>
              <NavDropdown.Item href="signin">
                Log in
              </NavDropdown.Item>
              <NavDropdown.Item href="signup">
                Logout
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
    export default Header