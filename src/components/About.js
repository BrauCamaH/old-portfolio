import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const About = props => {
  const { data } = props;
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          <span className="text-primary">{data.firstName}</span>
          <span className="text-secondary">{data.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {data.phoneNumber} <a href="mailto:name@email.com">{data.email}</a>
        </div>
        <p className="lead mb-5 text-justify">{data.bio}</p>

        <footer class="footer text-center">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                class="text-white social-link rounded-circle"
                href="https://www.linkedin.com/in/braulio-guadalupe-camarena-huerta-111b4a16a/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li class="list-inline-item" title="github">
              <a
                class="text-white social-link rounded-circle"
                href="https://github.com/BrauCamaH"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default About;
