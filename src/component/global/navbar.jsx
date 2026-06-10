import React, { useState, useEffect } from "react";
import './all.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assist/logo.png'

function Navbar() {

//  const navstyle=({isActive})=>{
//     return {
//       color:isActive ? "black":"white",
//       backgroundColor : isActive? "white":"black",
//  }
//   }





  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // DARK MODE APPLY (React safe way)
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

 
  return (
    <nav className="navbar">

      {/* Logo */}
      <img className="logo" src={logo} alt="" />

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink className="hover" to="/home" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" to="/project" onClick={() => setMenuOpen(false)}>
            Project
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Controls */}
      <div className="right-controls">

        {/* DARK TOGGLE */}
        <button
          onClick={() => setDark(!dark)}
          className="dark-btn"
        >
          {dark ? "☀️ Light" : "🌙 Mode"}
        </button>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;