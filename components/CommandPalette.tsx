"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";

type Item = { label: string; hint: string; run: () => void };

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const open = (url: string) => window.open(url, "_blank");

export default function CommandPalette() {
  const [show, setShow] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items: Item[] = useMemo(
    () => [
      { label: "Go to Home", hint: "Section", run: () => go("top") },
      { label: "Go to About", hint: "Section", run: () => go("about") },
      { label: "Go to Stack", hint: "Section", run: () => go("stack") },
      { label: "Go to Projects", hint: "Section", run: () => go("projects") },
      { label: "Go to Terminal", hint: "Section", run: () => go("terminal") },
      { label: "Go to GitHub activity", hint: "Section", run: () => go("github") },
      { label: "Go to Education", hint: "Section", run: () => go("education") },
      { label: "Go to Hobbies", hint: "Section", run: () => go("beyond") },
      { label: "Go to Contact", hint: "Section", run: () => go("contact") },
      { label: "Toggle light / dark theme", hint: "Action", run: () => window.dispatchEvent(new Event("toggle-theme")) },
      { label: "Download resume", hint: "Action", run: () => open("/resume.pdf") },
      { label: "Send me an email", hint: "Action", run: () => (window.location.href = "mailto:kalloldey067@gmail.com") },
      { label: "Open GitHub profile", hint: "Link", run: () => open("https://github.com/kallol-Dey229") },
      { label: "Open LinkedIn profile", hint: "Link", run: () => open("https://www.linkedin.com/in/kallol-dey067") },
      ...projects
        .filter((p) => p.live)
        .map((p) => ({ label: `Open ${p.name} (live site)`, hint: "Project", run: () => open(p.live!) })),
    ],
    []
  );

  const results = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  const close = () => {
    setShow(false);
    setQ("");
    setIdx(0);
  };

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShow((s) => !s);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (show) inputRef.current?.focus();
  }, [show]);

  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [idx]);

  const choose = (i: Item | undefined) => {
    if (!i) return;
    close();
    setTimeout(i.run, 80);
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        aria-label="Open quick menu"
        className="glass ff-mono c-muted fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full px-4 py-2.5 text-xs transition-all hover:-translate-y-1 hover:text-[var(--b)]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span>Quick menu</span>
        <kbd className="hidden rounded border px-1.5 py-0.5 text-[10px] md:inline" style={{ borderColor: "var(--border)" }}>
          Ctrl K
        </kbd>
      </button>

      {show && (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/50 px-4 pt-[14vh] backdrop-blur-sm"
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
            style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text)" }}
          >
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setIdx(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setIdx((n) => Math.min(n + 1, results.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setIdx((n) => Math.max(n - 1, 0));
                } else if (e.key === "Enter") {
                  choose(results[idx]);
                }
              }}
              placeholder="Type a command or search..."
              className="ff-mono w-full bg-transparent px-5 py-4 text-sm outline-none"
              style={{ borderBottom: "1px solid var(--border)" }}
            />
            <div ref={listRef} className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && <p className="c-muted px-4 py-6 text-center text-sm">No results</p>}
              {results.map((r, i) => (
                <button
                  key={r.label}
                  data-active={i === idx}
                  onMouseEnter={() => setIdx(i)}
                  onClick={() => choose(r)}
                  className="ff-mono flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-[13px] transition-colors"
                  style={i === idx ? { background: "linear-gradient(120deg,var(--a),var(--b))", color: "#fff" } : {}}
                >
                  {r.label}
                  <span className="text-[10px] uppercase tracking-wider opacity-70">{r.hint}</span>
                </button>
              ))}
            </div>
            <div className="ff-mono c-muted flex gap-4 px-5 py-2.5 text-[10.5px]" style={{ borderTop: "1px solid var(--border)" }}>
              <span>↑↓ navigate</span>
              <span>Enter select</span>
              <span>Esc close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}