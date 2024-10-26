// src/pages/Profile.js
import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Profile() {
  return (
    <Container className="mt-5 mb-5 pt-4 d-flex flex-column align-items-center">
      <h2 className="text-center fw-bold mb-4">Upload Your Resume</h2>
      <Form className="border p-5 shadow-lg bg-white rounded w-100" style={{ maxWidth: '500px' }}>
        <Row>
          <Col xs={12} md={12}>
            <Form.Group controlId="formName" className="mb-4">
              <Form.Label className="fw-semibold">Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                className="p-2 border border-2 rounded"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={12}>
            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 border border-2 rounded"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={12}>
            <Form.Group controlId="formResume" className="mb-4">
              <Form.Label className="fw-semibold">Upload Resume</Form.Label>
              <Form.Control 
                type="file" 
                className="p-2 border border-2 rounded"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="w-100 py-2 fw-bold shadow">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Profile;
