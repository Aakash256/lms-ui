import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";

const OrgHome = () => {
    const [organization, setOrganization] = useState();
    const location = useLocation();
    const [accessToken, setAccessToken] = useState();
    const navigate = useNavigate();

  useEffect(() => {
    const fetchUserMe = async () => {
    try {
        const accessToken = location.state?.accessToken;
        setAccessToken(accessToken);

        const response = await axios.get('http://localhost:8090/v1/user/me', {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        });
        console.log('User data:', response.data);

        const user = response.data;
        console.log('user id', user?.id);

        console.log('org id', user?.orgId);

        const orgId = user?.orgId;

        if(orgId) {
            const orgResponse = await axios.get("http://localhost:8090/v1/organization/" + orgId, {
                headers: {
                Authorization: 'Bearer ' + accessToken,
                },
            });
    
            console.log("org response", orgResponse.data);
            setOrganization(orgResponse.data);
        }

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserMe();
  }, []);

  const handleCreateOrganization = () => {
    // Navigate to the create organization page
    navigate('/organization/create', {state: { accessToken: accessToken}});
  };

  return (
    <Container className="text-center home-container">
      <div className="box-container text-center" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', maxWidth: '600px', width: '100%' }}>
        <h2>Organization Details</h2>
        {organization ? (
          <div>
            <div>
              <strong>ID:</strong> {organization.id}
            </div>
            <div>
              <strong>Name:</strong> {organization.name}
            </div>
            <div>
              <strong>Email:</strong> {organization.email}
            </div>
            <div>
              <strong>Description:</strong> {organization.description}
            </div>
            <div>
              <strong>Phone Number:</strong> {organization.phoneNo}
            </div>
            <div>
              <strong>Status:</strong> {organization.status}
            </div>
            </div>
        ): 
            (
              <Button variant="primary" onClick={handleCreateOrganization}>
                Create Organization
              </Button>
            )}
          </div>
    </Container>
  );
};

export default OrgHome;