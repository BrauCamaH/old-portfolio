import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
const Projects = props => {
  const { data } = props;
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="projects"
    >
      <div className="w-100">
        <h2 className="mb-5 text-primary">Projects</h2>

        <Carousel>
          <Carousel.Item>
            <img
              width={200}
              height={200}
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-portals-and-projects-logo.svg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button>Info</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
