import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Login from './Login';

const EmployerForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (email, password) => {
    console.log('Logging in:', { email, password });
    
    setIsLogin(false);
  };

  return (
    <Container className="my-5">
      {isLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h2 className="text-center mb-4">Employer Profile</h2>
          <Form className="border p-4 shadow-sm bg-light rounded mx-auto" style={{ maxWidth: '600px' }}>
            <Form.Group controlId="formCompanyName" className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your company name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formJobTitle" className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="Enter job title" required />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Company Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your company and the type of candidates you're looking for" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">Create Employer Profile</Button>
          </Form>
          <div className="text-center mt-3">
            <Button variant="link" onClick={() => setIsLogin(true)}>Already have an account? Login</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default EmployerForm;
