import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import TitleCardsContainer from "./Components/TitleCardsContainer/TitleCardsContainer";

function App() {
  return (
    <>
      <Header />
      <div className="card-sections-container">
        <TitleCardsContainer
          titleText="Tam Davşanlık Öneriler"
          apiKey="https://api.themoviedb.org/3/discover/movie?api_key=dc82951ccd361d87d55f4afe7cc596c3&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1"
        />
        <TitleCardsContainer
          apiKey="https://api.themoviedb.org/3/discover/movie?api_key=dc82951ccd361d87d55f4afe7cc596c3&language=en-US&with_genres=10749&sort_by=popularity.desc&include_adult=true&include_video=false&page=1"
          titleText="Romantik Filmler"
        />
        <TitleCardsContainer
          titleText="Muzikal Davşan Filmleri"
          apiKey="https://api.themoviedb.org/3/discover/movie?api_key=dc82951ccd361d87d55f4afe7cc596c3&language=en-US&with_genres=10402&sort_by=popularity.desc&include_adult=true&include_video=false&page=1"
        />
      </div>
    </>
  );
}

export default App;
