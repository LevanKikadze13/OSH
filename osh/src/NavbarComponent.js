import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import './NavbarComponent.css'
const AppNavbar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
    const handleOffcanvasClose = () => setShowOffcanvas(false);

    return (
        <>
            <Navbar bg="light" expand="lg" className="mb-3">
                <Container fluid>
                    <div className="header-content" id="header-content-left">
                        <h1 className="logo-container">
                            <img className="logo" src="https://oshe.ge/images/custom/logo-light.png" alt="Logo" />
                        </h1>
                    </div>
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
                            <Nav className="justify-content-between flex-grow-1 pe-3 menu-items" >
                                <div className='options'>
                                    <Nav.Link className='nav-item' href="#">Option 1</Nav.Link>
                                    <NavDropdown className='nav-item dropdown-option' title="Option2" id="offcanvas-dropdown">
                                        <NavDropdown.Item className='dropdown-child' href="#">Dropdown Item 1</NavDropdown.Item>
                                        <NavDropdown.Item className='dropdown-child' href="#">Dropdown Item 2</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className='dropdown-child' href="#">Dropdown Item 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link className='nav-item' href="#">Option 3</Nav.Link>
                                </div>

                                <Nav>
                                    <div className="header-content header-content-right" id="header-content-right">
                                        <a href="#" className="btn btn-primary me-2">Login</a>
                                        <a href="#" className="btn ">Register</a>
                                    </div>
                                </Nav>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default AppNavbar;