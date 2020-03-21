import React from 'react';
const Skills = props => {
  const { data } = props;
  return (
    <div>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <div className="row">
            {data.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
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
