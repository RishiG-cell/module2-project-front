import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/festival">Festi</Link>
        <Link to="/tickets">Tickets</Link>
      </nav>
    </div>
  );
};

export default NavBar;
