import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const careers = [
  "Software Engineer", "Data Scientist", "Financial Analyst", "Marketing Manager",
  "Graphic Designer", "Mechanical Engineer", "Nurse Practitioner", "Environmental Scientist",
  "Urban Planner", "Biotech Researcher", "Product Manager", "UX Designer",
  "Cybersecurity Analyst", "Agricultural Engineer", "Public Health Specialist",
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-16 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Careers</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Browse the careers our platform can recommend based on your game results. Click any career to learn more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {careers.map((career) => (
            <Link
              key={career}
              to={`/careers/${encodeURIComponent(career.toLowerCase().replace(/ /g, "-"))}`}
              className="bg-card rounded-lg p-5 border border-border hover:shadow-lg hover:border-accent/30 transition-all group"
            >
              <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{career}</h3>
              <p className="text-sm text-muted-foreground mt-1">Learn about this career path →</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
