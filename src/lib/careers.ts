export interface Career {
  name: string;
  description: string;
}

export const CAREERS: Career[] = [
  { name: "Business Development", description: "Growing organizations through partnerships, sales strategies, and market expansion." },
  { name: "Business Operations", description: "Managing internal workflows, logistics, and performance to maximize efficiency." },
  { name: "Coaching", description: "Guiding individuals or teams to improve skills, performance, and personal growth." },
  { name: "Communications & Media", description: "Producing and managing content to inform, engage, or influence audiences." },
  { name: "Computer Science", description: "Designing algorithms, software, and systems to solve computational problems." },
  { name: "Consulting", description: "Advising organizations by analyzing problems and recommending strategic solutions." },
  { name: "Creative Arts", description: "Expressing ideas and emotion through artistic mediums such as writing, music, or visual art." },
  { name: "Creative Freelance", description: "Independent creative work offering flexible services across artistic or media fields." },
  { name: "Creative Industries", description: "Commercial fields centered on creativity, including design, entertainment, and media." },
  { name: "Data Analysis", description: "Interpreting data to uncover trends, insights, and informed decisions." },
  { name: "Education", description: "Teaching, mentoring, or developing learning systems for knowledge growth." },
  { name: "Education Support", description: "Assisting educational institutions through administration, coordination, or student services." },
  { name: "Emergency Services", description: "Responding to crises to protect life, safety, and property." },
  { name: "Engineering", description: "Applying scientific principles to design, build, and optimize systems or structures." },
  { name: "Entrepreneurship", description: "Creating and growing new ventures by identifying opportunities and taking risks." },
  { name: "Event Management", description: "Planning and coordinating events to ensure smooth execution and engagement." },
  { name: "Fashion", description: "Designing, producing, or marketing clothing and personal style products." },
  { name: "Finance", description: "Managing investments, assets, and financial strategies to maximize value." },
  { name: "Government", description: "Working within public institutions to implement laws, policies, and public services." },
  { name: "Healthcare", description: "Providing medical care, treatment, or support to maintain physical well-being." },
  { name: "Healthcare Administration", description: "Managing healthcare systems, facilities, and operations." },
  { name: "Hospitality", description: "Delivering service experiences in lodging, dining, and guest-focused environments." },
  { name: "Human Resources", description: "Managing recruitment, employee relations, and organizational culture." },
  { name: "Humanities", description: "Studying human culture, history, philosophy, and expression." },
  { name: "Information Technology", description: "Maintaining and supporting computer systems, networks, and infrastructure." },
  { name: "Innovation", description: "Developing new ideas, technologies, or methods to improve existing systems." },
  { name: "Law", description: "Interpreting, applying, and enforcing legal systems and regulations." },
  { name: "Legal & Compliance", description: "Ensuring organizations follow laws, regulations, and ethical standards." },
  { name: "Marketing", description: "Promoting products or services through branding, messaging, and audience engagement." },
  { name: "Media", description: "Creating, distributing, or analyzing information across platforms such as film, news, or digital content." },
  { name: "Mechanics", description: "Repairing and maintaining machines, vehicles, and mechanical systems." },
  { name: "Mental Health", description: "Supporting emotional and psychological well-being through therapy or intervention." },
  { name: "Nonprofit Leadership", description: "Managing mission-driven organizations focused on social impact rather than profit." },
  { name: "Nonprofit & Policy Work", description: "Shaping public policy and social initiatives within nonprofit sectors." },
  { name: "Operations", description: "Coordinating processes and resources to maintain organizational functionality." },
  { name: "Performing Arts", description: "Entertaining or expressing ideas through live or recorded performance." },
  { name: "Philosophy", description: "Exploring fundamental questions about knowledge, ethics, and existence." },
  { name: "Psychology & Counseling", description: "Studying behavior and providing guidance to improve mental health." },
  { name: "Public Administration", description: "Managing public programs and implementing government policies." },
  { name: "Publishing", description: "Producing and distributing written or digital content." },
  { name: "Research & Academia", description: "Advancing knowledge through study, experimentation, and teaching." },
  { name: "Sales", description: "Building relationships to sell products or services and generate revenue." },
  { name: "Scientific Research", description: "Conducting experiments and studies to expand scientific understanding." },
  { name: "Security", description: "Protecting people, information, or property from harm or threats." },
  { name: "Social Media", description: "Creating and managing content for online platforms to engage audiences." },
  { name: "Social Services", description: "Assisting individuals and communities with essential support and resources." },
  { name: "Social Work", description: "Helping individuals overcome challenges and improve quality of life." },
  { name: "Startups", description: "Early-stage companies focused on rapid growth and innovation." },
  { name: "Strategy & Planning", description: "Setting long-term goals and designing pathways to achieve them." },
  { name: "Technical Support", description: "Assisting users with technical issues and system functionality." },
  { name: "Technology", description: "Developing and applying tools and systems that enhance human capability." },
  { name: "Tourism", description: "Managing travel experiences and services for visitors." },
  { name: "Trades", description: "Skilled hands-on professions involving construction, repair, or craftsmanship." },
  { name: "Wellness & Therapy", description: "Promoting physical and emotional health through holistic or therapeutic practices." },
];

export const slugify = (name: string) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const findCareerBySlug = (slug: string): Career | undefined =>
  CAREERS.find((c) => slugify(c.name) === slug);
