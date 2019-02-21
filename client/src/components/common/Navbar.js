import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
        Food Services
      </a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              Pricing
            </a>
          </li>
        </ul>
        <span className="navbar-text">Navbar text with an inline element</span>
      </div>
    </nav>
  );
}
