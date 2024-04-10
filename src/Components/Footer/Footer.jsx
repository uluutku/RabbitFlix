import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/movies">Filmler</Link>
          <Link to="/movies">Diziler</Link>
        </div>
      </div>
      <div className="copyright-text">
        <p>&copy; 2024 RabbitFlix. Made with ❤️ by 🐻</p>
      </div>
      <div className="social-media-container">
        <h4>Make sure chase the rabbit on:</h4>
        <div className="social-media-icons">
          <a
            href="https://www.instagram.com/rabbitwizai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://twitter.com/RabbitWizAi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
