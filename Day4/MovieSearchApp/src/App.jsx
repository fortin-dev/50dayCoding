import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieGrid from "./components/MovieGrid.jsx";
import { fetchTrendingMovies } from "./services/tmdbApi.js";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const loadInitialMovies = async () => {
      // setIsLoading(true);
      // setError(null);
      const trending = await fetchTrendingMovies();

      if (trending.length === 0) {
        setError("Could not load trending movies.");
      } else {
        setMovies(trending); // Replace mock data with real results
        // console.log(trending);
      }
      // setIsLoading(false);
    };

    loadInitialMovies();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#0A0E1A",
        fontFamily: "'Inter', sans-serif",
        color: "rgba(240,238,233,1)",
      }}
    >
      <Navbar />
      {/* Hero Section */}

      <section className="flex-1 flex flex-col items-center justify-center px-8 pt-12 pb-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.12em] font-medium mb-4 font-sans text-amber ">
          Every film, rated &amp; remembered
        </p>

        <h1
          className="text-[46px] leading-[1.1] text-white mb-2 "
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-0.025em",
          }}
        >
          Find your next
          <br />
          <em className="text-amber">great watch</em>
        </h1>

        <p className="text-[14px] text-text-secodary font-light tracking-wide mb-10">
          Search 1M+ film & TV shows
        </p>
        <SearchBar></SearchBar>
      </section>
      <MovieGrid movies={movies} />
      {/* <footer className="flex items-center justify-center font-serif-display text-amber py-4 cursor-pointer ">
        <span onClick={() =>}>CineLove</span>
      </footer> */}
    </div>
  );
}

export default App;
