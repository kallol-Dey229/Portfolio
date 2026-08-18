import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kallol Dey — Full-Stack Software Engineer",
  description:
    "Portfolio of Kallol Dey, a full-stack software engineer building role-based, production-style web applications with Next.js, NestJS, Express, and MongoDB.",
  keywords: [
    "Kallol Dey",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-ink text-fog antialiased">{children}</body>
    </html>
  );
}
