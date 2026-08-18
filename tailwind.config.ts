import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E14",
        surface: "#10151F",
        surface2: "#161C29",
        line: "#232A38",
        muted: "#8B93A7",
        fog: "#E7E9EE",
        amber: "#E8A33D",
        copper: "#C9793A",
        teal: "#57D6C6",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #171d2b 1px, transparent 1px), linear-gradient(to bottom, #171d2b 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
