import Image from "next/image";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import Typewriter from "./Typewriter";

const badges = [
  { t: "Next.js", cls: "left-0 top-6", d: "0s" },
  { t: "TypeScript", cls: "-right-4 top-24", d: "0.8s" },
  { t: "MongoDB", cls: "-left-6 bottom-28", d: "1.4s" },
  { t: "PostgreSQL", cls: "right-0 bottom-10", d: "0.4s" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="grid-bg absolute inset-0" />
      <div className="blob -left-24 top-10 h-96 w-96" style={{ background: "var(--a)" }} />
      <div className="blob -right-24 bottom-0 h-96 w-96" style={{ background: "var(--b)", animationDelay: "-5s" }} />
      <div className="blob left-1/2 top-1/3 h-72 w-72" style={{ background: "var(--c)", animationDelay: "-9s", opacity: 0.2 }} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="glass ff-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs c-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: "#34d399" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#34d399" }} />
            </span>
            Open to internships &amp; Junior SWE roles
          </p>

          <h1 className="ff-head mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="grad-text">Kallol Dey</span>
          </h1>
          <p className="ff-head mt-4 text-2xl font-medium sm:text-3xl">
            I build <Typewriter words={["full-stack web apps", "role-based platforms", "payment-ready products", "AI-powered stores"]} />
          </p>
          <p className="c-muted mt-6 max-w-xl text-[17px] leading-relaxed">
            Final-year CSE student in Dhaka, Bangladesh. I turn ideas into production-style platforms with
            React, Next.js, TypeScript, NestJS, PostgreSQL and MongoDB, from schema design to polished UI.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-grad group ff-mono inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium">
              View projects <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/resume.pdf" className="btn-ghost c-text ff-mono inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm">
              Download resume
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { h: "https://github.com/kallol-Dey229", I: GitHubIcon, l: "GitHub" },
              { h: "https://www.linkedin.com/in/kallol-dey067", I: LinkedInIcon, l: "LinkedIn" },
              { h: "mailto:kalloldey067@gmail.com", I: MailIcon, l: "Email" },
            ].map(({ h, I, l }) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className="glass c-muted rounded-full p-3 transition-all hover:-translate-y-1 hover:text-[var(--b)]">
                <I className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-64 sm:w-72">
          <div className="float relative">
            <div className="ring absolute -inset-1.5 rounded-[2rem] opacity-80 blur-sm" />
            <div className="ring absolute -inset-[3px] rounded-[2rem]" />
            <div className="relative overflow-hidden rounded-[1.9rem]" style={{ background: "var(--bg2)" }}>
              <Image src="/images/headshot.jpg" alt="Portrait of Kallol Dey" width={900} height={1200} priority className="h-full w-full object-cover" />
            </div>
          </div>
          {badges.map((b) => (
            <span
              key={b.t}
              className={`glass float ff-mono absolute ${b.cls} rounded-full px-3 py-1.5 text-[11px] shadow-lg`}
              style={{ animationDelay: b.d }}
            >
              {b.t}
            </span>
          ))}
        </div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="flex h-10 w-6 justify-center rounded-full border pt-2" style={{ borderColor: "var(--border)" }}>
          <span className="float h-2 w-1 rounded-full" style={{ background: "var(--b)" }} />
        </span>
      </a>
    </section>
  );
}