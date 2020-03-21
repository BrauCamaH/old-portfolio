import React from 'react';
import {} from 'react-bootstrap';
const Interest = props => {
  const { ref, data } = props;
  return (
    <div ref={ref}>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>{data.paragraphOne}</p>
          <p className="mb-0">{data.paragraphTwo}</p>
        </div>
      </section>
    </div>
  );
};

export default Interest;
