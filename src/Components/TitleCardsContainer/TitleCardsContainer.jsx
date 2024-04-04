import React, { useState, useEffect } from "react";
import axios from "axios";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./TitleCardsContainer.css"; // Import your custom CSS file

function TitleCardsContainer(props) {
  const [movies, setMovies] = useState([]);
  const containerClass = `title-cards-container-${props.titleText
    .replace(/\s+/g, "-")
    .toLowerCase()}`; // Generate unique class name

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKeyAdress = props.apiKey;
        const response = await axios.get(`${apiKeyAdress}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [props.apiKey]);

  useEffect(() => {
    new Splide(`.${containerClass} .splide`, {
      type: "slide",
      gap: "10px",
      autoWidth: true,
      pagination: false,
    }).mount();
  }, [movies, containerClass]);

  return (
    <div className={`title-cards-container-main ${containerClass}`}>
      <div className="container-title">
        <h1 className="container-title-text">{props.titleText}</h1>
      </div>

      <div className={`splide ${containerClass}`}>
        <div className="splide__track">
          <ul className="splide__list">
            {movies.map((movie) => (
              <li className="splide__slide" key={movie.id}>
                <a href={`/detay/${movie.id}`}>
                  <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TitleCardsContainer;
