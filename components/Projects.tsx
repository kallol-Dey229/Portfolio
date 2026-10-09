"use client";
import Image from "next/image";
import { useState, type MouseEvent } from "react";
import { projects, type Project } from "@/data/projects";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const filters = ["All", "Full-stack", "Frontend"] as const;

function Card({ p }: { p: Project }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    el.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 7}deg) rotateX(${(0.5 - y) * 7}deg) translateY(-4px)`;
  };
  const onLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`glass spot group flex h-full flex-col overflow-hidden rounded-3xl ${p.featured ? "lg:flex-row" : ""}`}
    >
      <div className={`relative overflow-hidden ${p.featured ? "h-60 lg:h-auto lg:w-1/2" : "h-48"}`}>
        {p.image ? (
          <Image src={p.image} alt={`${p.name} screenshot`} width={1400} height={800} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center" style={{ background: "linear-gradient(135deg,var(--a),var(--b))", opacity: 0.35 }}>
            <span className="ff-head text-6xl font-bold text-white">{p.name[0]}</span>
          </div>
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg2), transparent 60%)" }} />
        {p.featured && (
          <span className="btn-grad ff-mono absolute left-4 top-4 rounded-full px-3 py-1 text-[10.5px] font-medium uppercase tracking-wider">
            ★ Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="ff-mono c-muted text-[10.5px] uppercase tracking-wider">{p.role} · {p.category}</span>
            <h3 className="ff-head mt-1 text-2xl font-bold">{p.name}</h3>
          </div>
          <div className="flex shrink-0 gap-2">
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} live site`} className="btn-ghost c-muted relative z-10 rounded-full p-2.5">
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} source code`} className="btn-ghost c-muted relative z-10 rounded-full p-2.5">
                <GitHubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="c-muted mt-1 text-sm">{p.tagline}</p>

        <ul className="mt-4 space-y-2">
          {p.description.map((line) => (
            <li key={line} className="c-muted flex gap-2.5 text-[13.5px] leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--b)" }} />
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {p.tech.map((t) => (
            <span key={t} className="ff-mono rounded-full border px-2.5 py-0.5 text-[11px] c-muted" style={{ borderColor: "var(--border)" }}>
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
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Projects" title="Things I've shipped" />
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`ff-mono rounded-full px-4 py-2 text-xs transition-all ${filter === f ? "btn-grad" : "btn-ghost c-muted"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 100} className={p.featured ? "lg:col-span-2" : ""}>
              <Card p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}