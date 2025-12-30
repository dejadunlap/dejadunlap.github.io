import React from "react";
import "../styles/Navbar.css"
import { NavLink as Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
