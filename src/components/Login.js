import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import "./Home.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8090/auth/login', formData);
      console.log('Login successful:', response.data);

      // Add any further actions after successful login

    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle error, show error message, etc.
    }
  };

  return (
    <Container className="text-center home-container">
      <div className="box-container text-center" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', maxWidth: '600px', width: '100%' }}>
        <h2>Login</h2>
        <Form className="mt-3" onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;