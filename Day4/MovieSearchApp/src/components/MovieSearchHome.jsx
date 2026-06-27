import { useState, useEffect } from "react";

const TRENDING = [
  {
    id: 1,
    title: "The Midnight Cartographer",
    year: 2025,
    genre: "Drama",
    rating: 8.4,
    gradient: "from-[#1c2a3a] to-[#2e1a0e]",
  },
  {
    id: 2,
    title: "Holloway Station",
    year: 2025,
    genre: "Thriller",
    rating: 7.9,
    gradient: "from-[#1a1c2e] to-[#2e1a2a]",
  },
  {
    id: 3,
    title: "A Quiet Kind of Violence",
    year: 2024,
    genre: "Sci-fi",
    rating: 8.1,
    gradient: "from-[#0e2a1a] to-[#1a2e1c]",
  },
  {
    id: 4,
    title: "Salt & Memory",
    year: 2024,
    genre: "Documentary",
    rating: 9.0,
    gradient: "from-[#2a1a1a] to-[#1c1c2e]",
  },
];

const GENRES = [
  "Drama",
  "Thriller",
  "Sci-fi",
  "Documentary",
  "Animation",
  "Horror",
];

const NAV_LINKS = ["Movie", "TV", "People"];

// ── Icons (inline SVG, no external deps) ──────────────────────────────────────

function SearchIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
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

// ── Sub-components ─────────────────────────────────────────────────────────────

function Navbar({ onSignIn }) {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
        <span
          className="text-xl tracking-tight text-white"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-0.02em",
          }}
        >
          Framerate
        </span>
      </div>

      <div className="flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className="text-[13px] text-white/50 hover:text-white/90 transition-colors tracking-wide"
          >
            {link}
          </button>
        ))}
        <button
          onClick={onSignIn}
          className="text-[13px] px-4 py-1.5 border border-white/20 rounded-lg text-white/80 hover:border-white/40 hover:text-white transition-all"
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

function SearchBar({ query, onChange, onSearch }) {
  const [focused, setFocused] = useState(false);

  function handleKey(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div className="relative w-full max-w-[520px]">
      {/* Film-frame brackets */}
      <span
        className="pointer-events-none absolute -top-1.5 -left-2.5 w-3 h-3 border-t border-l border-amber-400 transition-all duration-300"
        style={{
          opacity: focused ? 1 : 0,
          transform: focused ? "translate(0,0)" : "translate(4px,4px)",
        }}
      />
      <span
        className="pointer-events-none absolute -top-1.5 -right-2.5 w-3 h-3 border-t border-r border-amber-400 transition-all duration-300"
        style={{
          opacity: focused ? 1 : 0,
          transform: focused ? "translate(0,0)" : "translate(-4px,4px)",
        }}
      />

      <div
        className="flex items-center gap-3 px-5 h-[52px] rounded-xl transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: focused
            ? "0.5px solid rgba(232,160,32,0.7)"
            : "0.5px solid rgba(255,255,255,0.15)",
        }}
      >
        <SearchIcon className="w-[17px] h-[17px] text-white/30 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKey}
          placeholder="Title, director, actor, year…"
          aria-label="Search movies"
          className="flex-1 bg-transparent text-[15px] text-white placeholder-white/30 outline-none font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
        <button
          onClick={onSearch}
          className="flex-shrink-0 px-4 py-1.5 rounded-lg text-[13px] font-medium transition-opacity hover:opacity-80 active:scale-95"
          style={{
            background: "#E8A020",
            color: "#1a1000",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

function GenreTags({ active, onToggle }) {
  return (
    <div
      className="flex flex-wrap gap-2 justify-center mt-5"
      role="list"
      aria-label="Filter by genre"
    >
      {GENRES.map((genre) => {
        const isActive = active.includes(genre);
        return (
          <button
            key={genre}
            role="listitem"
            onClick={() => onToggle(genre)}
            className="text-[12px] px-3 py-1 rounded-full transition-all duration-150"
            style={{
              border: isActive
                ? "0.5px solid #E8A020"
                : "0.5px solid rgba(255,255,255,0.15)",
              color: isActive ? "#E8A020" : "rgba(255,255,255,0.45)",
              background: isActive ? "rgba(232,160,32,0.08)" : "transparent",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}

function MovieCard({ movie }) {
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

function TrendingRow({ movies }) {
  return (
    <section className="px-8 pt-5 pb-6">
      <p
        className="text-[11px] uppercase tracking-[0.1em] text-white/30 mb-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Trending this week
      </p>
      <div className="grid grid-cols-4 gap-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

// ── Font loader ────────────────────────────────────────────────────────────────

function useDMSerifFont() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
}

// ── Root component ─────────────────────────────────────────────────────────────

export default function MovieSearchHome() {
  useDMSerifFont();

  const [query, setQuery] = useState("");
  const [activeGenres, setActiveGenres] = useState([]);

  function handleSearch() {
    if (!query.trim() && activeGenres.length === 0) return;
    alert(
      `Searching: "${query}"${activeGenres.length ? ` · ${activeGenres.join(", ")}` : ""}`,
    );
  }

  function toggleGenre(genre) {
    setActiveGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    );
  }

  const filteredMovies =
    activeGenres.length > 0
      ? TRENDING.filter((m) => activeGenres.includes(m.genre))
      : TRENDING;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#0A0E1A",
        fontFamily: "'Inter', sans-serif",
        color: "rgba(240,238,233,1)",
      }}
    >
      <Navbar onSignIn={() => alert("Sign in clicked")} />

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-8 pt-12 pb-8 text-center">
        <p
          className="text-[11px] uppercase tracking-[0.12em] font-medium mb-4"
          style={{ color: "#E8A020", fontFamily: "'Inter', sans-serif" }}
        >
          Every film, rated &amp; remembered
        </p>

        <h1
          className="text-[46px] leading-[1.1] text-white mb-2"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-0.025em",
          }}
        >
          Find your next
          <br />
          <em style={{ color: "#E8A020" }}>great watch</em>
        </h1>

        <p className="text-[14px] text-white/40 font-light tracking-wide mb-10">
          Search 800,000+ films, read critic reviews, build your watchlist.
        </p>

        <SearchBar query={query} onChange={setQuery} onSearch={handleSearch} />
        <GenreTags active={activeGenres} onToggle={toggleGenre} />
      </section>

      {/* Divider */}
      <div className="mx-8 border-t border-white/8" />

      {/* Trending */}
      {filteredMovies.length > 0 ? (
        <TrendingRow movies={filteredMovies} />
      ) : (
        <p className="text-center text-[13px] text-white/30 py-8">
          No trending titles in {activeGenres.join(", ")} this week.
        </p>
      )}
    </div>
  );
}
