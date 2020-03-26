import React from 'react';
import { Image } from 'react-bootstrap';

const Interest = props => {
  const { data } = props;
  return (
    <div>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5 text-primary">Interests</h2>
          <p className="lead text-justify">{data.paragraphOne}</p>
          <p className="lead mb-0 text-justify">{data.paragraphTwo}</p>
        </div>
      </section>
      <Image
        rounded
        fluid
        width={600}
        height={450}
        className="mb-5"
        src={require(`../assets/highlands.jpg`)}
      ></Image>
    </div>
  );
};

export default Interest;
