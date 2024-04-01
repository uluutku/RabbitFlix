import React from "react";
import "./MovieTitle.css";

function MovieTitle(props) {
  return (
    <div className="movie-title-main">
      <div className="title-img-container">
        <img className="title-img-element" src={props.imgAdress}></img>
      </div>
    </div>
  );
}

export default MovieTitle;
