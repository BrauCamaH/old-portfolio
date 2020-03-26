import React from 'react';
import image from '../assets/profile.jpg';
import { Navbar, Nav, Image } from 'react-bootstrap';

const PorfolioNav = props => {
  const { data } = props;
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Image
        src={image}
        width="40"
        height="40"
        className="m-2"
        alt="React Bootstrap logo"
        roundedCircle
      />
      <Navbar.Brand href="#about">
        {data.firstName} {data.lastName}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#interests">Interests</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PorfolioNav;
