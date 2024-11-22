import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Dropdown, Alert } from 'react-bootstrap';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const publicKey = 'your_public_key';

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setAlert({ show: true, message: 'Message sent successfully!', variant: 'success' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setAlert({ show: true, message: 'Failed to send message. Please try again.', variant: 'danger' });
      });
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #133337, #1b483e)',
        color: 'white',
        padding: '50px 20px',
        minHeight: '100vh',
      }}
    >
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', fontWeight: 'bold' }}>
          Get in Touch
        </h1>
        <p style={{ textAlign: 'center', marginBottom: '50px', fontSize: '1.2rem' }}>
          Feel free to reach out using the form below or connect with me on social media.
        </p>
        {alert.show && (
          <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible>
            {alert.message}
          </Alert>
        )}
        <Row>
          <Col md={6} className="mb-4">
            <div
              style={{
                background: '#1f5a4d',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
              }}
            >
              <h3 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Contact Form</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    style={{ borderRadius: '8px' }}
                  />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email (e.g., example@domain.com)"
                    required
                    style={{ borderRadius: '8px' }}
                  />
                </Form.Group>
                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    required
                    style={{ borderRadius: '8px' }}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    background: '#026b4b',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <h3 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Connect on Social Media</h3>
            <p style={{ marginBottom: '30px' }}>Follow me for updates and more.</p>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=61553044027150"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#3b5998',
                  borderRadius: '50%',
                  padding: '15px',
                  color: 'white',
                  fontSize: '24px',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/Kur0ky04"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#333',
                  borderRadius: '50%',
                  padding: '15px',
                  color: 'white',
                  fontSize: '24px',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <FaGithub />
              </a>
            </div>
            <Dropdown className="mt-4">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                More Options
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={toggleContactInfo}>
                  Contact Me
                </Dropdown.Item>
                <Dropdown.Item href="/about">About Me</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {showContactInfo && (
              <div style={{ marginTop: '20px', backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
                <h5>Contact Information</h5>
                <p>
                  <strong>Email:</strong> rvsilvestre@gbox.ncf.edu.ph
                </p>
                <p>
                  <strong>Phone:</strong> 09105850857
                </p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
