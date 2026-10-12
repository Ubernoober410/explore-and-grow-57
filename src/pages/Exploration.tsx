import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TikTokEmbed from "@/components/TikTokEmbed";

const TIKTOK_VIDEOS = [
  "https://www.tiktok.com/@emerging.lux/video/7694553170084777229",
  "https://www.tiktok.com/@emerging.lux/video/7694182278523587853",
  "https://www.tiktok.com/@emerging.lux/video/7688572832254643469",
  "https://www.tiktok.com/@emerging.lux/video/7685997653578026254",
  "https://www.tiktok.com/@emerging.lux/video/7681117210537987341",
  "https://www.tiktok.com/@emerging.lux/video/7681106612588727566",
  "https://www.tiktok.com/@emerging.lux/video/7681106178641792269",
  "https://www.tiktok.com/@emerging.lux/video/7681105977889885453",
  "https://www.tiktok.com/@emerging.lux/video/7681079810549927181",
];

const videoIdFromUrl = (url: string) => url.split("/video/")[1] ?? url;

const Exploration = () => {
  const resources = [
    { title: "Play the Game", desc: "Take our interactive personality game to discover career paths suited to you.", link: "/game" },
    { title: "Event Calendar", desc: "See upcoming workshops, panels, and networking events.", link: "/events" },
    { title: "Discussion Channel", desc: "Join industry-specific conversations with peers and mentors.", link: "/discussion" },
    { title: "Career Research", desc: "Explore salary data, location info, and industry insights.", link: "/careers" },
    { title: "Real Examples", desc: "Read experiences from professionals already working in recommended fields.", link: "/examples" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 py-16 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Exploration</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Resources for self-discovery and inspiration. Find everything you need to explore your future career path.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((r) => (
            <Link key={r.title} to={r.link} className="bg-card rounded-3xl p-7 shadow-sm hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{r.title}</h3>
              <p className="text-muted-foreground">{r.desc}</p>
            </Link>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Career Exploration Videos</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Short clips from our TikTok channel covering career paths, tips, and real-world insights.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TIKTOK_VIDEOS.map((url) => (
              <div key={url} className="bg-card rounded-3xl p-4 shadow-sm overflow-hidden">
                <TikTokEmbed videoUrl={url} videoId={videoIdFromUrl(url)} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Exploration;
