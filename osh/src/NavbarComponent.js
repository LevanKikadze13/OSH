import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';

const AppNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={handleOffcanvasToggle} />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleOffcanvasClose}
            placement="end"
            scroll={true}
            backdrop={false}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#">Option 1</Nav.Link>
                <NavDropdown title="Option 2" id="offcanvas-dropdown">
                  <NavDropdown.Item href="#">Dropdown Item 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Dropdown Item 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Dropdown Item 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Option 3</Nav.Link>
                <Nav.Link href="#">Login</Nav.Link>
                <Nav.Link href="#">Register</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Option 1</Nav.Link>
              <NavDropdown title="Option 2" id="navbar-dropdown">
                <NavDropdown.Item href="#">Dropdown Item 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown Item 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Dropdown Item 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Option 3</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;