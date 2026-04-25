import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { findCareerBySlug } from "@/lib/careers";

const CareerDetail = () => {
  const { slug } = useParams();
  const career = slug ? findCareerBySlug(slug) : undefined;
  const title = career?.name || slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Career Field";
  const description = career?.description ||
    "A professional field combining specialized expertise with continuous learning to solve real-world problems.";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-16 flex-1 max-w-3xl">
        <Link to="/careers" className="text-accent hover:underline mb-6 inline-block">← Back to Career Fields</Link>
        <h1 className="text-4xl font-bold text-primary mb-6">{title}</h1>
        <div className="bg-card rounded-xl p-8 shadow-md border border-border mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">About {title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            {description}
          </p>
          <h3 className="text-xl font-bold text-primary mb-2 mt-6">What you might do in this field</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Apply specialized knowledge to real-world challenges</li>
            <li>Collaborate with diverse teams and stakeholders</li>
            <li>Develop strategies, products, or services that create impact</li>
            <li>Continuously learn as the field evolves</li>
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
