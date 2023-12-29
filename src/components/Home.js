import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import "./Home.css";

const Home = () => {
  return (
    <Container className="text-center home-container">
      <div className="box-container text-center" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', maxWidth: '600px', width: '100%' }}>
        <h2>Welcome to the Home Page!</h2>
        <div className="mt-3 d-flex justify-content-center">
          <Link to="/signup">
            <Button variant="primary">Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button variant="success" className="ml-3">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Home;
