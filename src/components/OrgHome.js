import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const OrgHome = () => {
  const [organization, setOrganization] = useState();
  const [editedOrganization, setEditedOrganization] = useState();
  const [accessToken, setAccessToken] = useState();
  const location = useLocation();
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

        const user = response.data;
        const orgId = user?.orgId;

        if (orgId) {
          const orgResponse = await axios.get(
            'http://localhost:8090/v1/organization/' + orgId,
            {
              headers: {
                Authorization: 'Bearer ' + accessToken,
              },
            }
          );

          setOrganization(orgResponse.data);
          setEditedOrganization({ ...orgResponse.data });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserMe();
  }, []);

  const handleCreateOrganization = () => {
    // Navigate to the create organization page
    navigate('/organization/create', { state: { accessToken: accessToken } });
  };

  const handleFieldChange = (field, value) => {
    setEditedOrganization((prevOrg) => ({ ...prevOrg, [field]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      // Make API request to update organization data
      await axios.put(
        'http://localhost:8090/v1/organization/update',
        editedOrganization,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );

      // Reload organization data after update
      const orgResponse = await axios.get(
        'http://localhost:8090/v1/organization/' + organization.id,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );

      setOrganization(orgResponse.data);
      setEditedOrganization({ ...orgResponse.data });
    } catch (error) {
      console.error('Error updating organization data:', error);
    }
  };

  return (
    <Container className="text-center home-container">
      <div
        className="box-container text-center"
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        <h2 className="mb-5">Organization Details</h2>
        {organization ? (
          <div>
            <Form>
              <Form.Group controlId="formOrgName" as={Row} className="mb-3">
                <Form.Label column md="4">Name:</Form.Label>
                <Col md="8">
                  <Form.Control
                    type="text"
                    placeholder="Enter organization name"
                    value={editedOrganization.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group controlId="formOrgEmail" as={Row} className="mb-3">
                <Form.Label column md="4">Email:</Form.Label>
                <Col md="8">
                  <Form.Control
                    type="email"
                    placeholder="Enter organization email"
                    value={editedOrganization.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group controlId="formOrgDescription" as={Row} className="mb-3">
                <Form.Label column md="4">Description:</Form.Label>
                <Col md="8">
                  <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter organization description"
                        value={editedOrganization.description}
                        onChange={(e) =>
                          handleFieldChange('description', e.target.value)
                        }
                  />
                </Col>
              </Form.Group>

              <Form.Group controlId="formOrgPhoneNo" as={Row} className="mb-3">
                <Form.Label column md="4">Phone Number:</Form.Label>
                <Col md="8">
                  <Form.Control
                    type="tel"
                    placeholder="Enter organization phone number"
                    value={editedOrganization.phone_no}
                    onChange={(e) => handleFieldChange('phone_no', e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group controlId="formOrgStatus" as={Row} className="mb-5">
                <Form.Label column md="4">Status:</Form.Label>
                <Col md="8">
                  <Form.Control
                    as="select"
                    value={editedOrganization.status}
                    onChange={(e) => handleFieldChange('status', e.target.value)}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    {/* Add other status options as needed */}
                  </Form.Control>
                </Col>
              </Form.Group>

              <Button className="btn btn-success px-5" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </Form>
          </div>
        ) : (
          <Button className="btn btn-success px-5" onClick={handleCreateOrganization}>
            Create Organization
          </Button>
        )}
      </div>
    </Container>
  );
};

export default OrgHome;