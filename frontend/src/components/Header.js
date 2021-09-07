import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <i className='bi bi-bag-check-fill'></i> ProShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='bi bi-cart3'></i> Warenkorb
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='bi bi-person-circle'></i> Login
                </Nav.Link>
              </LinkContainer>
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
  )
}

export default Header
