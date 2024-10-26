import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    onLogin(email, password);
  };

  return (
    <Container className="my-5 mb-5" style={{ width: '700px' }}>
      <Card className="shadow-lg rounded">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>
                <FaUser className="me-2" /> Email
              </Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label>
                <FaLock className="me-2" /> Password
              </Form.Label>
              <Form.Control type="password" placeholder="Enter your password" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Login
            </Button>

            <div className="text-center">
              <p>
                Don't have an account?{' '}
                <Button variant="link" onClick={() => alert('Redirect to Sign Up')}>
                  Sign Up
                </Button>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
