import {
  Atom,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Globe,
  Layers3,
  Rocket,
  Sparkles
} from "lucide-react";

export const siteConfig = {
  name: "Habibur Rahman",
  role: "Web Developer",
  location: "Dhaka, Bangladesh",
  email: "habib@habib.ninja",
  tagline: "CSE student building modern web experiences with clean UI and practical frontend craftsmanship.",
  intro:
    "I build responsive, polished web interfaces with a strong focus on clarity, usability, and modern frontend development. As a CSE student, I enjoy turning ideas into fast, interactive products that feel refined and purposeful.",
  socialLinks: [{ label: "GitHub", href: "https://github.com/Habib1ur" }]
};

export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Proof", href: "#proof", id: "proof" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export const metrics = [
  { value: "2+", label: "Years learning and building" },
  { value: "Frontend", label: "Focused on modern UI development" },
  { value: "CSE", label: "Student at North South University" }
];

export const aboutCards = [
  {
    title: "Frontend Focus",
    text: "I enjoy building modern, responsive interfaces that feel clean, smooth, and easy to use.",
    icon: BriefcaseBusiness
  },
  {
    title: "Continuous Learning",
    text: "As a CSE student, I keep sharpening my skills through projects, experimentation, and hands-on problem solving.",
    icon: Sparkles
  },
  {
    title: "Practical Development",
    text: "I care about writing maintainable code and shipping projects that are both visually strong and functional.",
    icon: Code2
  }
];

export const projects = [
  {
    title: "Drawboard",
    description:
      "A powerful digital canvas where ideas come to life, letting users sketch, diagram, and design freely with intuitive tools and a smooth infinite workspace. It supports organizing, editing, and exporting creations in multiple formats.",
    image:
      "/projects/draw.png",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://draw.habib.ninja/",
    codeUrl: "https://github.com/Habib1ur/draw",
    accent: "from-cyan-400/20 to-blue-500/20"
  },
  {
    title: "Truth & Dare",
    description:
      "An online party game where players choose between answering a truth question or completing a fun dare. It makes hangouts more entertaining with easy group play, random prompts, and lively interactions.",
    image:
      "/projects/td.png",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://td.habib.ninja/",
    codeUrl: "https://github.com/Habib1ur/TD",
    accent: "from-fuchsia-400/20 to-cyan-400/20"
  },
  {
    title: "Sharkie",
    description:
      "A browser-based fish game where players collect coins, avoid poison, and battle through the underwater world to defeat the final boss and win.",
    image:
      "/projects/Sharkie.png",
    stack: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://zaman-game.habib.ninja/",
    codeUrl: "https://github.com/Habib1ur/sharkie-zaman-game",
    accent: "from-blue-500/20 to-emerald-400/20"
  }
];

export const journey = [
  {
    year: "2025 - Current",
    title: "BSc in Computer Science and Engineering",
    company: "North South University",
    description:
      "Currently studying CSE while building practical web projects and strengthening my skills in programming, frontend development, and software problem solving."
  },
  {
    year: "2023 - 2024",
    title: "Higher Secondary Certificate",
    company: "Noubahini College",
    description:
      "Completed HSC while continuing to grow an interest in technology, programming, and digital product building."
  },
  {
    year: "2020 - 2022",
    title: "Secondary School Certificate",
    company: "Banani Bidyaniketan",
    description:
      "Completed SSC and built the foundation for my academic path toward computer science and software development."
  }
];

export const techStack = [
  { name: "HTML", icon: Rocket },
  { name: "CSS", icon: Layers3 },
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: Blocks },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind CSS", icon: Sparkles }
];

export const achievements = [
  {
    quote:
      "Habibur shows strong curiosity and consistency. He learns quickly, pays attention to detail, and keeps improving every project he builds.",
    author: "Farhan Ahmed",
    role: "Peer Reviewer"
  },
  {
    quote:
      "His frontend work stands out because he cares about both the visual finish and the logic behind the interface.",
    author: "Nafisa Rahman",
    role: "Teammate"
  },
  {
    quote:
      "Habibur approaches development with patience, discipline, and a clear desire to build better products over time.",
    author: "Samiul Karim",
    role: "Friend & Collaborator"
  }
];

export const contactDetails = {
  heading: "Let's build something modern and meaningful.",
  body:
    "I am always open to discussing new ideas, creative collaborations, and opportunities to build thoughtful web experiences. If you have a project, role, or concept in mind, feel free to reach out.",
  formFields: ["Name", "Email", "Project type", "Tell me about the brief"]
};
