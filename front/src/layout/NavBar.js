import React from "react";
import logo from "./logo.svg";

import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a className="navbar-brand">
      <Link to="/">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          height="42"
          width="42"
        />
      </Link>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/myfavors">
            <a className="nav-link">My favors</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/askforfavor">
            <a className="nav-link">Ask for a favor</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/helpsomeone">
            <a className="nav-link">Help someone</a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./views/MyFavorHelper.html">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
