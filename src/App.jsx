import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import TitleCardsContainer from "./Components/TitleCardsContainer/TitleCardsContainer";
import MovieDetail from "./Components/MovieDetail";
import LandingHero from "./Components/Hero/LandingHero";
import Footer from "./Components/Footer/Footer";

const API_KEY = "30556d0cb32a2bb2d833c912c4ffec9f";

const GENRES = {
  Önerilen: "popularity.desc",
  Romantik: 10749,
  Müzikal: 10402,
  Komedi: 35,
  Aksiyon: 28,
  Korku: 27,
  Gerilim: 53,
  Animasyon: 16,
  Drama: 18,
  BilimKurgu: 878,
};

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<LandingHero />} />
          <Route
            path="/movies"
            element={
              <div className="card-sections-container">
                <TitleCardsContainer
                  key="popular"
                  titleText="Önerilen Filmler"
                  apiKey={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`}
                />
                {Object.keys(GENRES)
                  .filter((genreKey) => genreKey !== "Önerilen")
                  .map((genreKey) => (
                    <TitleCardsContainer
                      key={genreKey}
                      titleText={`${
                        genreKey.charAt(0).toUpperCase() + genreKey.slice(1)
                      } Filmler`}
                      apiKey={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=${GENRES[genreKey]}&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`}
                    />
                  ))}
              </div>
            }
          />
          <Route
            path="/series"
            element={
              <div className="card-sections-container">
                <TitleCardsContainer
                  key="popular"
                  titleText="Önerilen Diziler"
                  apiKey={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`}
                />
                {Object.keys(GENRES)
                  .filter((genreKey) => genreKey !== "Önerilen")
                  .map((genreKey) => (
                    <TitleCardsContainer
                      key={genreKey}
                      titleText={`${
                        genreKey.charAt(0).toUpperCase() + genreKey.slice(1)
                      } Diziler`}
                      apiKey={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=tr-TR&with_genres=${GENRES[genreKey]}&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`}
                    />
                  ))}
              </div>
            }
          />
          <Route path="/detay/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
