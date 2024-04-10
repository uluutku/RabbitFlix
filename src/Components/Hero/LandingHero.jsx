import React from "react";
import "./LandingHero.css";
import { Link } from "react-router-dom";

function LandingHero() {
  return (
    <div className="hero-main">
      <div className="hero-cta-card">
        <div className="hero-cta-card-title-container">
          <h1 className="hero-cta-card-title">RabbitFlix</h1>
          <h2 className="hero-cta-card-subtitle">
            En Popüler Filmler ve Diziler
          </h2>
        </div>

        <p className="hero-cta-card-description">
          Rabbitflix, bir netflix klonudur. Rabbitflix ile en popüler filmleri
          ve dizilerin trailerlarını izleyebilir, detaylarını
          inceleyebilirsiniz.
        </p>
        <Link to="/movies">
          <button className="hero-cta-card-button">Filmleri İncele</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingHero;
