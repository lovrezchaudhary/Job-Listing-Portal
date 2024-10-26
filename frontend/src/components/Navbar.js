import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="shadow-lg" style={{ backgroundColor: '#433878' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">Job Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="mx-2">Job Seeker</Nav.Link>
            <Nav.Link as={Link} to="/employer">Employer </Nav.Link>
            <Nav.Link as={Link} to="/JobList" className="mx-2">Jobs</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
