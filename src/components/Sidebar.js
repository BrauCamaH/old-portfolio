import React from 'react';
import image from '../assets/profile.jpg';
import { Navbar, Nav } from 'react-bootstrap';

const Sidebar = props => {
  const { sidebarData } = props;

  return (
    <Navbar bg="ligdaht" expand="lg">
      <img
        src={image}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <Navbar.Brand href="#about">Braulio Camarena</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#interests">Interests</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
