import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Assuming you're using React Router for navigation
import ReactPlayer from "react-player";
import "./MovieDetail.css"; // Import your custom CSS file for MovieDetail styling

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const { id } = useParams(); // Get the movie ID from the URL params

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=5b9c3630ad1996e84b1b8d95882bc995&language=en-US&append_to_response=videos`
        );
        setMovie(response.data);

        // Find trailer video key
        const trailer = response.data.videos.results.find(
          (video) => video.type === "Trailer"
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="movie-detail-poster"
        />
        <div className="movie-info">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-overview">{movie.overview}</p>
          <p className="movie-release-date">
            Release Date: {movie.release_date}
          </p>
          <p className="movie-vote-average">
            Vote Average: {movie.vote_average}
          </p>
          {trailerKey && (
            <div className="trailer-container">
              <h3>Trailer</h3>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailerKey}`}
                controls
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
