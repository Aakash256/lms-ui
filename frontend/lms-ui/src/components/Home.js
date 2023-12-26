import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to the Home Page!</h2>
      <div style={{ display: 'inline-block', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <p>This is the main content of your application.</p>
        <div>
          <Link to="/signup">
            <button style={{ marginRight: '10px' }}>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;