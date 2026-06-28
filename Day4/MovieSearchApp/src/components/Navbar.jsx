export default function Navbar() {
  const NAV_LINKS = ["Movie", "TV", "People"];
  return (
    <nav className="flex items-center justify-between px-12 py-5 border-b border-white/10">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
        <span
          className="text-xl tracking-tight text-white"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-0.02em",
          }}
        >
          CineLove
        </span>
      </div>

      <div className="flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className="text-[14px] text-text-secodary hover:text-white/90 transition-colors tracking-wide"
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
