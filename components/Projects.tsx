import { projects } from "@/data/projects";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-4">Projects</p>
        <h2 className="font-display text-2xl font-semibold text-fog sm:text-3xl">
          Things I&apos;ve shipped
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          A handful of solo, production-style builds — each one covers the full stack,
          from schema to UI.
        </p>

        {/* Featured project */}
        <div className="card-hover mt-10 rounded-xl border border-line bg-surface p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wide text-amber">
                Featured · {featured.role}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-fog">
                {featured.name}
              </h3>
              <p className="mt-1 text-muted">{featured.tagline}</p>
            </div>
            <div className="flex gap-3">
              {featured.live && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-amber px-4 py-2 font-mono text-xs font-medium text-ink hover:bg-copper"
                >
                  Live site <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              )}
              <a
                href={featured.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2 font-mono text-xs text-fog hover:border-amber hover:text-amber"
              >
                <GitHubIcon className="h-3.5 w-3.5" /> Code
              </a>
            </div>
          </div>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {featured.description.map((line) => (
              <li key={line} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11.5px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Rest of the grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <div
              key={p.name}
              className="card-hover flex flex-col rounded-xl border border-line bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[10.5px] uppercase tracking-wide text-muted">
                    {p.role}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-fog">
                    {p.name}
                  </h3>
                </div>
                <div className="flex shrink-0 gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} live site`}
                      className="rounded-md border border-line p-2 text-muted hover:border-amber hover:text-amber"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} source code`}
                    className="rounded-md border border-line p-2 text-muted hover:border-amber hover:text-amber"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-1 text-sm text-muted">{p.tagline}</p>

              <ul className="mt-4 space-y-1.5">
                {p.description.map((line) => (
                  <li key={line} className="flex gap-2 text-[13.5px] leading-relaxed text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}
