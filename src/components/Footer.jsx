import React from "react";
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-container">
        <div className="footer-row">
          <a className="footer-link" href="https://www.linkedin.com/in/deja-dunlap-2884b9238/"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          <a className="footer-link" href="https://github.com/dejadunlap"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
          <a className="footer-link" href="mailto:deja.dunlap@yale.edu"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>      
      </div>
    </div>
    </div>
  );
}

export default Footer;
