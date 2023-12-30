import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

const OrgHome = () => {
  const [organizations, setOrganizations] = useState([]);
  const location = useLocation();

  

  useEffect(() => {
    // Fetch organizations data from an API or other data source
    // For demonstration purposes, I'll use a static array
    const sampleOrganizations = [
      {
        id: 1,
        name: 'Organization 1',
        email: 'org1@example.com',
        description: 'Description for Organization 1',
        phoneNo: '123-456-7890',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Organization 2',
        email: 'org2@example.com',
        description: 'Description for Organization 2',
        phoneNo: '987-654-3210',
        status: 'Inactive',
      },
    ];

    setOrganizations(sampleOrganizations);

    const fetchUserMe = async () => {
    try {
        const accessToken = location.state?.accessToken;
        const response = await axios.get('http://localhost:8090/v1/user/me', {
          headers: {
            Authorization: 'Bearer ' + accessToken, // Replace YOUR_ACCESS_TOKEN with the actual token
          },
        });
        console.log('User data:', response.data);

        const user = response.data;
        console.log('user id', user?.id);
        // Handle the response data as needed
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle errors
      }
    }

    fetchUserMe();
  }, []);

  return (
    <Container className="text-center">
      <h2>Organizations List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org) => (
            <tr key={org.id}>
              <td>{org.id}</td>
              <td>{org.name}</td>
              <td>{org.email}</td>
              <td>{org.description}</td>
              <td>{org.phoneNo}</td>
              <td>{org.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrgHome;