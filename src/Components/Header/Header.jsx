import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-main">
      <div className="header" ref={headerRef}>
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
        </ul>
      </div>
    </div>
  );
}

export default Header;
