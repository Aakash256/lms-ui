import React, { useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./Home.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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

      navigate('/organizations',{state: { accessToken: response.data.accessToken }});
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
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="email">
            <Form.Label column md="4">
              Email address
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="password" className="mt-4 mb-5">
            <Form.Label column md="4">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" placeholder="Password" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Button className="btn btn-success px-5" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;