import { useEffect, useRef } from "react";

declare global {
  interface Window {
    tiktokEmbedLoad?: () => void;
  }
}

let scriptPromise: Promise<void> | null = null;

const loadTikTokScript = (): Promise<void> => {
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve) => {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[src="https://www.tiktok.com/embed.js"]'
      );
      if (existing) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }
  return scriptPromise;
};

interface TikTokEmbedProps {
  videoUrl: string;
  videoId: string;
}

const TikTokEmbed = ({ videoUrl, videoId }: TikTokEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadTikTokScript().then(() => {
      if (cancelled) return;
      // Ask TikTok's script to process any unprocessed blockquotes on the page.
      if (window.tiktokEmbedLoad) {
        window.tiktokEmbedLoad();
      } else {
        // Fallback: re-injecting the script re-scans the document.
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [videoId]);

  return (
    <div ref={containerRef} className="flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={videoUrl}
        data-video-id={videoId}
        style={{ maxWidth: 325, minWidth: 325 }}
      >
        <section>
          <a target="_blank" rel="noreferrer" href={videoUrl}>
            Watch on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;
