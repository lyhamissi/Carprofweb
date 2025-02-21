import React, { useState } from "react";
import "../Styles/navbar.css";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="Logo" id="logo" />
        <span>CARPROF</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/home" className="links"><li>Home</li></Link>
        <li>Our Cars</li>
        <li>
          <select id="services">
            <option value="">Services</option>
            <option value="repair">Car Repair</option>
            <option value="wash">Car Wash</option>
          </select>
        </li>
        <li>Sell Your Car</li>
        <li>About Us</li>
      </ul>

      <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default NavBar;
