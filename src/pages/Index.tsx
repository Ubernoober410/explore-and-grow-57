import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroGraduation from "@/assets/hero-graduation.jpg.asset.json";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--hero-gradient)" }}>
        <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-accent/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />

        <div className="relative container mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-14 items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur text-sm font-medium text-primary shadow-sm mb-8">
              ✨ Built for high school students
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.08] text-primary mb-6">
              Not sure what career{" "}
              <span className="relative inline-block">
                <span className="relative z-10">fits you?</span>
                <span className="absolute inset-x-0 bottom-1 h-4 bg-accent/70 -z-0 rounded-full" aria-hidden />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Take a quick, fun personality quiz and discover careers that actually match your interests, strengths, and vibe. No boring questionnaires — just you, figuring you out.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md text-base font-semibold px-8 h-12 rounded-full">
                <Link to="/game">Take the Quiz →</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-base font-semibold px-8 h-12 rounded-full bg-card/70 backdrop-blur text-primary hover:bg-card">
                <Link to="/careers">Browse Careers</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
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
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl ring-8 ring-card/70">
                <img src={heroGraduation.url} alt="University graduates celebrating with caps thrown in the air" className="w-full h-full object-cover" width={1280} height={1280} />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-xs text-muted-foreground">Quick quiz</div>
                  <div className="font-display font-bold text-primary text-sm">~3 minutes</div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-card rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="text-xs text-muted-foreground">Matched to</div>
                  <div className="font-display font-bold text-primary text-sm">50+ paths</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Introduction */}
      <section className="py-24 md:py-28 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-sm font-medium text-primary mb-5">The Institute</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-5">About Emerging Lux</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We bridge the gap between academic learning and the dynamic, forward-thinking industries shaping tomorrow. Through interactive tools, mentorship, and community, we help you discover who you want to become.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { num: "01", title: "Self-Discovery Game", desc: "Take our interactive personality-driven game to uncover career paths tailored to your unique strengths and interests." },
              { num: "02", title: "Community & Discussion", desc: "Join industry-specific channels to connect with peers, mentors, and professionals across finance, tech, agriculture, and more." },
              { num: "03", title: "Career Exploration", desc: "Access curated resources on salaries, locations, industry examples, and real stories from professionals already in the field." },
            ].map((item, i) => (
              <div
                key={item.num}
                className="relative bg-card p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderRadius: i % 2 === 0 ? "46% 54% 42% 58% / 56% 44% 56% 44%" : "54% 46% 58% 42% / 44% 56% 44% 56%" }}
              >
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-display text-lg font-bold text-primary mb-5">{item.num}</div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Success Stories */}
      <section className="py-24 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-card text-sm font-medium text-primary mb-5">Outcomes</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-5">Alumni Success Stories</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how Emerging Lux has empowered participants to achieve remarkable career milestones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Emerging Lux was instrumental in my journey to becoming a lead AI researcher at NovaTech.", name: "Dr. Elara Vance", role: "Quantum AI, NovaTech" },
              { quote: "The connections I made through Emerging Lux led directly to my role in sustainable energy solutions.", name: "Kaelen Reyes", role: "Renewable Energy Lead, Solara Corp" },
              { quote: "Discovering the biotech track here opened doors I never knew existed. Truly life-changing.", name: "Maya Chen", role: "Biotech Innovator, Geneesis Labs" },
            ].map((story) => (
              <div key={story.name} className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <p className="font-display text-lg text-muted-foreground mb-6 leading-relaxed">“{story.quote}”</p>
                <p className="font-semibold text-primary">{story.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{story.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="rounded-[2rem] bg-muted/60 px-8 py-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">Ready to get started?</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-semibold px-8 shadow-md">
                <Link to="/game">Take the Quiz</Link>
              </Button>
              {[
                { to: "/exploration", label: "Explore Resources" },
                { to: "/careers", label: "Browse Careers" },
                { to: "/events", label: "Event Calendar" },
              ].map((l) => (
                <Button key={l.to} asChild variant="ghost" size="lg" className="rounded-full text-base font-semibold px-8 bg-card text-primary hover:bg-card/70 shadow-sm">
                  <Link to={l.to}>{l.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
