import { Link } from "react-router-dom";

const Crest = () => (
  <svg viewBox="0 0 40 48" className="h-8 w-7 shrink-0 text-primary" aria-hidden>
    <path
      d="M20 3 C31 6 36 10 36 22 C36 34 28 42 20 45 C12 42 4 34 4 22 C4 10 9 6 20 3 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="20" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

const NAV_ITEMS = [
  { to: "/exploration", label: "Explore" },
  { to: "/discussion", label: "Discussion" },
  { to: "/game", label: "Game" },
  { to: "/careers", label: "Careers" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5">
          <Crest />
          <span className="text-xl font-display font-bold text-primary tracking-tight">
            Emerging Lux
          </span>
        </Link>
        <nav className="flex items-center gap-1 rounded-full bg-muted/70 p-1.5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-card hover:shadow-sm transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
