import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroCampus from "@/assets/hero-campus.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary mb-6">
              Unlock Your Potential, Define Your Future.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Emerging Lux is a curated platform for ambitious students to explore innovative career paths, connect with industry leaders, and discover opportunities beyond the conventional.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg text-base px-8">
                <Link to="/exploration">Start Exploring</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/game">Play the Game</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img src={heroCampus} alt="Emerging Lux campus" className="w-full h-full object-cover" width={1280} height={720} />
            </div>
          </div>
        </div>
      </section>

      {/* About / Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Emerging Lux</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bridge the gap between academic learning and the dynamic, forward-thinking industries shaping tomorrow. Through interactive tools, mentorship, and community, we help you discover who you want to become.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Self-Discovery Game", desc: "Take our interactive personality-driven game to uncover career paths tailored to your unique strengths and interests." },
              { num: "02", title: "Community & Discussion", desc: "Join industry-specific channels to connect with peers, mentors, and professionals across finance, tech, agriculture, and more." },
              { num: "03", title: "Career Exploration", desc: "Access curated resources on salaries, locations, industry examples, and real stories from professionals already in the field." },
            ].map((item) => (
              <div key={item.num} className="bg-card rounded-xl p-8 shadow-md border border-border hover:shadow-xl transition-shadow">
                <div className="text-5xl font-bold text-accent/20 mb-4">{item.num}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Success Stories */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Alumni Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Emerging Lux has empowered participants to achieve remarkable career milestones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { quote: "Emerging Lux was instrumental in my journey to becoming a lead AI researcher at NovaTech.", name: "Dr. Elara Vance", role: "Quantum AI, NovaTech" },
              { quote: "The connections I made through Emerging Lux led directly to my role in sustainable energy solutions.", name: "Kaelen Reyes", role: "Renewable Energy Lead, Solara Corp" },
              { quote: "Discovering the biotech track here opened doors I never knew existed. Truly life-changing.", name: "Maya Chen", role: "Biotech Innovator, Geneesis Labs" },
            ].map((story) => (
              <div key={story.name} className="bg-card rounded-xl p-6 shadow-lg border border-border">
                <p className="font-serif text-lg italic text-muted-foreground mb-4">"{story.quote}"</p>
                <p className="font-bold text-primary">{story.name}</p>
                <p className="text-sm text-muted-foreground">{story.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Ready to Get Started?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/exploration">Explore Resources</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/careers">Browse Careers</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/events">Event Calendar</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
