import { useState, useEffect } from "react";

export default function MovieCard(movie) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const FALLBACK_IMAGE =
    "https://placehold.co/500x750?text=No+Poster+Available";

  // 3. Determine final image source URL
  const posterUrl = movie.movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.movie.poster_path}`
    : FALLBACK_IMAGE;

  const [hovered, setHovered] = useState(false);

  function FilmIcon({ className }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="2.18" />
        <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
      </svg>
    );
  }
  function StarIcon({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  }
  // console.log(movie.movie.title ? movie.movie.title : movie.movie.name);

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
      <div className={`aspect-auto bg-linear-to-br flex flex-col p-2 relative`}>
        {/* <FilmIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[60%] w-10 h-10 text-white opacity-[0.12]" /> */}
        <img src={posterUrl} alt={`${posterUrl} Poster`} />
        <span
          className="flex items-center gap-1 text-[10px] font-medium text-white/90 px-1.5 py-0.5 rounded bg-transparent absolute bottom-3 left-3"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <StarIcon className="w-2.5 h-2.5 text-amber-400" />
          {movie.movie.vote_average.toFixed(1)}
        </span>
      </div>

      <div className="px-3 pt-2 pb-3">
        <p className="text-[12px] font-medium text-white/90 truncate">
          {movie.movie.title ? movie.movie.title : movie.movie.name}
        </p>
        <p className="text-[11px] text-white/35 mt-0.5">
          {movie.movie.release_date}
        </p>
      </div>
    </div>
  );
}
