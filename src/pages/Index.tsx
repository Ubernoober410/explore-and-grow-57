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
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--hero-gradient)" }}>
        <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-accent/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />

        <div className="relative container mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-card/90 backdrop-blur border border-primary/30 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm mb-8">
              Built for high school students
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.08] text-primary mb-6">
              Not sure what career{" "}
              <span className="relative inline-block">
                <span className="relative z-10">fits you?</span>
                <span className="absolute inset-x-0 bottom-1 h-4 bg-accent/70 -z-0 rounded-sm" aria-hidden />
              </span>
            </h1>
            <div className="w-24 h-px bg-primary/40 mb-6" aria-hidden />
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Take a quick, fun personality quiz and discover careers that actually match your interests, strengths, and vibe. No boring questionnaires — just you, figuring you out.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm text-sm font-semibold uppercase tracking-[0.14em] px-8 h-12 rounded-sm">
                <Link to="/game">Take the Quiz →</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm font-semibold uppercase tracking-[0.14em] px-8 h-12 rounded-sm border-primary/40 bg-card/70 backdrop-blur text-primary">
                <Link to="/careers">Browse Careers</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground border-t border-primary/15 pt-6">
              <div className="flex -space-x-2">
                {["🎨","🚀","🧬","💡"].map((e) => (
                  <span key={e} className="w-9 h-9 rounded-full bg-card border-2 border-background flex items-center justify-center text-lg shadow-sm">{e}</span>
                ))}
              </div>
              <span>Join thousands of students discovering their path</span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 border border-primary/25 rounded-sm" aria-hidden />
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl border border-primary/20 ring-8 ring-card">
                <img src={heroCampus} alt="Student standing at a crossroads of career paths" className="w-full h-full object-cover" width={1280} height={1280} />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card rounded-sm shadow-lg border border-primary/25 px-4 py-3 flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">Quick quiz</div>
                  <div className="font-display font-bold text-primary text-sm">~3 minutes</div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-card rounded-sm shadow-lg border border-primary/25 px-4 py-3 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">Matched to</div>
                  <div className="font-display font-bold text-primary text-sm">50+ paths</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic divider */}
      <div className="container mx-auto px-8">
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-primary/50 text-xs tracking-[0.4em] uppercase">❖</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>

      {/* About / Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">The Institute</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-5">About Emerging Lux</h2>
            <div className="mx-auto w-16 h-px bg-primary/40 mb-6" aria-hidden />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between academic learning and the dynamic, forward-thinking industries shaping tomorrow. Through interactive tools, mentorship, and community, we help you discover who you want to become.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-border pt-12">
            {[
              { num: "01", title: "Self-Discovery Game", desc: "Take our interactive personality-driven game to uncover career paths tailored to your unique strengths and interests." },
              { num: "02", title: "Community & Discussion", desc: "Join industry-specific channels to connect with peers, mentors, and professionals across finance, tech, agriculture, and more." },
              { num: "03", title: "Career Exploration", desc: "Access curated resources on salaries, locations, industry examples, and real stories from professionals already in the field." },
            ].map((item) => (
              <div key={item.num} className="bg-card rounded-sm p-8 shadow-sm border border-border border-t-2 border-t-primary hover:shadow-lg transition-shadow">
                <div className="font-display text-5xl font-bold text-primary mb-4">{item.num}</div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-8">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-primary/50 text-xs tracking-[0.4em] uppercase">❖</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>

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
