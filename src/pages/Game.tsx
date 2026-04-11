import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Game = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-16 flex-1 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">The Career Discovery Game</h1>
        <p className="text-xl text-muted-foreground mb-8">
          When you first visit Emerging Lux, you'll be guided through an interactive minigame designed to uncover your strengths, interests, and personality traits.
        </p>

        <div className="bg-card rounded-xl p-8 shadow-md border border-border mb-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">How It Works</h2>
            <p className="text-muted-foreground leading-relaxed">
              The game presents you with a series of scenarios and choices. Based on your responses, our system analyzes your personality profile and matches you with career paths that align with who you are. It's not a test — there are no wrong answers. It's a journey of self-discovery.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">What Happens After</h2>
            <p className="text-muted-foreground leading-relaxed">
              After completing the game, you'll receive personalized career recommendations. Each recommended career links to a detailed page where you can learn more about the role, salary expectations, and real experiences from people in that field.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Play Again Anytime</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returning users can always replay the game from this page. Your results may change as you grow and your interests evolve!
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Play the Game
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/careers">Browse Careers</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
