import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route components
import Header from "./Components/Header/Header";
import TitleCardsContainer from "./Components/TitleCardsContainer/TitleCardsContainer";
import MovieDetail from "./Components/MovieDetail"; // Import MovieDetail component

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            // Use the element prop instead of children for Routes
            <div className="card-sections-container">
              <TitleCardsContainer
                key="recommendations"
                titleText="Tam Davşanlık Öneriler"
                apiKey="https://api.themoviedb.org/3/discover/movie?api_key=5b9c3630ad1996e84b1b8d95882bc995&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1"
              />
              <TitleCardsContainer
                key="romantic"
                apiKey="https://api.themoviedb.org/3/discover/movie?api_key=5b9c3630ad1996e84b1b8d95882bc995&language=en-US&with_genres=10749&sort_by=popularity.desc&include_adult=true&include_video=false&page=1"
                titleText="Romantik Filmler"
              />
              <TitleCardsContainer
                key="musical"
                titleText="Muzikal Davşan Filmleri"
                apiKey="https://api.themoviedb.org/3/discover/movie?api_key=5b9c3630ad1996e84b1b8d95882bc995&language=en-US&with_genres=10402&sort_by=popularity.desc&include_adult=true&include_video=false&page=1"
              />
            </div>
          }
        />
        <Route path="/detay/:id" element={<MovieDetail />} />{" "}
      </Routes>
    </>
  );
}

export default App;
