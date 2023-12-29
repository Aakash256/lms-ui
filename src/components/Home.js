import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Welcome to the Home Page!</h2>
      <div className="mt-3">
        <Link to="/signup">
          <Button variant="primary">Sign Up</Button>
        </Link>
        <Link to="/login">
          <Button variant="success" className="ml-3">
            Login
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;