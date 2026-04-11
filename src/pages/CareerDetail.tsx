import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CareerDetail = () => {
  const { slug } = useParams();
  const title = slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Career";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-16 flex-1 max-w-3xl">
        <Link to="/careers" className="text-accent hover:underline mb-6 inline-block">← Back to Careers</Link>
        <h1 className="text-4xl font-bold text-primary mb-6">{title}</h1>
        <div className="bg-card rounded-xl p-8 shadow-md border border-border mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">What is a {title}?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A {title} is a professional who works in their specialized field, applying expertise to solve complex problems and drive innovation. This role typically requires a combination of education, hands-on experience, and continuous learning.
          </p>
          <h3 className="text-xl font-bold text-primary mb-2 mt-6">Key Responsibilities</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Analyze industry trends and apply best practices</li>
            <li>Collaborate with cross-functional teams</li>
            <li>Develop solutions and strategies in the field</li>
            <li>Stay current with emerging technologies and methods</li>
          </ul>
        </div>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/examples">See Real Experiences →</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default CareerDetail;
