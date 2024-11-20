import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Optional: add this for custom styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/logoimg.jpg" alt="Logo" className="logo-image" />
        </Link>
      </div>

      {/* Center: Navigation Links (displayed in mobile as toggleable menu) */}
      <div className={`navbar-center ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/reservation" className="nav-link">Reservation</Link>
        <Link to="/feedback" className="nav-link">Feedback</Link>
      </div>

      {/* Right side: Register Button */}
      <div className="navbar-register">
        <Link to="/signup" className="register-button">Signup</Link>
        <Link to="/login" className="register-button">Login</Link>
      </div>

      {/* Hamburger Menu (three dots) */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </nav>
  );
};

export default Navbar;

