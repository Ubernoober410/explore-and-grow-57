import { ActionCounts } from "@/lib/gameEngine";

interface Props {
  quarter: number;
  maxQuarters: number;
  counts: ActionCounts;
}

const ACCESSORY_THRESHOLD = 3;

const AvatarHill = ({ quarter, maxQuarters, counts }: Props) => {
  const progress = Math.min(1, quarter / maxQuarters);

  // Hill path: from (40, 240) to (560, 60) along a curve
  const startX = 40;
  const startY = 240;
  const endX = 560;
  const endY = 60;
  const x = startX + (endX - startX) * progress;
  // Curve: arc up — quadratic
  const y = startY + (endY - startY) * progress - Math.sin(progress * Math.PI) * 30;

  // Unlocked accessories
  const has = (k: keyof ActionCounts) => counts[k] >= ACCESSORY_THRESHOLD;
  const partyHat = has("party");
  const glasses = has("study") || has("cram");
  const dumbbell = has("exercise");
  const halo = has("meditate");
  const book = has("tutor");
  const controller = has("game");
  const clubBadge = has("join_club");
  const pillow = has("slack") || has("skip_class") || has("nothing");
  const friend = has("chat");

  return (
    <div className="relative w-full bg-gradient-to-b from-sky-100 to-yellow-50 rounded-xl border border-border overflow-hidden">
      <svg viewBox="0 0 600 280" className="w-full h-auto block">
        {/* Sun */}
        <circle cx="510" cy="50" r="28" fill="hsl(50 95% 75%)" />
        {/* Background hills */}
        <path d="M0,200 Q150,140 300,170 T600,150 L600,280 L0,280 Z" fill="hsl(140 40% 78%)" opacity="0.6" />
        {/* Main hill */}
        <path d="M20,260 Q200,180 350,140 T580,40 L600,40 L600,280 L0,280 Z" fill="hsl(140 50% 65%)" />
        {/* Path on hill */}
        <path
          d="M40,240 Q200,200 350,140 T560,60"
          stroke="hsl(40 60% 60%)"
          strokeWidth="6"
          strokeDasharray="8 6"
          fill="none"
          opacity="0.7"
        />
        {/* Start flag */}
        <line x1="40" y1="240" x2="40" y2="215" stroke="hsl(0 0% 30%)" strokeWidth="2" />
        <polygon points="40,215 55,220 40,225" fill="hsl(200 80% 55%)" />
        {/* Finish flag */}
        <line x1="560" y1="60" x2="560" y2="30" stroke="hsl(0 0% 30%)" strokeWidth="2" />
        <polygon points="560,30 580,36 560,42" fill="hsl(50 95% 55%)" />
        <text x="555" y="55" fontSize="9" fill="hsl(0 0% 30%)" textAnchor="end">FINISH</text>

        {/* Avatar group */}
        <g transform={`translate(${x}, ${y})`} style={{ transition: "transform 0.6s ease-out" }}>
          {/* Walking bob */}
          <g transform={`translate(0, ${Math.sin(quarter * 1.2) * 1.5})`}>
            {/* Friend (chat) */}
            {friend && (
              <g transform="translate(-22, -2)">
                <circle cx="0" cy="-18" r="5" fill="hsl(20 70% 70%)" />
                <rect x="-4" y="-13" width="8" height="14" rx="2" fill="hsl(280 50% 60%)" />
              </g>
            )}

            {/* Halo (meditate) */}
            {halo && (
              <ellipse cx="0" cy="-32" rx="10" ry="3" fill="none" stroke="hsl(50 100% 60%)" strokeWidth="2" />
            )}

            {/* Body */}
            <rect x="-6" y="-12" width="12" height="18" rx="3" fill="hsl(200 70% 50%)" />
            {/* Head */}
            <circle cx="0" cy="-20" r="7" fill="hsl(30 60% 75%)" />

            {/* Glasses (study/cram) */}
            {glasses && (
              <g stroke="hsl(0 0% 20%)" strokeWidth="1" fill="none">
                <circle cx="-2.5" cy="-20" r="2" />
                <circle cx="2.5" cy="-20" r="2" />
                <line x1="-0.5" y1="-20" x2="0.5" y2="-20" />
              </g>
            )}

            {/* Eyes (default if no glasses) */}
            {!glasses && (
              <>
                <circle cx="-2" cy="-20" r="0.8" fill="hsl(0 0% 20%)" />
                <circle cx="2" cy="-20" r="0.8" fill="hsl(0 0% 20%)" />
              </>
            )}
            {/* Smile */}
            <path d="M-2,-17 Q0,-15 2,-17" stroke="hsl(0 0% 20%)" strokeWidth="0.8" fill="none" />

            {/* Party hat */}
            {partyHat && (
              <>
                <polygon points="-6,-26 6,-26 0,-40" fill="hsl(330 80% 60%)" />
                <circle cx="0" cy="-40" r="1.5" fill="hsl(50 95% 60%)" />
              </>
            )}

            {/* Club badge */}
            {clubBadge && (
              <circle cx="-4" cy="-6" r="2" fill="hsl(50 95% 55%)" stroke="hsl(0 0% 20%)" strokeWidth="0.5" />
            )}

            {/* Dumbbell (exercise) */}
            {dumbbell && (
              <g transform="translate(8, -2)">
                <rect x="-1" y="-1" width="6" height="2" fill="hsl(0 0% 30%)" />
                <rect x="-2" y="-2.5" width="2" height="5" fill="hsl(0 0% 20%)" />
                <rect x="5" y="-2.5" width="2" height="5" fill="hsl(0 0% 20%)" />
              </g>
            )}

            {/* Book (tutor) */}
            {book && (
              <g transform="translate(-10, -2)">
                <rect x="-3" y="-2" width="6" height="5" fill="hsl(0 70% 50%)" />
                <line x1="0" y1="-2" x2="0" y2="3" stroke="hsl(0 0% 100%)" strokeWidth="0.4" />
              </g>
            )}

            {/* Controller (game) */}
            {controller && !book && (
              <g transform="translate(-10, 0)">
                <rect x="-3" y="-1.5" width="6" height="3" rx="1" fill="hsl(220 30% 30%)" />
              </g>
            )}

            {/* Pillow (slack/skip/nothing) */}
            {pillow && (
              <ellipse cx="0" cy="8" rx="9" ry="2" fill="hsl(50 80% 85%)" stroke="hsl(40 40% 60%)" strokeWidth="0.5" />
            )}

            {/* Legs */}
            <line x1="-3" y1="6" x2="-3" y2="12" stroke="hsl(220 50% 30%)" strokeWidth="2" />
            <line x1="3" y1="6" x2="3" y2="12" stroke="hsl(220 50% 30%)" strokeWidth="2" />
          </g>
        </g>
      </svg>

      {/* Progress label */}
      <div className="absolute top-2 left-3 text-xs font-semibold text-foreground/70 bg-background/70 px-2 py-0.5 rounded">
        Quarter {quarter} / {maxQuarters}
      </div>
    </div>
  );
};

export default AvatarHill;
