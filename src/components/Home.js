import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center text-center min-vh-100">
      <div className="mx-auto border border-1 border-secondary rounded p-4 w-100 w-md-50">
        <h2>Lead Management System</h2>
        <p>The Lead Management System provides businesses with an efficient platform to streamline and organize their 
          leads, offering a centralized space for comprehensive lead management, fostering enhanced organization and 
          productivity.</p>
        <Row className="text-center justify-content-center">
          <Col md={4} className="mb-3">
            <Link to="/signup">
              <Button className="px-4 btn btn-success">Sign Up</Button>
            </Link>
          </Col>
          <Col md={4} className="mb-3">
            <Link to="/login">
              <Button className="px-4 btn btn-success">Login</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;