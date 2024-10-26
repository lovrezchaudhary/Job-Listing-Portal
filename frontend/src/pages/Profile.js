import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Login from '../components/Login';

const Profile = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (email, password) => {
    console.log('Logging in:', { email, password });
    setIsLogin(false);
  };

  return (
    <Container className="mt-5 pt-4" style={{ width: '700px' }}>
      {isLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h2 className="text-center fw-bold mb-4">Upload Your Resume</h2>
          <Form className="border p-4 shadow-sm bg-light rounded">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Qualification</Form.Label>
              <Form.Control type="text" placeholder="Enter your Qualification" />
            </Form.Group>
            <Form.Group controlId="formResume" className="mb-3">
              <Form.Label>Upload Resume</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Save Changes</Button>
          </Form>
          <div className="text-center mt-3 mb-5">
            <Button variant="link" onClick={() => setIsLogin(true)}>Already have an account? Login</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Profile;
