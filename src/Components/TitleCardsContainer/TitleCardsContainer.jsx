import "./TitleCardsContainer.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MovieTitle from "../MovieTitle/MovieTitle";

function TitleCardsContainer(props) {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [moviesPerSlide, setMoviesPerSlide] = useState(0);

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
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const movieCardWidth = 200;
      const calculatedMoviesPerSlide = Math.floor(
        containerWidth / movieCardWidth
      );
      setMoviesPerSlide(calculatedMoviesPerSlide);
    }
  }, [movies, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const movieCardWidth = 270; // Average width of a movie card
      const calculatedMoviesPerSlide = Math.floor(
        containerWidth / movieCardWidth
      );
      const totalMovies = movies.length;
      const maxIndex = Math.ceil(totalMovies / calculatedMoviesPerSlide) - 1;
      setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
    }
  };

  return (
    <div className="title-cards-container-main">
      <div className="container-title">
        <h1 className="container-title-text">{props.titleText}</h1>
      </div>
      <div className="title-cards-container" ref={containerRef}>
        <button
          className="prev-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          hidden={currentIndex === 0}
        >
          &larr;
        </button>
        {movies.length > 0 &&
          movies
            .slice(
              currentIndex * moviesPerSlide,
              currentIndex * moviesPerSlide + moviesPerSlide
            )
            .map((movie) => (
              <MovieTitle
                key={movie.id}
                imgAdress={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))}
        <button
          className="next-button"
          onClick={handleNext}
          disabled={
            currentIndex >= Math.ceil(movies.length / moviesPerSlide) - 1
          }
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default TitleCardsContainer;
