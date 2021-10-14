import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
  const { user ,logOut} = useAuth();
  return (
    <div  className="mb-5">
      <Navbar collapseOnSelect expand="lg" style={{ color: "white" }} fixed="top" bg="primary" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home" >Fashion House</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/panjabis">Panjabi</Nav.Link>
              <Nav.Link as={Link} to="/sharees">Sharee</Nav.Link>
              <Nav.Link as={Link} to="/threePieces">Three Pieces</Nav.Link>
              {
                user.email ? <Nav.Link as={Link} onClick={logOut} to="/signup">Log Out</Nav.Link> : <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;