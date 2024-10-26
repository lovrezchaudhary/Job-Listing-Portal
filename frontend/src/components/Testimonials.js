// src/components/Testimonials.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Testimonials = () => {
  return (
    <Container className="my-5 text-black">
      <h2 className="text-center mb-4 fs-4 " style={{ color: '#384B70' }}>What Our Users Say</h2>{" "}
      <Row>
        <Col md={4}>
          <blockquote className="blockquote text-center text-black fst-italic">
            <p>"This portal helped me land my dream job!"</p>
            <footer className="blockquote-footer">
              John Doe, Software Engineer
            </footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote className="blockquote text-center text-black fst-italic">
            <p>"I found the perfect candidate for my team!"</p>
            <footer className="blockquote-footer">
              Jane Smith, HR Manager
            </footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote className="blockquote text-center text-black fst-italic">
            <p>"Easy to use and highly effective!"</p>
            <footer className="blockquote-footer">
              Alice Johnson, Job Seeker
            </footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
