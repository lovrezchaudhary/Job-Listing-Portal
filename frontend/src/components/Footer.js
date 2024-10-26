// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{ color: '#304146' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center mb-3" style={{ color: '#d3d3d3' }}>
            <h5>Job Listing Portal</h5>
            <p>Your one-stop solution for finding your dream job and hiring top talent.</p>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ color: '#d3d3d3' }}>
          <Col xs={12} md={4} className="text-center">
            <h6>Follow Us</h6>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-light mx-2"><FaFacebook size={24} /></a>
              <a href="#" className="text-light mx-2"><FaTwitter size={24} /></a>
              <a href="#" className="text-light mx-2"><FaLinkedin size={24} /></a>
              <a href="#" className="text-light mx-2"><FaInstagram size={24} /></a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3" style={{ color: '#d3d3d3' }}>
          <Col xs={12} className="text-center">
            <p>&copy; {new Date().getFullYear()} Job Listing Portal. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
