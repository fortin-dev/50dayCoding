import MovieCard from "./MovieCard.jsx";
export default function MovieGrid({ movies }) {
  return (
    <section className="px-8 pt-5 pb-6">
      <p
        className="text-[11px] uppercase tracking-widest text-white/30 mb-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Trending this week
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
