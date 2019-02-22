import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand">Navbar</a>
      <ul className="navbar-nav flex-row justify-content-end">
        <li className="nav-item active" style={{ paddingLeft: '10px', paddingRight: '10px'}} >
          <a className="nav-link" href="#">
            Food Recognition <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px'}} >
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px'}} >
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
      </ul>
    </nav>
  );
}
