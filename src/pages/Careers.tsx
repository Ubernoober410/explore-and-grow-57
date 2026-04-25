import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CAREERS, slugify } from "@/lib/careers";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-16 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Career Fields</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Browse broad professional fields our platform can recommend based on your game results. Click any field to learn more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAREERS.map((career) => (
            <Link
              key={career.name}
              to={`/careers/${slugify(career.name)}`}
              className="bg-card rounded-lg p-5 border border-border hover:shadow-lg hover:border-accent/30 transition-all group"
            >
              <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{career.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{career.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
