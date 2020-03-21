import React from 'react';
const Education = props => {
  const { data } = props;
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        {data.map((data, index) => (
          <div
            key={index}
            className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="resume-content">
              <h3 className="mb-0">{data.university}</h3>
              <div className="subheading mb-3">{data.degree}</div>
              <p>{data.gpa}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                {data.fromDate} - {data.toDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
