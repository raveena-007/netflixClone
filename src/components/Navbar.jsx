import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <li className="logo">
        <img src="logo.png" alt="Netflix Logo" />
      </li>
      <div className="button">
        <select className="language-select">
          <option value="en">English</option>
          <option value="es">Hindi</option>
        </select>
        <li className="buttons">Sign In</li>
      </div>
    </div>
  );
};

export default Navbar;
