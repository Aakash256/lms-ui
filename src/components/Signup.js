import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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
          <Form className="mt-5" onSubmit={handleSubmit}>
            <Form.Group controlId="first_name" as={Row} className="mb-3">
              <Form.Label column md="4">First Name</Form.Label>
              <Col md="8">
                <Form.Control type="text" placeholder="Enter first name" onChange={handleChange} />
              </Col>
            </Form.Group>

            <Form.Group controlId="last_name" as={Row} className="mb-3">
              <Form.Label column md="4">Last Name</Form.Label>
              <Col md="8">
                <Form.Control type="text" placeholder="Enter last name" onChange={handleChange} />
              </Col>
            </Form.Group>

            <Form.Group controlId="email" as={Row} className="mb-3">
              <Form.Label column md="4">Email address</Form.Label>
              <Col md="8">
                <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
              </Col>
            </Form.Group>

            <Form.Group controlId="password" as={Row} className="mb-5">
              <Form.Label column md="4">Password</Form.Label>
              <Col md="8">
                <Form.Control type="password" placeholder="Password" onChange={handleChange} />
              </Col>
            </Form.Group>

            <Button className="btn btn-success px-5" type="submit">
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