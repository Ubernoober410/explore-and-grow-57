import { Link } from "react-router-dom";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="h-4 w-4 shrink-0"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388a75.63 75.63 0 0 1-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9A75.63 75.63 0 0 1 49.4 388c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1A75.63 75.63 0 0 1 92 81.4c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9a75.63 75.63 0 0 1 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="h-4 w-4 shrink-0"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 85 186.89v67.17a97.75 97.75 0 1 0 77.23 95.71V0h67.34A121.18 121.18 0 0 0 448 209.91z" />
  </svg>
);

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
          <a
            href="mailto:emerginglux@gmail.com"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            emerginglux@gmail.com
          </a>
          <a
            href="https://www.instagram.com/emerging_lux/"
            target="_blank"
            rel="noreferrer"
            aria-label="Emerging Lux on Instagram"
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@emerging.lux"
            target="_blank"
            rel="noreferrer"
            aria-label="Emerging Lux on TikTok"
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <TikTokIcon />
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
