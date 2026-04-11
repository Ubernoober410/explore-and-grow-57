import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Events = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const events: Record<number, { title: string; desc: string; link: string }> = {
    5: { title: "Career Panel: Tech Industry", desc: "Hear from professionals in software, AI, and data science about their career journeys.", link: "#" },
    12: { title: "Resume Workshop", desc: "Get hands-on help crafting your resume with industry recruiters.", link: "#" },
    18: { title: "Networking Mixer", desc: "Meet peers and mentors in a casual virtual environment.", link: "#" },
    25: { title: "Finance Careers Deep Dive", desc: "Explore roles in investment banking, fintech, and financial planning.", link: "#" },
  };

  const daysInMonth = 30;
  const eventDays = Object.keys(events).map(Number);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-16 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Event Calendar</h1>
        <p className="text-xl text-muted-foreground mb-12">Click on a highlighted day to see event details and sign up.</p>

        <div className="grid grid-cols-7 gap-2 mb-8">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-center text-sm font-semibold text-muted-foreground py-2">{d}</div>
          ))}
          {Array.from({ length: 2 }, (_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const hasEvent = eventDays.includes(day);
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => hasEvent && setSelectedDay(isSelected ? null : day)}
                className={`py-3 rounded-lg text-center transition-colors ${
                  hasEvent
                    ? isSelected
                      ? "bg-accent text-accent-foreground font-bold"
                      : "bg-accent/15 text-accent font-semibold hover:bg-accent/25 cursor-pointer"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {selectedDay && events[selectedDay] && (
          <div className="bg-card rounded-xl p-8 shadow-md border border-border">
            <h3 className="text-2xl font-bold text-primary mb-2">{events[selectedDay].title}</h3>
            <p className="text-muted-foreground mb-4">{events[selectedDay].desc}</p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Sign Up for Event</Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
