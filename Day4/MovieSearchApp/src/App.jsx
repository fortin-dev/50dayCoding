import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Navbar>
        <SearchBar onSearch={handleSearch} />
      </Navbar>

      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <Spinner />
        ) : (
          <MovieGrid movies={movies} onMovieClick={setSelectedMovie} />
        )}
      </main>

      {/* Conditionally rendered overlays/drawers */}
      {isFavoritesOpen && <FavoritesDrawer />}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
