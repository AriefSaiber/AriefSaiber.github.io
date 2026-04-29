import nusfaBanner from "../assets/nusfa_banner.png";
import nuboxBanner from "../assets/nubox_banner.png";
import easysuriBanner from "../assets/easysuri_banner.png";
import guidewireBanner from "../assets/guidewire_banner.png";
import portfolioBanner from "../assets/portfolio_banner.jpg";

export type ProjectCategory = "Web" | "Mobile" | "Web + Mobile";

export type ProjectMessage = {
  title: string;
  type: string;
  category: ProjectCategory;
  summary: string;
  tech: string[];
  impact: string;
  gradient: "gradA" | "gradB" | "gradC" | "gradD" | "gradE" | "gradF";
  url?: string;
  image?: string;
};

export type SkillMessage = {
  name: string;
  level: number;
  iconKey: "globe" | "smartphone" | "zap" | "layers" | "database" | "brush";
};

export const projectSectionMessages = {
  eyebrow: "Project Gallery",
  title: "Interactive work that feels premium and performs fast.",
  description:
    "A curated selection of web and mobile projects showing UI polish, strong architecture, and product-focused development.",
  tabs: ["All", "Web", "Mobile", "Web + Mobile"] as const,
};

export const projectsMessages: ProjectMessage[] = [
  {
    title: "Guidewire Portal Applications",
    type: "React",
    category: "Web",
    summary:
      "Online insurance platforms that let customers, agents, or partners easily manage policies, claims, payments, and insurance services through a web portal. Clients are US side",
    tech: ["React", "Guidewire", "REST API"],
    impact: "Classified clients",
    gradient: "gradA",
    url: "https://www.guidewire.com/",
    image: guidewireBanner,
  },
  {
    title: "EasySuri",
    type: "Flutter",
    category: "Mobile",
    summary:
      "An Islamic menstrual tracking app helps Muslim women record their cycle and determine prayer, fasting, and purification guidance based on Islamic rulings.",
    tech: ["Flutter", "Firebase", "GetX", "Cloud Firestore"],
    impact: "Islamic menstrual tracker",
    gradient: "gradB",
    url: "https://play.google.com/store/apps/details?id=com.aryuu.easysuri",
    image: easysuriBanner,
  },
  {
    title: "Nubox+",
    type: "Flutter",
    category: "Mobile",
    summary:
      "A mobile app for remotely managing vending machines helps operators monitor sales, stock levels, machine status, and maintenance needs from anywhere.",
    tech: ["Flutter", "Firebase", "GetX", "MySQL", "PHP"],
    impact: "Vending Machine Management App",
    gradient: "gradC",
    url: "https://play.google.com/store/apps/details?id=com.nuvendingtech.NuApp",
    image: nuboxBanner,
  },
  {
    title: "Nu Vending SFA",
    type: "Flutter",
    category: "Mobile",
    summary:
      "A mobile app for submitting issue tickets helps employees report complaints, requests, or internal needs so the company can track, manage, and resolve them efficiently.",
    tech: ["Flutter", "Firebase", "GetX", "MySQL", "PHP"],
    impact: "Ticket submission app",
    gradient: "gradD",
    url: "https://play.google.com/store/apps/details?id=com.sfaapp.issue",
    image: nusfaBanner,
  },
  {
    title: "Arief Old Portfolio",
    type: "React",
    category: "Web",
    summary:
      "Old version of my portfolio website built with React, showcasing projects and skills with a focus on clean design and responsive layout.",
    tech: ["React", "TypeScript"],
    impact: "Portfolio",
    gradient: "gradE",
    url: "https://main--majestic-squirrel-61c473.netlify.app/",
    image: portfolioBanner,
  },
];

export const skillSectionMessages = {
  eyebrow: "Skills",
  title: "A full-stack mindset for web and mobile product delivery.",
  description:
    "From UI engineering to app architecture, I combine modern tools with practical product thinking.",
  selectedSkillLabel: "Selected skill",
  confidenceLabel: "Confidence",
  skillHelperText: "Tap to preview skill strength",
  panelDescription:
    "I focus on clean component structures, reusable patterns, readable code, and interfaces that are easy for real users to understand.",
};

export const skillsMessages: SkillMessage[] = [
  { name: "Flutter", level: 92, iconKey: "smartphone" },
  { name: "React", level: 82, iconKey: "globe" },
  { name: "Firebase", level: 86, iconKey: "zap" },
  { name: "REST API", level: 84, iconKey: "layers" },
  { name: "Database Design", level: 78, iconKey: "database" },
  { name: "UI/UX", level: 82, iconKey: "brush" },
];
