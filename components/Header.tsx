"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#beyond", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
        try {
      const saved = localStorage.getItem("theme-v2");
      const mode = saved === "light" ? "light" : "dark";
      setTheme(mode);
      document.documentElement.dataset.theme = mode;
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme-v2", next); } catch {}
  };

  return (
    <header className="fixed left-0 top-4 z-50 w-full px-4">
      <div className="glass mx-auto flex max-w-4xl items-center justify-between rounded-full px-5 py-2.5 shadow-xl shadow-black/20">
        <a href="#top" className="ff-head text-lg font-bold">
          K<span className="grad-text">D</span>
        </a>

        <nav className="ff-mono hidden gap-1 text-[12.5px] md:flex">
          {links.map((l) => {
            const on = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 transition-all"
                style={on ? { background: "linear-gradient(120deg,var(--a),var(--b))", color: "#fff" } : { color: "var(--muted)" }}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className="btn-ghost c-text rounded-full p-2">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
              {theme === "dark" ? (
                <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
              ) : (
                <path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10Z" />
              )}
            </svg>
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="btn-ghost c-text rounded-full p-2 md:hidden">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div className={`glass mx-auto mt-2 max-w-4xl overflow-hidden rounded-2xl transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 border-0 opacity-0"}`}>
        <nav className="ff-mono flex flex-col px-5 py-3 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="c-muted py-2.5 hover:text-[var(--b)]">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}