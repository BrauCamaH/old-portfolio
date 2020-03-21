import React from 'react';

const About = props => {
  const { data } = props;
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          {data.firstName}
          <span className="text-primary">{data.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {data.phoneNumber} <a href="mailto:name@email.com">{data.email}</a>
        </div>
        <p className="lead mb-5">{data.bio}</p>
        <div className="social-icons"></div>
      </div>
    </section>
  );
};

export default About;
