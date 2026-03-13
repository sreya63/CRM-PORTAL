import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="top-header">
      <div className="logo-box">
        <img
          src="https://dummyimage.com/120x90/ffffff/0b2d5c&text=SHNOOR"
          alt="logo"
          className="logo-img"
        />
      </div>

      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register" className="nav-btn-outline">Register</Link>
        <Link to="/login" className="nav-btn-outline">Login</Link>
      </nav>
    </header>
  );
}

export default Navbar;