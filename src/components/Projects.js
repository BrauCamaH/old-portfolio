import React from 'react';
const Projects = props => {
  const { data } = props;
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="projects"
    >
      <div className="w-100">
        <h2 className="mb-5">Projects</h2>
        {data.map((project, index) => (
          <div
            key={index}
            className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="resume-content">
              <h3 className="mb-0">{project.position}</h3>
              <div className="subheading mb-3">{project.organization}</div>
              <p>{project.aboutWork}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                {project.fromDate} - {project.toDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
