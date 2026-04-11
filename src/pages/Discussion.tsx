import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const channels = [
  { id: "finance", label: "💰 Finance" },
  { id: "technology", label: "💻 Technology" },
  { id: "agriculture", label: "🌾 Agriculture" },
  { id: "healthcare", label: "🏥 Healthcare" },
  { id: "creative", label: "🎨 Creative Arts" },
  { id: "general", label: "💬 General" },
];

const mockMessages: Record<string, { user: string; text: string; time: string }[]> = {
  finance: [
    { user: "Alex", text: "Has anyone looked into fintech startups?", time: "2:30 PM" },
    { user: "Jordan", text: "Yes! I'm interning at one this summer. Happy to share my experience.", time: "2:45 PM" },
  ],
  technology: [
    { user: "Sam", text: "What programming languages should I focus on?", time: "1:00 PM" },
    { user: "Taylor", text: "Python and JavaScript are great starting points.", time: "1:15 PM" },
  ],
  agriculture: [
    { user: "Morgan", text: "Anyone interested in urban farming initiatives?", time: "11:00 AM" },
  ],
  healthcare: [
    { user: "Riley", text: "Looking for advice on pre-med vs. public health paths.", time: "3:00 PM" },
  ],
  creative: [
    { user: "Casey", text: "Portfolio tips for graphic design roles?", time: "10:00 AM" },
  ],
  general: [
    { user: "Admin", text: "Welcome to Emerging Lux Discussion! Pick a channel to get started.", time: "9:00 AM" },
  ],
};

const Discussion = () => {
  const [activeChannel, setActiveChannel] = useState("general");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border p-4 hidden md:block">
          <h2 className="font-bold text-primary mb-4 text-lg">Channels</h2>
          <nav className="space-y-1">
            {channels.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(ch.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeChannel === ch.id
                    ? "bg-accent/15 text-accent font-semibold"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {ch.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Chat area */}
        <main className="flex-1 flex flex-col">
          <div className="border-b border-border px-6 py-4">
            <h3 className="font-bold text-primary text-lg">
              {channels.find((c) => c.id === activeChannel)?.label}
            </h3>
          </div>
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {(mockMessages[activeChannel] || []).map((msg, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm font-bold">{msg.user[0]}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-primary text-sm">{msg.user}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-foreground">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border px-6 py-4">
            <input
              type="text"
              placeholder="Type a message... (demo only)"
              className="w-full bg-muted rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              disabled
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Discussion;
