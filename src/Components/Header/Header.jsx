import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-main">
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <p className="logo-item">🐰 RABBITFLIX</p>
          </Link>
          <img className="logo-image" />
        </div>
        <div className="nav-container">
          <Link to="/">
            <p className="nav-item">Anasayfa</p>
          </Link>
          <p className="nav-item">Ayarlar</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
