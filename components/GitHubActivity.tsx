"use client";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import { GitHubIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const USER = "kallol-Dey229";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
};
type Profile = { public_repos: number; followers: number; following: number };

const LANG: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C#": "#178600",
  "C++": "#f34b7d",
  Python: "#3572a5",
};

function ago(d: string) {
  const days = Math.floor((Date.now() - new Date(d).getTime()) / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const m = Math.floor(days / 30);
  return m < 12 ? `${m}mo ago` : `${Math.floor(m / 12)}y ago`;
}

export default function GitHubActivity() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");
  const [chartOk, setChartOk] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    Promise.all([
      fetch(`https://api.github.com/users/${USER}`, { signal: ctrl.signal }),
      fetch(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=30`, { signal: ctrl.signal }),
    ])
      .then(async ([u, r]) => {
        if (!u.ok || !r.ok) throw new Error("GitHub API error");
        setProfile(await u.json());
        const all: Repo[] = await r.json();
        setRepos(all.filter((x) => !x.fork).slice(0, 6));
        setStatus("ok");
      })
      .catch((e) => {
        if (e.name !== "AbortError") setStatus("error");
      });
    return () => ctrl.abort();
  }, []);

  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Open source" title="Live from GitHub" />
          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost c-text ff-mono inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs"
          >
            <GitHubIcon className="h-4 w-4" /> @{USER}
          </a>
        </div>

        {status === "loading" && (
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="glass h-28 animate-pulse rounded-3xl" />
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="glass c-muted mt-12 rounded-3xl p-8 text-center text-sm">
            Couldn&apos;t load GitHub data right now. You can view everything directly on{" "}
            <a className="underline" style={{ color: "var(--b)" }} href={`https://github.com/${USER}`} target="_blank" rel="noreferrer">
              my GitHub profile
            </a>
            .
          </p>
        )}

        {status === "ok" && profile && (
          <>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                { v: profile.public_repos, l: "Public repositories" },
                { v: profile.followers, l: "Followers" },
                { v: profile.following, l: "Following" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={i * 100}>
                  <div className="glass rounded-3xl p-6">
                    <p className="ff-head grad-text text-4xl font-bold">
                      <Counter to={s.v} />
                    </p>
                    <p className="ff-mono c-muted mt-1 text-[11px] uppercase tracking-wider">{s.l}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {chartOk && (
              <Reveal>
                <div className="glass mt-5 overflow-x-auto rounded-3xl p-6">
                  <p className="ff-mono c-muted mb-3 text-[11px] uppercase tracking-wider">Contribution graph</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://ghchart.rshah.org/8b5cf6/${USER}`}
                    alt="GitHub contribution graph"
                    onError={() => setChartOk(false)}
                    className="min-w-[640px]"
                  />
                </div>
              </Reveal>
            )}

            <p className="ff-mono c-muted mb-4 mt-10 text-[11px] uppercase tracking-wider">Recently updated</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((r, i) => (
                <Reveal key={r.id} delay={(i % 3) * 100}>
                  <a
                    href={r.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="glass spot flex h-full flex-col rounded-3xl p-6"
                    onMouseMove={(e) => {
                      const b = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty("--mx", `${e.clientX - b.left}px`);
                      e.currentTarget.style.setProperty("--my", `${e.clientY - b.top}px`);
                    }}
                  >
                    <h3 className="ff-head text-lg font-semibold">{r.name}</h3>
                    <p className="c-muted mt-2 flex-1 text-sm leading-relaxed">
                      {r.description ?? "No description yet."}
                    </p>
                    <div className="ff-mono c-muted mt-5 flex items-center gap-4 text-[11.5px]">
                      {r.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: LANG[r.language] ?? "var(--b)" }} />
                          {r.language}
                        </span>
                      )}
                      <span>★ {r.stargazers_count}</span>
                      <span className="ml-auto">{ago(r.pushed_at)}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}