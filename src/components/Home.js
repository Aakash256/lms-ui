import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center text-center min-vh-100">
      <div className="mx-auto border border-1 border-secondary rounded p-4 w-50">
        <h2>Lead Management System</h2>
        <p>The Lead Management System provides businesses with an efficient platform to streamline and organize their 
          leads, offering a centralized space for comprehensive lead management, fostering enhanced organization and 
          productivity.</p>
        <div className="row text-center justify-content-center">
          <Link to="/signup" className="col-md-4">
            <Button className="px-5 btn btn-success">Sign Up</Button>
          </Link>
          <Link to="/login" className="col-md-4">
            <Button className="px-5 btn btn-success">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;