import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import TitleCardsContainer from "./Components/TitleCardsContainer/TitleCardsContainer";
import MovieDetail from "./Components/MovieDetail";

// Define constant for API key
const API_KEY = "5b9c3630ad1996e84b1b8d95882bc995";

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
                apiKey={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`}
              />
              <TitleCardsContainer
                key="romantic"
                apiKey={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`}
                titleText="Romantik Filmler"
              />
              <TitleCardsContainer
                key="musical"
                titleText="Muzikal Davşan Filmleri"
                apiKey={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`}
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
