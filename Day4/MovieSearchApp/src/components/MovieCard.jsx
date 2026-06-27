export default function MovieCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: hovered
          ? "0.5px solid rgba(255,255,255,0.25)"
          : "0.5px solid rgba(255,255,255,0.1)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Poster placeholder */}
      <div
        className={`aspect-[2/3] bg-gradient-to-br ${movie.gradient} flex items-end p-2 relative`}
      >
        <FilmIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-10 h-10 text-white opacity-[0.12]" />
        <span
          className="flex items-center gap-1 text-[10px] font-medium text-white/90 px-1.5 py-0.5 rounded"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <StarIcon className="w-2.5 h-2.5 text-amber-400" />
          {movie.rating.toFixed(1)}
        </span>
      </div>

      <div className="px-3 pt-2 pb-3">
        <p className="text-[12px] font-medium text-white/90 truncate">
          {movie.title}
        </p>
        <p className="text-[11px] text-white/35 mt-0.5">
          {movie.year} · {movie.genre}
        </p>
      </div>
    </div>
  );
}
