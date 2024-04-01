import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-main">
      <div className="header">
        <div className="logo-container">
          <p className="logo-item">🐰 RABBITFLIX</p>
          <img className="logo-image" />
        </div>
        <div className="nav-container">
          <p className="nav-item">Hesamp</p>
          <p className="nav-item">Ayarlar</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
