import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Exploration = () => {
  const resources = [
    { title: "Play the Game", desc: "Take our interactive personality game to discover career paths suited to you.", link: "/game" },
    { title: "Event Calendar", desc: "See upcoming workshops, panels, and networking events.", link: "/events" },
    { title: "Discussion Channel", desc: "Join industry-specific conversations with peers and mentors.", link: "/discussion" },
    { title: "Career Research", desc: "Explore salary data, location info, and industry insights.", link: "/careers" },
    { title: "Real Examples", desc: "Read experiences from professionals already working in recommended fields.", link: "/examples" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-16 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Exploration</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Resources for self-discovery and inspiration. Find everything you need to explore your future career path.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((r) => (
            <Link key={r.title} to={r.link} className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{r.title}</h3>
              <p className="text-muted-foreground">{r.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exploration;
