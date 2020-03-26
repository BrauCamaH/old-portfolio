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

        <Carousel
          nextIcon={
            <span
              aria-hidden="true"
              className="text-secondary bg-dark carousel-control-next-icon"
            />
          }
          prevIcon={
            <span
              aria-hidden="true"
              className=" bg-dark carousel-control-prev-icon"
            />
          }
        >
          {data.map(project => (
            <Carousel.Item>
              <img
                maxWidth={200}
                maxHeight={100}
                className="d-block w-100"
                src={require(`../assets/${project.image}`)}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-secondary">{project.title}</h3>
                <p className="text-dark font-weight-bold">
                  {project.description}
                </p>
                <a href={project.githubLink}>
                  <Button>Github repository</Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
