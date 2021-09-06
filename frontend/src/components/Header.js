import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
              <Container>
                <Navbar.Brand href="#home"><i class="bi bi-bag-check-fill"></i> ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="/cart"><i class="bi bi-cart3"></i> Warenkorb</Nav.Link>
                    <Nav.Link href="/login"><i class="bi bi-person-circle"></i> Login</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
    );
};

export default Header;