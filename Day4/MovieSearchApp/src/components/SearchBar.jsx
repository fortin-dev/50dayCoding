import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [focused, setFocused] = useState(false);

  function handleKey(e) {
    if (e.key === "Enter") onSearch();
  }
  return (
    <div className=" relative w-full max-w-130">
      <span
        className=" pointer-events-none absolute -top-1.5 -left-2.5 w-3 h-3 border-t border-l border-amber-400 transition-all duration-300"
        style={{
          opacity: focused ? 1 : 0,
          transform: focused ? "translate(0,0)" : "translate(4px,4px)",
        }}
      />
      <span
        className=" pointer-events-none absolute -top-1.5 -left-2.5 w-3 h-3 border-t border-r border-amber-400 transition-all duration-300"
        style={{
          opacity: focused ? 1 : 0,
          transform: focused ? "translate(0,0)" : "translate(-4px,4px)",
        }}
      />
      <div
        className="flex items-center gap-3 px-5 h-13 rounded-xl transition-all duration-200"
        style={{
          background: "rgba(255,255,255,255,0.06",
          border: focused
            ? "0.5px solid rgba(232,160,32,0.7)"
            : "0.5px solid rgba(255,255,255,0.15)",
        }}
      >
        <Search className="w-4.25 h-4.25 text-text-muted shrink-0" />
        <input
          type="text"
          // value={query}
          value=""
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKey}
          placeholder="Title, director, actor, year..."
          aria-label="Search Movies"
          className="flex-1 bg-transparent text-3.75 text-white placeholder:text-text-muted outline-none font-light font-sans"
        />
        <button
          // onClick={onSearch}
          className="shrink-0 px-4 py-1.5 rounded-lg text-3.1 font-medium transition-opacity hover:opacity-80 active:scale-95 font-sans "
          style={{
            background: "#E8A020",
            color: "#1a1000",
            letterSpacing: "0.01em",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
