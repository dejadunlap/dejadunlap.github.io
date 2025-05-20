import React from "react";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-container">
        <div className="footer-row">
          <a className="footer-link" href="/">LinkedIn</a>
          <a className="footer-link" href="/contact">Github</a>
          <a className="footer-link" href="/project">Email</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
