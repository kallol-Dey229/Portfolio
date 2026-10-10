import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Kallol Dey — Full-Stack Software Engineer",
  description:
    "Portfolio of Kallol Dey, a final-year CSE student building full-stack web applications with React, Next.js, TypeScript, NestJS, PostgreSQL, and MongoDB.",
  keywords: ["Kallol Dey", "Software Engineer", "Full-Stack Developer", "Next.js", "NestJS", "Portfolio"],
};

const themeScript = `
try {
  var t = localStorage.getItem("theme-v2");
  document.documentElement.setAttribute("data-theme", t === "light" ? "light" : "dark");
} catch (e) {
  document.documentElement.setAttribute("data-theme", "dark");
}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}