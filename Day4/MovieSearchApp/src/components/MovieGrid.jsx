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
      <div className="flex flex-row items-stretch gap-6 overflow-x-auto pb-4 scrollbar-none scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {movies.map((movie) => (
          <div className="w-64 shrink-0">
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}
