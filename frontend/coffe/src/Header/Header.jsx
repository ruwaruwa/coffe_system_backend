import React from 'react'
import {Navbar,Container,Nav}from 'react-bootstrap'
//mport Customer from './../coffe_component/Customer';
function Header() {
  return (
  <div>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container className='m-auto'>
          <Navbar.Brand href="#">Navbar logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/customer">Customer</Nav.Link>
            <Nav.Link href="/Service">Service</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
  )
}

export default Header