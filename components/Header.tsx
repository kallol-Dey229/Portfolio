"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About Me" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#beyond", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-fog">
          Kallol <span className="text-amber">Dey</span>
        </a>

        <nav className="hidden gap-7 font-mono text-[13px] md:flex">
          {links.map((l) => {
            const on = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative py-1 transition-colors hover:text-amber ${on ? "text-amber" : "text-muted"}`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-amber transition-all duration-300 ${
                    on ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="mailto:kalloldey067@gmail.com"
          className="hidden rounded-md border border-line px-4 py-1.5 font-mono text-[13px] text-fog transition-colors hover:border-amber hover:text-amber md:inline-block"
        >
          say hi ↗
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-md border border-line p-2 text-fog md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-line/70 transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-3 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-muted hover:text-amber"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}