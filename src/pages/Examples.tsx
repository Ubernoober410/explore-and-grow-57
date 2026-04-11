import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Examples = () => {
  const experiences = [
    { name: "Sarah Kim", field: "Software Engineering", years: "5 years", story: "After completing the Emerging Lux game, I was matched with software engineering. I started with an internship at a startup and now lead a team of 12 engineers at a Fortune 500 company. The community discussions helped me navigate my early career decisions." },
    { name: "Marcus Johnson", field: "Sustainable Agriculture", years: "3 years", story: "I never considered agriculture until Emerging Lux recommended it based on my interests in sustainability and hands-on work. Now I run an urban farming initiative that feeds hundreds of families in my city." },
    { name: "Priya Patel", field: "Financial Analysis", years: "7 years", story: "The career exploration tools at Emerging Lux gave me the confidence to pursue finance despite coming from a non-traditional background. The mentorship connections were invaluable in landing my first role." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-16 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Real Experiences</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Read written experiences from professionals working in fields that may be recommended to you.
        </p>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.name} className="bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">{exp.name[0]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.name}</h3>
                  <p className="text-muted-foreground">{exp.field} · {exp.years}</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">{exp.story}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Examples;
