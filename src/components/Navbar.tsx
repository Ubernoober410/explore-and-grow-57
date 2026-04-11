import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-primary tracking-tight">
          Emerging Lux
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/exploration" className="font-medium text-primary hover:text-accent transition-colors">Discussion</Link>
          <Link to="/exploration" className="font-medium text-primary hover:text-accent transition-colors">Exploration</Link>
          <Link to="/game" className="font-medium text-primary hover:text-accent transition-colors">Game</Link>
          <Link to="/careers" className="font-medium text-primary hover:text-accent transition-colors">Careers</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
