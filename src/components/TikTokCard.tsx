import type { TikTokVideo } from "@/lib/tiktokVideos";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="h-3.5 w-3.5 shrink-0"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 85 186.89v67.17a97.75 97.75 0 1 0 77.23 95.71V0h67.34A121.18 121.18 0 0 0 448 209.91z" />
  </svg>
);

const TikTokCard = ({ video }: { video: TikTokVideo }) => (
  <a
    href={video.url}
    target="_blank"
    rel="noreferrer"
    aria-label={`Watch "${video.title}" on TikTok`}
    className="group block bg-card rounded-3xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative overflow-hidden rounded-[1.25rem] aspect-[3/4] bg-secondary">
      <img
        src={video.thumbnail}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={486}
        height={648}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <TikTokIcon />
        Watch on TikTok
      </span>
    </div>
    <p className="mt-3 px-1 line-clamp-2 text-sm font-semibold text-primary leading-snug">
      {video.title}
    </p>
  </a>
);

export default TikTokCard;
