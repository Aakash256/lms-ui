import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import OrgHome from './components/OrgHome';
import Org from './components/Org';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/organizations" element={<OrgHome />} />
          <Route path="/organization/create" element={<Org />} />
        </Routes>
    </Router>
  );
}

export default App;