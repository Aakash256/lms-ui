import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import "./Home.css";

const OrgHome = () => {
    const [organization, setOrganization] = useState();
    const [loading, setLoading] = useState(true);
    const location = useLocation();

  useEffect(() => {
    const fetchUserMe = async () => {
    try {
        const accessToken = location.state?.accessToken;
        console.log("Access token");
        console.log(accessToken);

        const response = await axios.get('http://localhost:8090/v1/user/me', {
          headers: {
            Authorization: 'Bearer ' + accessToken, // Replace YOUR_ACCESS_TOKEN with the actual token
          },
        });
        console.log('User data:', response.data);

        const user = response.data;
        console.log('user id', user?.id);

        console.log('org id', user?.orgId);

        const orgId = user?.orgId;

        const orgResponse = await axios.get("http://localhost:8090/v1/organization/" + orgId, {
            headers: {
            Authorization: 'Bearer ' + accessToken, // Replace YOUR_ACCESS_TOKEN with the actual token
            },
        });

        console.log("org response", orgResponse.data);
        setOrganization(orgResponse.data);
        setLoading(false);

        // Handle the response data as needed
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle errors
      }
    }

    fetchUserMe();
  }, []);

  return (
    <Container className="text-center home-container">
        <div className="box-container text-center" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', maxWidth: '600px', width: '100%' }}>
        <h2>Organization Details</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
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
              <tr>
                <td>{organization.id}</td>
                <td>{organization.name}</td>
                <td>{organization.email}</td>
                <td>{organization.description}</td>
                <td>{organization.phoneNo}</td>
                <td>{organization.status}</td>
              </tr>
            </tbody>
          </Table>
          )}
        </div>
    </Container>
  );
};

export default OrgHome;