import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-lg font-serif font-bold text-primary-foreground mb-2">Emerging Lux</p>
          <p className="text-primary-foreground/70">&copy; {new Date().getFullYear()} Emerging Lux. All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-primary-foreground mb-2">Quick Links</h4>
          <Link to="/exploration" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Exploration</Link>
          <Link to="/careers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Careers</Link>
          <Link to="/game" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Game</Link>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-primary-foreground mb-2">Contact</h4>
          <a href="mailto:info@emerginglux.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">info@emerginglux.com</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
