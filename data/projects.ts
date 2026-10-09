export type Project = {
  name: string;
  role: "Solo Project" | "Group Project";
  category: "Full-stack" | "Frontend";
  tagline: string;
  description: string[];
  tech: string[];
  image?: string;
  live?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "FitSync",
    role: "Solo Project",
    category: "Full-stack",
    tagline: "Role-based fitness platform with payments",
    description: [
      "Full-stack fitness platform for managing classes and member activity, with separate dashboards for trainers and members.",
      "Class creation, enrollment, and activity tracking, plus Stripe checkout for paid classes.",
      "Forum discussions, comments, and favorites to keep members engaged between sessions.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/images/fitsync.jpg",
    live: "https://fit-sync-gamma-puce.vercel.app",
    github: "https://github.com/kallol-Dey229/fit-sync",
    featured: true,
  },
  {
    name: "Shopora",
    role: "Solo Project",
    category: "Full-stack",
    tagline: "AI-powered smart shopping experience",
    description: [
      "E-commerce storefront with AI-powered product recommendations and a clean, responsive shopping flow.",
      "Wishlist, cart, categories, deals, and order tracking built into the experience.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Express", "MongoDB"], // <- edit to your real stack
    image: "/images/shopora.jpg",
    // live: "https://your-shopora-link.vercel.app",
    // github: "https://github.com/kallol-Dey229/your-repo",
  },
  {
    name: "IdeaVault",
    role: "Solo Project",
    category: "Full-stack",
    tagline: "Community platform for sharing creative ideas",
    description: [
      "A place to post, browse, and discuss creative ideas within a community-driven space.",
      "Full CRUD on ideas plus a commenting system to encourage discussion between users.",
    ],
    tech: ["Next.js", "Express", "MongoDB"],
    image: "/images/ideavault.jpg",
    live: "https://ideavault-using-nextjs-mongodb.vercel.app",
    github: "https://github.com/kallol-Dey229/IdeaVault-using-nextjs-mongodb-express",
  },
  {
    name: "Hireloop",
    role: "Solo Project",
    category: "Full-stack",
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
    category: "Full-stack",
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
    name: "English Janala",
    role: "Solo Project",
    category: "Frontend",
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
    category: "Frontend",
    tagline: "Browse, search, and borrow books online",
    description: [
      "Responsive React app for browsing and borrowing books, built around reusable components.",
      "Focused on a smooth, user-friendly borrowing flow from search to checkout.",
    ],
    tech: ["React", "JavaScript"],
    github: "https://github.com/kallol-Dey229/Book-Vibe-Using-React",
  },
];