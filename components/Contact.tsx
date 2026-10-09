"use client";
import { useState, type FormEvent } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";
import Reveal from "./Reveal";

const links = [
  { href: "mailto:kalloldey067@gmail.com", I: MailIcon, text: "kalloldey067@gmail.com" },
  { href: "tel:+8801908064940", I: PhoneIcon, text: "+880 1908-064940" },
  { href: "https://www.linkedin.com/in/kallol-dey067", I: LinkedInIcon, text: "linkedin.com/in/kallol-dey067", ext: true },
  { href: "https://github.com/kallol-Dey229", I: GitHubIcon, text: "github.com/kallol-Dey229", ext: true },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:kalloldey067@gmail.com?subject=${subject}&body=${body}`;
  };

  const input = "ff-mono w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:opacity-50 focus:border-[var(--b)]";

  return (
    <section id="contact" className="relative overflow-hidden pt-24" style={{ background: "var(--bg2)" }}>
      <div className="blob -right-20 top-10 h-80 w-80" style={{ background: "var(--a)" }} />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="ff-mono mb-3 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--b)" }}>Contact</p>
          <h2 className="ff-head text-4xl font-bold leading-tight sm:text-6xl">
            Let&apos;s build <span className="grad-text">something together.</span>
          </h2>
          <p className="c-muted mt-4 max-w-md">
            Open to Software Engineering internships and collaborative projects. Reach out and I&apos;ll get back to you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal>
            <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-6">
              <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} style={{ borderColor: "var(--border)" }} />
              <input required type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} style={{ borderColor: "var(--border)" }} />
              <textarea required rows={5} placeholder="Tell me about your idea..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={input} style={{ borderColor: "var(--border)" }} />
              <button type="submit" className="btn-grad ff-mono w-full rounded-xl px-5 py-3.5 text-sm font-medium">Send message</button>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-3">
              {links.map(({ href, I, text, ext }) => (
                <a
                  key={href}
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="glass spot ff-mono group flex items-center gap-4 rounded-2xl px-5 py-4 text-sm transition-transform hover:translate-x-1"
                >
                  <I className="h-5 w-5" style={{ color: "var(--b)" }} />
                  {text}
                  <span className="ml-auto opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 mt-20 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="ff-mono c-muted mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Kallol Dey · Software Engineer</p>
          <p>Bashundhara, Dhaka, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}