import React from "react";
import "../styles/Navbar.css";
export default function Navbar(props) {
  return (
    <header>
      <a href="/" className="logo">
        {props.title}
      </a>
      <nav>
        <ul className="navLinks">
          <li className="Projects">
            <a href="/">Projects</a>
          </li>
          <li className="Themes">
            <a href="/">Themes</a>
          </li>
          <li className="About">
            <a href="/">About</a>
          </li>
        </ul>
      </nav>
      <div className="btns">
        <a href="/">
          <button>Log in</button>
        </a>
        <a href="/">
          <button>Register</button>
        </a>
      </div>
    </header>
  );
}
