import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './NavbarComponent'
const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Navbar.Brand href="#">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Option 1</Nav.Link>
          <NavDropdown title="Option 2" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Dropdown Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Dropdown Option 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated Link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Option 3</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-primary" className="mr-2">
            Login
          </Button>
          <Button variant="primary">Register</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;