import { Link } from "react-router-dom";

const Crest = () => (
  <svg viewBox="0 0 40 48" className="h-9 w-8 shrink-0 text-primary" aria-hidden>
    <path
      d="M20 2 L37 8 V26 C37 36 29 43 20 46 C11 43 3 36 3 26 V8 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M3 17 H37" stroke="currentColor" strokeWidth="1.25" />
    <path d="M20 2 V46" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="20" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 25 L20 35 M15 30 L25 30" stroke="currentColor" strokeWidth="1.25" />
  </svg>
);

const Navbar = () => {
  return (
    <header className="bg-card">
      {/* Institutional top rule */}
      <div className="h-1.5 bg-primary" />
      <div className="border-b border-border">
        <div className="container mx-auto px-8 py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <Crest />
            <span className="flex flex-col leading-none">
              <span className="text-2xl font-display font-bold text-primary tracking-tight">
                Emerging Lux
              </span>
              <span className="mt-1 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                Career Discovery Institute
              </span>
            </span>
          </Link>
          <nav className="hidden md:flex items-stretch divide-x divide-border border-x border-border">
            {[
              { to: "/exploration", label: "Discussion" },
              { to: "/exploration", label: "Exploration" },
              { to: "/game", label: "Game" },
              { to: "/careers", label: "Careers" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary hover:bg-secondary/60 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
