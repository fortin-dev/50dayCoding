import { useState } from "react";

export default function SearchBar() {
  const [focused, setFocused] = useState(false);

  function handleKey(e) {
    if (e.key === "Enter") onSearch();
  }
  return (
    <div className=" relative w-full max-w-[520px]">
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
      ></div>
    </div>
  );
}
