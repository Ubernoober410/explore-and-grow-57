// ─── Types ────────────────────────────────────────────────────────────────────
export type GameStatus =
  | 'playing'
  | 'won'
  | 'academic_disaster'
  | 'social_gone'
  | 'burnout'
  | 'exhaustion';

export type ActionType =
  | 'study'
  | 'chat'
  | 'slack'
  | 'nothing'
  | 'exercise'
  | 'join_club'
  | 'meditate'
  | 'cram'
  | 'party'
  | 'skip_class'
  | 'tutor'
  | 'game';

export interface ActionCounts {
  study: number;
  chat: number;
  slack: number;
  nothing: number;
  exercise: number;
  join_club: number;
  meditate: number;
  cram: number;
  party: number;
  skip_class: number;
  tutor: number;
  game: number;
}

export interface GameState {
  gpa: number;
  social: number;
  stress: number;
  energy: number;
  quarter: number;
  status: GameStatus;
  actionCounts: ActionCounts;
  lastMessage: string;
  lastAction: ActionType | null;
  consecutiveCount: number;
}

export const CONSECUTIVE_LIMIT = 3;

export const INITIAL_STATE: GameState = {
  gpa: 3.0,
  social: 60,
  stress: 30,
  energy: 100,
  quarter: 0,
  status: 'playing',
  actionCounts: {
    study: 0,
    chat: 0,
    slack: 0,
    nothing: 0,
    exercise: 0,
    join_club: 0,
    meditate: 0,
    cram: 0,
    party: 0,
    skip_class: 0,
    tutor: 0,
    game: 0,
  },
  lastMessage: '',
  lastAction: null,
  consecutiveCount: 0,
};

export const MAX_QUARTERS = 16;

// ─── Helpers ──────────────────────────────────────────────────────────────────
const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// ─── Game Logic ───────────────────────────────────────────────────────────────
export const performAction = (state: GameState, action: ActionType): GameState => {
  if (state.status !== 'playing') return state;

  let { gpa, social, stress, energy, quarter, actionCounts } = state;
  let message = '';
  const newCounts = { ...actionCounts, [action]: actionCounts[action] + 1 };

  switch (action) {
    case 'study': {
      const gpaGain = rand(0.03, 0.06);
      const socialLoss = randInt(2, 6);
      energy -= 4;
      gpa += gpaGain;
      social -= socialLoss;
      message = `You hit the books. GPA +${gpaGain.toFixed(2)}, Social -${socialLoss}.`;
      break;
    }
    case 'chat': {
      const socialGain = randInt(3, 6);
      const gpaLoss = rand(0.02, 0.05);
      energy -= 3;
      social += socialGain;
      gpa -= gpaLoss;
      message = `You hang out with friends. Social +${socialGain}, GPA -${gpaLoss.toFixed(2)}.`;
      break;
    }
    case 'slack': {
      const stressDrop = randInt(10, 18);
      const gpaLoss = rand(0.03, 0.06);
      const socialLoss = randInt(2, 5);
      energy -= 10;
      stress -= stressDrop;
      gpa -= gpaLoss;
      social -= socialLoss;
      message = `You slack off. Stress -${stressDrop}, GPA -${gpaLoss.toFixed(2)}.`;
      break;
    }
    case 'nothing': {
      const gpaLoss = rand(0.02, 0.05);
      const socialLoss = randInt(2, 5);
      const stressGain = randInt(2, 5);
      gpa -= gpaLoss;
      social -= socialLoss;
      stress += stressGain;
      message = `You sit there doing nothing. Everything slowly gets worse.`;
      break;
    }
    case 'exercise': {
      const stressDrop = randInt(8, 14);
      const energyGain = randInt(5, 12);
      const socialGain = randInt(1, 3);
      energy -= 5;
      stress -= stressDrop;
      energy = Math.min(100, energy + energyGain);
      social += socialGain;
      message = `You hit the gym! Stress -${stressDrop}, Energy +${energyGain}, Social +${socialGain}.`;
      break;
    }
    case 'join_club': {
      const socialGain = randInt(6, 12);
      const gpaGain = rand(0.01, 0.03);
      energy -= 5;
      social += socialGain;
      gpa += gpaGain;
      stress += randInt(1, 3);
      message = `You join a school club! Social +${socialGain}, GPA +${gpaGain.toFixed(2)}.`;
      break;
    }
    case 'meditate': {
      const stressDrop = randInt(12, 20);
      const energyGain = randInt(3, 8);
      energy -= 2;
      stress -= stressDrop;
      energy = Math.min(100, energy + energyGain);
      message = `You meditate and find your center. Stress -${stressDrop}, Energy +${energyGain}.`;
      break;
    }
    case 'cram': {
      const gpaGain = rand(0.08, 0.14);
      const stressGain = randInt(8, 15);
      energy -= 12;
      gpa += gpaGain;
      stress += stressGain;
      message = `All-night cram session! GPA +${gpaGain.toFixed(2)}, but Stress +${stressGain}.`;
      break;
    }
    case 'party': {
      const socialGain = randInt(8, 15);
      const gpaLoss = rand(0.04, 0.08);
      const stressDrop = randInt(5, 10);
      energy -= 15;
      social += socialGain;
      gpa -= gpaLoss;
      stress -= stressDrop;
      message = `You go to a party! Social +${socialGain}, Stress -${stressDrop}, GPA -${gpaLoss.toFixed(2)}.`;
      break;
    }
    case 'skip_class': {
      const energyGain = randInt(15, 25);
      const gpaLoss = rand(0.05, 0.1);
      energy = Math.min(100, energy + energyGain);
      gpa -= gpaLoss;
      stress -= randInt(3, 7);
      message = `You skip class and rest. Energy +${energyGain}, GPA -${gpaLoss.toFixed(2)}.`;
      break;
    }
    case 'tutor': {
      const gpaGain = rand(0.02, 0.04);
      const socialGain = randInt(2, 5);
      const stressDrop = randInt(3, 7);
      energy -= 3;
      gpa += gpaGain;
      social += socialGain;
      stress -= stressDrop;
      message = `You tutor a classmate. GPA +${gpaGain.toFixed(2)}, Social +${socialGain}, Stress -${stressDrop}.`;
      break;
    }
    case 'game': {
      const stressDrop = randInt(6, 12);
      const energyGain = randInt(2, 6);
      const gpaLoss = rand(0.01, 0.04);
      const socialLoss = randInt(1, 3);
      energy -= 2;
      stress -= stressDrop;
      energy = Math.min(100, energy + energyGain);
      gpa -= gpaLoss;
      social -= socialLoss;
      message = `You play games to unwind. Stress -${stressDrop}, Energy +${energyGain}.`;
      break;
    }
  }

  // End-of-turn effects
  quarter += 1;
  stress += randInt(1, 4);
  const decay = stress / 100;
  const gpaLoss = rand(0, 0.02) * (1 + decay);
  const socialLoss = randInt(0, 1) * (1 + decay);
  gpa -= gpaLoss;
  social -= Math.floor(socialLoss);

  // Clamp
  gpa = Math.max(0, Math.min(4.0, gpa));
  social = Math.max(0, Math.min(100, social));
  stress = Math.max(0, Math.min(100, stress));
  energy = Math.max(0, Math.min(100, energy));

  // End conditions
  let status: GameStatus = 'playing';
  if (gpa <= 0) status = 'academic_disaster';
  else if (social <= 0) status = 'social_gone';
  else if (stress >= 100) status = 'burnout';
  else if (energy <= 0) status = 'exhaustion';
  else if (quarter >= MAX_QUARTERS) status = 'won';

  return {
    gpa,
    social,
    stress,
    energy,
    quarter,
    status,
    actionCounts: newCounts,
    lastMessage: message,
    lastAction: action,
    consecutiveCount: state.lastAction === action ? state.consecutiveCount + 1 : 1,
  };
};

export const getStatusMessage = (
  status: GameStatus
): { title: string; desc: string } => {
  switch (status) {
    case 'won':
      return {
        title: '🎓 You Graduated!',
        desc: 'You made it through all 16 quarters. Now let\'s see what kind of student you were...',
      };
    case 'academic_disaster':
      return {
        title: '📉 Academic Disaster',
        desc: 'Your GPA hit zero. You\'ve been academically dismissed.',
      };
    case 'social_gone':
      return {
        title: '😔 Total Isolation',
        desc: 'Your social life vanished. You feel completely alone.',
      };
    case 'burnout':
      return {
        title: '🔥 Burnout',
        desc: 'Stress maxed out. You can\'t continue like this.',
      };
    case 'exhaustion':
      return {
        title: '😴 Exhausted',
        desc: 'You ran out of energy completely. Time to rest.',
      };
    default:
      return { title: 'Playing', desc: '' };
  }
};

// ─── Personality System ──────────────────────────────────────────────────────
export interface PersonalityResult {
  type: string;
  emoji: string;
  tagline: string;
  description: string;
  traits: string[];
  careers: string[];
}

export function derivePersonality(counts: ActionCounts): PersonalityResult {
  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;

  const academic = (counts.study + counts.cram + counts.tutor) / total;
  const social = (counts.chat + counts.join_club + counts.party) / total;
  const wellness = (counts.meditate + counts.exercise) / total;
  const escapist =
    (counts.slack + counts.game + counts.nothing + counts.skip_class) / total;

  const scores: [string, number][] = [
    ['scholar', academic * 2 - social],
    ['social_butterfly', social * 2 - academic],
    ['athlete', (counts.exercise / total) * 3],
    ['zen_master', wellness * 2.5 + counts.meditate / total],
    ['party_animal', (counts.party / total) * 4 + social],
    ['overachiever', (counts.cram / total) * 4 + academic],
    ['rebel', (counts.skip_class / total) * 4 + escapist],
    ['helper', (counts.tutor / total) * 4],
    ['gamer', (counts.game / total) * 4],
    ['balanced', 1 - Math.max(academic, social, wellness, escapist)],
  ];

  scores.sort((a, b) => b[1] - a[1]);
  const top = scores[0][0];

  const profiles: Record<string, PersonalityResult> = {
    scholar: {
      type: 'The Scholar',
      emoji: '📚',
      tagline: 'Knowledge is power.',
      description:
        'You spent your school days buried in books. You crave depth, mastery, and intellectual achievement above all else.',
      traits: ['Analytical', 'Dedicated', 'Introverted', 'Goal-oriented'],
      careers: ['Researcher', 'Professor', 'Data Scientist', 'Engineer'],
    },
    social_butterfly: {
      type: 'The Social Butterfly',
      emoji: '🦋',
      tagline: 'Life is better with people.',
      description:
        'You thrived on connection. Your school life was all about friendships, conversations, and being part of the community.',
      traits: ['Extraverted', 'Charming', 'Empathetic', 'Spontaneous'],
      careers: ['Marketing', 'Public Relations', 'HR', 'Sales'],
    },
    athlete: {
      type: 'The Athlete',
      emoji: '🏃',
      tagline: 'Strong body, strong mind.',
      description:
        'The gym was your second classroom. You deal with stress through movement and push your physical limits to stay sharp.',
      traits: ['Disciplined', 'Resilient', 'Competitive', 'Health-conscious'],
      careers: ['Coach', 'Physical Therapist', 'Sports Manager', 'Trainer'],
    },
    zen_master: {
      type: 'The Zen Master',
      emoji: '🧘',
      tagline: 'Peace is the ultimate achievement.',
      description:
        'You mastered inner balance. While others burned out, you stayed calm — your self-awareness is your greatest strength.',
      traits: ['Mindful', 'Reflective', 'Patient', 'Introverted'],
      careers: ['Therapist', 'Counselor', 'Yoga Instructor', 'Writer'],
    },
    party_animal: {
      type: 'The Party Animal',
      emoji: '🎉',
      tagline: 'You only live once!',
      description:
        "School was a social playground to you. You lived for the highs, the gatherings, and the stories you'll tell forever.",
      traits: ['Extraverted', 'Impulsive', 'Fun-loving', 'Risk-taker'],
      careers: ['Event Planner', 'Hospitality', 'Entertainment', 'Bartender'],
    },
    overachiever: {
      type: 'The Overachiever',
      emoji: '🏆',
      tagline: "Sleep when the semester's over.",
      description:
        "You refused to settle. Cram sessions, late nights, maximum output — you'll do whatever it takes to reach the top.",
      traits: ['Ambitious', 'Perfectionist', 'Driven', 'Type-A'],
      careers: ['Investment Banker', 'Lawyer', 'Surgeon', 'Executive'],
    },
    rebel: {
      type: 'The Rebel',
      emoji: '😎',
      tagline: 'Rules are just suggestions.',
      description:
        'You played by your own rules. Skipping class, doing things your way — you survived not by the book, but by instinct.',
      traits: ['Independent', 'Unconventional', 'Bold', 'Creative'],
      careers: ['Entrepreneur', 'Artist', 'Filmmaker', 'Journalist'],
    },
    helper: {
      type: 'The Helper',
      emoji: '🤝',
      tagline: 'Lift others as you climb.',
      description:
        'You found purpose in helping others succeed. Tutoring and supporting peers gave you fulfillment beyond grades.',
      traits: ['Empathetic', 'Patient', 'Generous', 'Collaborative'],
      careers: ['Teacher', 'Social Worker', 'Nurse', 'Nonprofit Leader'],
    },
    gamer: {
      type: 'The Gamer',
      emoji: '🎮',
      tagline: 'Life is the ultimate game.',
      description:
        'Strategy, escape, mastery — you found your zone in games. You think in systems and love optimizing every move.',
      traits: ['Strategic', 'Focused', 'Creative', 'Tech-savvy'],
      careers: ['Software Developer', 'Game Designer', 'UX Designer', 'Streamer'],
    },
    balanced: {
      type: 'The Balanced One',
      emoji: '⚖️',
      tagline: 'Everything in moderation.',
      description:
        "You didn't lock yourself into one path. You sampled a bit of everything and built a well-rounded life.",
      traits: ['Adaptable', 'Open-minded', 'Steady', 'Versatile'],
      careers: ['Consultant', 'Product Manager', 'Generalist', 'Journalist'],
    },
  };

  return profiles[top] || profiles.balanced;
}
