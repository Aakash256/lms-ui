import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

const OrgHome = () => {
  const [organizations, setOrganizations] = useState([]);

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