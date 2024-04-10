import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-main">
      <div className="header">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <p className="logo-item">🐰 RABBITFLIX</p>
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`menu-icon ${menuOpen ? "open" : ""}`}>🎩</span>
        </div>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="nav-link">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link to="/movies" className="nav-link">
              Filmler
            </Link>
          </li>
          <li>
            <Link to="/movies" className="nav-link">
              Diziler
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
