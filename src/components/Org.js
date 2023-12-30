import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "./Home.css";

const Org = () => {
  const [orgInfo, setOrgInfo] = useState({
    name: '',
    email: '',
    description: '',
    phoneNo: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrgInfo({
      ...orgInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log(orgInfo);
  };

  return (
    <Container className="text-center home-container">
      <div className="box-container text-center" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', maxWidth: '600px', width: '100%' }}>
        <h2>Create an organization</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control type="text" placeholder="Enter organization name" name="name" value={orgInfo.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={orgInfo.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter organization description" name="description" value={orgInfo.description} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="phoneNo">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" name="phoneNo" value={orgInfo.phoneNo} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Enter status" name="status" value={orgInfo.status} onChange={handleChange} required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Org;