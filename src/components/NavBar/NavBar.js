import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

const NavBar = () => {
  return (
    <div className="nav-container">
      <NavLink
        exact
        activeClassName="active-link"
        className="link"
        to="/"
      >
        Tlali Nantli
      </NavLink>
      <NavLink
        exact
        activeClassName="active-link"
        className="link"
        to="/about"
      >
        About Us
      </NavLink>
      <NavLink
        exact
        activeClassName="active-link"
        className="link"
        to="/models"
      >
        Models
      </NavLink>
    </div>
  );
};

export default NavBar;
