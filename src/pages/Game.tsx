import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ActionType,
  CONSECUTIVE_LIMIT,
  GameState,
  INITIAL_STATE,
  MAX_QUARTERS,
  derivePersonality,
  getStatusMessage,
  performAction,
} from "@/lib/gameEngine";
import AvatarHill from "@/components/AvatarHill";

type Screen = "intro" | "playing" | "result";

const ACTIONS: { id: ActionType; label: string; emoji: string; desc: string }[] = [
  { id: "study", label: "Study", emoji: "📖", desc: "Boost GPA, lose social" },
  { id: "cram", label: "Cram", emoji: "☕", desc: "Big GPA gain, big stress" },
  { id: "tutor", label: "Tutor", emoji: "🧑‍🏫", desc: "GPA + social + less stress" },
  { id: "chat", label: "Hang Out", emoji: "💬", desc: "Build friendships" },
  { id: "join_club", label: "Join Club", emoji: "🎭", desc: "Big social + small GPA" },
  { id: "party", label: "Party", emoji: "🥳", desc: "Social up, GPA down" },
  { id: "exercise", label: "Exercise", emoji: "🏋️", desc: "Cut stress, gain energy" },
  { id: "meditate", label: "Meditate", emoji: "🧘", desc: "Big stress relief" },
  { id: "game", label: "Play Games", emoji: "🎮", desc: "Unwind, lose a little" },
  { id: "slack", label: "Slack Off", emoji: "🛋️", desc: "Cut stress, hurt grades" },
  { id: "skip_class", label: "Skip Class", emoji: "🚪", desc: "Rest up, GPA hit" },
  { id: "nothing", label: "Do Nothing", emoji: "😶", desc: "Everything decays" },
];

const Stat = ({ label, value, max = 100, tone }: { label: string; value: number; max?: number; tone: string }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className="font-medium">{label}</span>
      <span className="text-muted-foreground">{value.toFixed(max === 4 ? 2 : 0)}{max === 4 ? "" : `/${max}`}</span>
    </div>
    <Progress value={(value / max) * 100} className={tone} />
  </div>
);

const Game = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [state, setState] = useState<GameState>(INITIAL_STATE);

  const handleAction = (action: ActionType) => {
    const next = performAction(state, action);
    setState(next);
    if (next.status !== "playing") {
      setTimeout(() => setScreen("result"), 600);
    }
  };

  const start = () => {
    setState(INITIAL_STATE);
    setScreen("playing");
  };

  const reset = () => {
    setState(INITIAL_STATE);
    setScreen("intro");
  };

  // ── Intro Screen ─────────────────────────────────────────────────────
  if (screen === "intro") {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-8 py-16 flex-1 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">The Career Discovery Game</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Survive 16 quarters of school. Your choices reveal who you really are — and which careers fit you best.
          </p>

          <div className="bg-card rounded-xl p-8 shadow-md border border-border mb-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">How It Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                Each turn you pick one action. Every choice shifts your <strong>GPA</strong>, <strong>Social</strong>,
                <strong> Stress</strong>, and <strong>Energy</strong>. There are no wrong answers — just consequences.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">Win Conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Survive all 16 quarters without your GPA hitting 0, your social life vanishing, your stress maxing out, or your energy crashing to zero.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">Your Result</h2>
              <p className="text-muted-foreground leading-relaxed">
                We track every choice you make and match you to one of 10 personalities — each tied to real career paths you can explore.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" onClick={start} className="bg-accent text-accent-foreground hover:bg-accent/90">
              ▶ Play the Game
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/careers">Browse Careers</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ── Result Screen ────────────────────────────────────────────────────
  if (screen === "result") {
    const personality = derivePersonality(state.actionCounts);
    const status = getStatusMessage(state.status);
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-8 py-16 flex-1 max-w-3xl">
          <Card className="p-8 mb-6 text-center border-2 border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-2">{status.title}</h2>
            <p className="text-muted-foreground">{status.desc}</p>
            <p className="text-sm text-muted-foreground mt-2">You made it through {state.quarter} of {MAX_QUARTERS} quarters.</p>
          </Card>

          <Card className="p-8 mb-6 bg-gradient-to-br from-secondary to-background border-2 border-accent/30">
            <div className="text-center mb-6">
              <div className="text-7xl mb-3">{personality.emoji}</div>
              <h1 className="text-4xl font-bold text-primary mb-2">{personality.type}</h1>
              <p className="text-lg italic text-muted-foreground">"{personality.tagline}"</p>
            </div>
            <p className="text-foreground leading-relaxed mb-6">{personality.description}</p>

            <div className="mb-6">
              <h3 className="font-bold text-primary mb-2">Your Traits</h3>
              <div className="flex flex-wrap gap-2">
                {personality.traits.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-primary mb-2">Suggested Career Paths</h3>
              <div className="flex flex-wrap gap-2">
                {personality.careers.map((c) => (
                  <Badge key={c} className="bg-accent text-accent-foreground hover:bg-accent/90">{c}</Badge>
                ))}
              </div>
            </div>
          </Card>

          <div className="flex gap-4">
            <Button size="lg" onClick={start} className="bg-accent text-accent-foreground hover:bg-accent/90">
              🔄 Play Again
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/careers">Explore Careers</Link>
            </Button>
            <Button onClick={reset} variant="ghost" size="lg">
              Back to Intro
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ── Playing Screen ───────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-10 flex-1 max-w-5xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary">Quarter {state.quarter + 1} / {MAX_QUARTERS}</h1>
          <Button variant="ghost" onClick={reset}>Quit</Button>
        </div>

        <div className="mb-6">
          <AvatarHill quarter={state.quarter} maxQuarters={MAX_QUARTERS} counts={state.actionCounts} />
        </div>

        <Card className="p-6 mb-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat label="GPA" value={state.gpa} max={4} tone="" />
          <Stat label="Social" value={state.social} tone="" />
          <Stat label="Stress" value={state.stress} tone="" />
          <Stat label="Energy" value={state.energy} tone="" />
        </Card>

        {state.lastMessage && (
          <Card className="p-4 mb-6 bg-secondary/50 border-l-4 border-l-accent">
            <p className="text-sm text-foreground">{state.lastMessage}</p>
          </Card>
        )}

        <h2 className="text-xl font-bold text-primary mb-3">What do you do this quarter?</h2>
        <p className="text-xs text-muted-foreground mb-3">
          Tip: each action can only be picked {CONSECUTIVE_LIMIT} times in a row. Mix it up!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {ACTIONS.map((a) => {
            const blocked = state.lastAction === a.id && state.consecutiveCount >= CONSECUTIVE_LIMIT;
            return (
              <button
                key={a.id}
                onClick={() => !blocked && handleAction(a.id)}
                disabled={blocked}
                className="text-left p-4 bg-card border border-border rounded-lg hover:border-accent hover:shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:border-border disabled:hover:shadow-none"
              >
                <div className="text-2xl mb-1">{a.emoji}</div>
                <div className="font-semibold text-foreground">{a.label}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {blocked ? `Maxed out — pick something else` : a.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
