export type Project = {
  name: string;
  role: "Solo Project" | "Group Project";
  tagline: string;
  description: string[];
  tech: string[];
  live?: string;
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "FitSync",
    role: "Solo Project",
    tagline: "Role-based fitness platform with payments",
    description: [
      "Full-stack fitness platform for managing classes and member activity, with separate dashboards for trainers and members.",
      "Class creation, enrollment, and activity tracking, plus Stripe checkout for paid classes.",
      "Forum discussions, comments, and favorites to keep members engaged between sessions.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe"],
    live: "https://fit-sync-gamma-puce.vercel.app",
    github: "https://github.com/kallol-Dey229/fit-sync",
    featured: true,
  },
  {
    name: "Hireloop",
    role: "Solo Project",
    tagline: "Recruitment platform for recruiters & candidates",
    description: [
      "Role-based hiring platform connecting recruiters and candidates through tailored workflows and permissions.",
      "RESTful API layer in Express architected for structured, scalable data handling in MongoDB.",
    ],
    tech: ["Next.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/kallol-Dey229/hireloop",
  },
  {
    name: "Wanderlast",
    role: "Solo Project",
    tagline: "Travel discovery app with JWT auth",
    description: [
      "Full-stack travel discovery app with destination cards and detail pages.",
      "Component-driven Next.js front end talking to an Express/MongoDB API, secured with JWT authentication.",
    ],
    tech: ["Next.js", "Express", "MongoDB", "JWT"],
    live: "https://wanderlast-client-coral.vercel.app",
    github: "https://github.com/kallol-Dey229/wanderlast-client",
  },
  {
    name: "IdeaVault",
    role: "Solo Project",
    tagline: "Community platform for sharing creative ideas",
    description: [
      "A place to post, browse, and discuss creative ideas within a community-driven space.",
      "Full CRUD on ideas plus a commenting system to encourage discussion between users.",
    ],
    tech: ["Next.js", "Express", "MongoDB"],
    live: "https://ideavault-using-nextjs-mongodb.vercel.app",
    github: "https://github.com/kallol-Dey229/IdeaVault-using-nextjs-mongodb-express",
  },
  {
    name: "English Janala",
    role: "Solo Project",
    tagline: "Interactive vocabulary learning tool",
    description: [
      "Vocabulary learning platform where users explore words, meanings, and synonyms.",
      "Pulls live word data from a third-party REST API into a fast, DaisyUI-styled interface.",
    ],
    tech: ["JavaScript (ES6)", "Tailwind CSS", "DaisyUI", "REST API"],
    github: "https://github.com/kallol-Dey229/English-Janala",
  },
  {
    name: "BookVibe",
    role: "Solo Project",
    tagline: "Browse, search, and borrow books online",
    description: [
      "Responsive React app for browsing and borrowing books, built around reusable components.",
      "Focused on a smooth, user-friendly borrowing flow from search to checkout.",
    ],
    tech: ["React", "JavaScript"],
    github: "https://github.com/kallol-Dey229/Book-Vibe-Using-React",
  },
];
