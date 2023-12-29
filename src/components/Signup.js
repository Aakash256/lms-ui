import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
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

    console.log("handle submit");
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8090/auth/signup', formData);
      console.log('Signup successful:', response.data);
      window.location.href = '/login';
      // Add any further actions after successful signup
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle error, show error message, etc.
    }
  };

  return (
    <Container className="signup-container text-center">
      <div className="box-container text-center" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', maxWidth: '600px', width: '100%' }}>
        <h2>Sign Up</h2>
        <div>
          <Form className="mt-3" onSubmit={handleSubmit}>
            <Form.Group controlId="first_name">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>

            <p className="mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Signup;