"use client";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Line = { kind: "in" | "out"; text: string };

const COMMANDS = [
  "help", "about", "skills", "projects", "education", "contact",
  "resume", "github", "theme", "whoami", "ls", "hire", "clear",
];

const BOOT: Line[] = [
  { kind: "out", text: "Welcome to Kallol's portfolio terminal v1.0" },
  { kind: "out", text: "Type 'help' to see what you can do, or tap a command below." },
  { kind: "out", text: "" },
];

function run(raw: string): string[] | "clear" {
  const [cmd = "", ...args] = raw.trim().split(/\s+/);
  const arg = args.join(" ").toLowerCase();

  switch (cmd.toLowerCase()) {
    case "":
      return [];
    case "help":
      return [
        "Available commands:",
        "  about          who I am",
        "  skills         my tech stack",
        "  projects       everything I've built",
        "  project <name> details, e.g. project shopora",
        "  education      studies and certifications",
        "  contact        how to reach me",
        "  resume         open my CV",
        "  github         open my GitHub profile",
        "  theme          switch light / dark",
        "  hire           start an email to me",
        "  clear          clear the screen",
      ];
    case "about":
    case "whoami":
      return [
        "Kallol Dey — Full-Stack Software Engineer",
        "Final-year CSE student at AIUB, Dhaka, Bangladesh.",
        "I build role-based, production-style web apps with",
        "React, Next.js, TypeScript, NestJS, PostgreSQL and MongoDB.",
        "Currently open to internships & Junior SWE roles.",
      ];
    case "skills":
      return skillGroups.map((g) => `${g.label.padEnd(20)}: ${g.items.join(", ")}`);
    case "ls":
      return ["about/  skills/  projects/  education/  hobbies/  contact/  resume.pdf"];
    case "projects":
    case "project": {
      if (!arg) {
        return [
          ...projects.map(
            (p, i) => `${String(i + 1).padStart(2, "0")}  ${p.name.padEnd(16)} ${p.tagline}`
          ),
          "",
          "Tip: type 'project <name>' for details, e.g. project shopora",
        ];
      }
      const p = projects.find((x) => x.name.toLowerCase().includes(arg));
      if (!p) return [`No project matching "${arg}". Try: ${projects.map((x) => x.name).join(", ")}`];
      return [
        `${p.name}  (${p.role})`,
        p.tagline,
        "",
        ...p.description.map((d) => `• ${d}`),
        "",
        `Stack : ${p.tech.join(", ")}`,
        ...(p.live ? [`Live  : ${p.live}`] : []),
        ...(p.github ? [`Code  : ${p.github}`] : []),
      ];
    }
    case "education":
      return [
        "2023 - 2027 (Expected)  B.Sc. in CSE, AIUB            CGPA 3.67",
        "2026                    Complete Web Development Course, Programming Hero",
        "2018 - 2020             HSC, Science                  GPA 5.00",
        "2018                    SSC, Science                  GPA 5.00",
      ];
    case "contact":
      return [
        "Email    : kalloldey067@gmail.com",
        "Phone    : +880 1908-064940",
        "LinkedIn : https://www.linkedin.com/in/kallol-dey067",
        "GitHub   : https://github.com/kallol-Dey229",
      ];
    case "resume":
      window.open("/resume.pdf", "_blank");
      return ["Opening resume.pdf in a new tab..."];
    case "github":
      window.open("https://github.com/kallol-Dey229", "_blank");
      return ["Opening github.com/kallol-Dey229 ..."];
    case "theme":
      window.dispatchEvent(new Event("toggle-theme"));
      return ["Theme switched."];
    case "hire":
      window.location.href = `mailto:kalloldey067@gmail.com?subject=${encodeURIComponent("Let's work together")}`;
      return ["Excellent decision. Opening your email app..."];
    case "sudo":
      return ["kallol is not in the sudoers file. This incident will be reported.", "(Just kidding. Try 'hire' instead.)"];
    case "clear":
      return "clear";
    default:
      return [`command not found: ${cmd}. Type 'help' to see available commands.`];
  }
}

function Linkified({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return (
    <>
      {parts.map((p, i) =>
        /^https?:\/\//.test(p) ? (
          <a key={i} href={p} target="_blank" rel="noreferrer" className="underline" style={{ color: "#22d3ee" }}>
            {p}
          </a>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(BOOT);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const exec = (raw: string) => {
    const res = run(raw);
    if (raw.trim()) setHistory((h) => [raw, ...h]);
    setHIdx(-1);
    if (res === "clear") {
      setLines([]);
      return;
    }
    setLines((l) => [
      ...l,
      { kind: "in", text: raw },
      ...res.map((t) => ({ kind: "out" as const, text: t })),
      ...(res.length ? [{ kind: "out" as const, text: "" }] : []),
    ]);
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      exec(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const n = Math.min(hIdx + 1, history.length - 1);
      if (history[n] !== undefined) {
        setHIdx(n);
        setInput(history[n]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const n = hIdx - 1;
      setHIdx(n);
      setInput(n >= 0 ? history[n] : "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.filter((c) => c.startsWith(input.toLowerCase()));
      if (input && match.length === 1) setInput(match[0]);
    }
  };

  return (
    <section id="terminal" className="relative py-24" style={{ background: "var(--bg2)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle eyebrow="Terminal" title="Skip the scroll. Just ask." />

        <Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="ff-mono c-muted text-xs">Try:</span>
            {["help", "about", "skills", "projects", "contact"].map((c) => (
              <button key={c} onClick={() => exec(c)} className="btn-ghost c-text ff-mono rounded-full px-3.5 py-1.5 text-xs">
                {c}
              </button>
            ))}
          </div>

          <div
            className="mt-5 overflow-hidden rounded-2xl shadow-2xl shadow-black/30"
            style={{ background: "#0b0b14", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
              <span className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
              <span className="ff-mono ml-3 text-[11px]" style={{ color: "#8b8ba7" }}>kallol@portfolio: ~</span>
            </div>

            <div
              ref={boxRef}
              onClick={() => inputRef.current?.focus({ preventScroll: true })}
              className="ff-mono h-[400px] cursor-text overflow-y-auto p-5 text-[13px] leading-relaxed"
              style={{ color: "#e5e7eb" }}
            >
              {lines.map((l, i) =>
                l.kind === "in" ? (
                  <p key={i}>
                    <span style={{ color: "#34d399" }}>kallol@portfolio</span>
                    <span style={{ color: "#8b8ba7" }}>:</span>
                    <span style={{ color: "#22d3ee" }}>~</span>
                    <span style={{ color: "#8b8ba7" }}>$ </span>
                    {l.text}
                  </p>
                ) : (
                  <p key={i} className="min-h-[1.4em] whitespace-pre-wrap break-words" style={{ color: "#c4c4d8" }}>
                    <Linkified text={l.text} />
                  </p>
                )
              )}

              <div className="flex items-center">
                <span style={{ color: "#34d399" }}>kallol@portfolio</span>
                <span style={{ color: "#8b8ba7" }}>:</span>
                <span style={{ color: "#22d3ee" }}>~</span>
                <span className="mr-2" style={{ color: "#8b8ba7" }}>$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  aria-label="Terminal command input"
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  className="flex-1 bg-transparent outline-none"
                  style={{ color: "#fff", caretColor: "#22d3ee" }}
                />
              </div>
            </div>
          </div>
          <p className="ff-mono c-muted mt-3 text-[11px]">Tab = autocomplete · ↑ ↓ = history</p>
        </Reveal>
      </div>
    </section>
  );
}