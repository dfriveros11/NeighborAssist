import React from "react";
import logo from "./logo.svg";

import { Link } from "react-router-dom";

const backurl = "http://neighborassist.herokuapp.com";
 //Daniella Arteaga: Tal vez hubiese quedado mejor un color para el texto que contrastara mejor con la paleta seleccionada, ya que el gris se pierde un poco.
//por otra parte, manejan más de 2 tipos de fonts lo que crea confusión.
const NavBar = (props) => {
  if (!(props.user === null)) console.log("NAVBAR", props);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link to="/" className="nav-link">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          height="42"
          width="42"
        />
      </Link>
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
            {!props.user ? (
              <div></div>
            ) : (
              <Link to="/myfavors" className="nav-link">
                My favors
              </Link>
            )}
          </li>
          {!props.user || props.user.userType === true ? (
            <div></div>
          ) : (
            <li className="nav-item">
              <Link to="/askforfavor" className="nav-link">
                Ask for a favor
              </Link>
            </li>
          )}
          {!props.user || props.user.userType === false ? (
            <div></div>
          ) : (
            <li className="nav-item">
              <Link to="/helpsomeone" className="nav-link">
                Help someone
              </Link>
            </li>
          )}
          {!props.user ? (
            <div></div>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href={`${backurl}/auth/logout`}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
