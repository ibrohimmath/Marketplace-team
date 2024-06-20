import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import img from "../../../assets/Logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={img} alt="" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className={`navicon ${isOpen ? "open" : ""}`}></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Marketplace</Link>
        <Link to="/rankings">Rankings</Link>
        <Link to="/wallet">Connect a wallet</Link>
        <Link to="/signup" className="singup">Sign Up</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
