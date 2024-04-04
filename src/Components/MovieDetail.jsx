import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./MovieDetail.css";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=942e67125be0a0d10153e54af62e1e5e&language=tr-TR&append_to_response=videos`
        );
        setMovie(response.data);

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
    return <div className="loading">Yükleniyor...</div>;
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
            Çıkış Tarihi: {movie.release_date}
          </p>
          <p className="movie-vote-average">
            Ortalama Oy: {movie.vote_average + "/10"}
          </p>
          {trailerKey && (
            <div className="trailer-container">
              <h3>Trailer Videosu:</h3>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailerKey}`}
                controls
                width="100%"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
