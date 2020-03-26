import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const Skills = props => {
  const { data } = props;
  return (
    <div>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5 text-primary">Skills</h2>
          <h3 className=" lead text-secondary subheading mb-3">
            Programming Languages &amp; Tools
          </h3>
          <div className="row">
            {data.map((data, index) => (
              <div key={index} className="col-6">
                <p className="lead list-item">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                  <span className="ml-3">{data.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
