import React from "react";
import logo from "./logo.svg";

import { Link } from "react-router-dom";

/* Comentario por Juan Felipe Torres: En la línea 8 declaran la url y la utilizan cuando se da click en el botón de logout
   tal vez para modularizar y manejar mejor la autenticación, se puede definir una función que se llama en un onClick al presionar
   el logout y que haga un fetch, algo como:
   const onLogOut = () => { fetch("/auth/logout").then( setUser(null) ) };
   Porque se me hace raro que usen direcatmente el link si tienen un proxy y pues quedaría como john explicó, igual si les sirve
   así pues también es válido.
   */

const backurl = "http://neighborassist.herokuapp.com";

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
