import Image from "next/image";
import { ArrowRightIcon } from "./Icons";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
        <div>
          <p className="eyebrow mb-5">Hello, I&apos;m Kallol Dey</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fog sm:text-5xl lg:text-[3.4rem]">
            I build <Typewriter words={["full-stack web apps", "role-based platforms", "payment-ready products", "clean user interfaces"]} />
            <br />
            from schema to UI.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            Final-year CSE student in Dhaka, Bangladesh. I build full-stack web applications with
  React, Next.js, TypeScript, NestJS, PostgreSQL and MongoDB, from schema design to polished UI.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 font-mono text-sm font-medium text-ink shadow-lg shadow-amber/20 transition-all hover:-translate-y-0.5 hover:bg-copper"
            >
              View projects
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm text-fog transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber"
            >
              Download resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            open to Software Engineering internships
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="animate-float relative mx-auto w-56 sm:w-64">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber via-copper to-teal opacity-60 blur-md" />
            <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src="/images/headshot.jpg"
                alt="Portrait of Kallol Dey"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d66706]" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal" />
              <span className="ml-2 font-mono text-[11px] text-muted">My Information</span>
            </div>
            <div className="space-y-2 px-4 py-4 font-mono text-[12.5px] leading-relaxed">
              <p className="text-muted"><span className="text-teal">$</span> Me</p>
              <p className="text-fog">Kallol Dey — Software Engineer</p>
              <p className="text-muted"><span className="text-teal">$</span> Primary Technologies</p>
              <p className="text-fog">Next.js · NestJS · Express · MongoDB</p>
              <p className="text-muted"><span className="text-teal">$</span> Location</p>
              <p className="text-fog">Bashundhara, Dhaka<span className="cursor" /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}