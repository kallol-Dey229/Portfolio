"use client";
import Image from "next/image";
import { useState, type MouseEvent } from "react";
import { projects, type Project } from "@/data/projects";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";
import Reveal from "./Reveal";

const filters = ["All", "Full-stack", "Frontend"] as const;

function ProjectCard({ p }: { p: Project }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className={`spotlight card-hover group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface ${
        p.featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      {/* image / placeholder */}
      <div
        className={`relative overflow-hidden ${
          p.featured ? "h-56 lg:h-auto lg:w-[45%]" : "h-48"
        }`}
      >
        {p.image ? (
          <Image
            src={p.image}
            alt={`${p.name} screenshot`}
            width={1400}
            height={800}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber/20 via-surface to-teal/20">
            <span className="font-display text-5xl font-semibold text-fog/70">{p.name[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
        {p.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-amber px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wide text-ink">
            Featured
          </span>
        )}
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-muted">
              {p.role} · {p.category}
            </span>
            <h3 className="mt-1 font-display text-xl font-semibold text-fog">{p.name}</h3>
          </div>
          <div className="flex shrink-0 gap-2">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} live site`}
                className="relative z-10 rounded-md border border-line p-2 text-muted transition-colors hover:border-amber hover:text-amber"
              >
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} source code`}
                className="relative z-10 rounded-md border border-line p-2 text-muted transition-colors hover:border-amber hover:text-amber"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-1 text-sm text-muted">{p.tagline}</p>

        <ul className="mt-4 space-y-1.5">
          {p.description.map((line) => (
            <li key={line} className="flex gap-2 text-[13.5px] leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="eyebrow mb-4">Projects</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-fog sm:text-3xl">
                Things I&apos;ve shipped
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                A handful of solo, production-style builds, each one covering the full stack,
                from schema to UI.
              </p>
            </div>

            <div className="flex gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all ${
                    filter === f
                      ? "border-amber bg-amber text-ink"
                      : "border-line text-muted hover:border-amber hover:text-amber"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 100} className={p.featured ? "lg:col-span-2" : ""}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}