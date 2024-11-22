import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar expand="lg" style={{ backgroundColor: '#1f4f8c', padding: '10px 20px' }}>
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                textTransform: 'uppercase',
              }}
            >
              My Personal Info
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  style={{
                    color: 'white',
                    fontWeight: '500',
                    margin: '0 10px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#ffcc00')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/About"
                  style={{
                    color: 'white',
                    fontWeight: '500',
                    margin: '0 10px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#ff5733')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Education"
                  style={{
                    color: 'white',
                    fontWeight: '500',
                    margin: '0 10px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#28a745')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Education
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Hobbies"
                  style={{
                    color: 'white',
                    fontWeight: '500',
                    margin: '0 10px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#6c757d')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Hobbies
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Contact"
                  style={{
                    color: 'white',
                    fontWeight: '500',
                    margin: '0 10px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#e83e8c')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px 0' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Hobbies" element={<Hobbies />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>

        <footer
          style={{
            backgroundColor: '#1f4f8c',
            color: 'white',
            textAlign: 'center',
            padding: '15px 0',
            marginTop: 'auto',
          }}
        >
          <Container>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} My Personal Info. All rights reserved.
            </p>
          </Container>
        </footer>
      </Router>
    </div>
  );
}

export default App;
