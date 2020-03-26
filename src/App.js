import React from 'react';
import './App.css';
import profileData from './profileData.json';

import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Interest from './components/Interest';
import Projects from './components/Projects';
import Skills from './components/Skills';

import { Container } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar data={profileData.about} />
      <Container fluid>
        <About data={profileData.about} />
        <hr className="m-0" />
        <Projects data={profileData.projects} />
        <hr className="m-0" />
        <Education data={profileData.education} />
        <hr className="m-0" />
        <Skills data={profileData.skills} />
        <hr className="m-0" />
        <Interest data={profileData.interests} />
      </Container>
    </div>
  );
}

export default App;
