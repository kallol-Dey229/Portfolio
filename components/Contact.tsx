"use client";
import { useState, type FormEvent } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:kalloldey067@gmail.com?subject=${subject}&body=${body}`;
  };

  const input =
    "w-full rounded-md border border-line bg-ink px-4 py-3 font-mono text-sm text-fog outline-none transition-colors placeholder:text-muted focus:border-amber";

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-fog sm:text-4xl">
            Let&apos;s build{" "}
            <span className="bg-gradient-to-r from-amber to-copper bg-clip-text text-transparent">
              something together.
            </span>
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Open to Software Engineering internships and collaborative projects. Reach out and
            I&apos;ll get back to you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-line bg-surface p-6">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={input}
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={input}
              />
              <textarea
                required
                rows={5}
                placeholder="Tell me about your idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={input}
              />
              <button
                type="submit"
                className="w-full rounded-md bg-amber px-5 py-3 font-mono text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-copper"
              >
                Send message
              </button>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-3 font-mono text-sm">
              {[
                { href: "mailto:kalloldey067@gmail.com", icon: MailIcon, text: "kalloldey067@gmail.com" },
                { href: "tel:+8801908064940", icon: PhoneIcon, text: "+880 1908-064940" },
                { href: "https://www.linkedin.com/in/kallol-dey067", icon: LinkedInIcon, text: "linkedin.com/in/kallol-dey067", ext: true },
                { href: "https://github.com/kallol-Dey229", icon: GitHubIcon, text: "github.com/kallol-Dey229", ext: true },
              ].map(({ href, icon: Icon, text, ext }) => (
                <a
                  key={href}
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="card-hover flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 text-fog transition-colors hover:text-amber"
                >
                  <Icon className="h-5 w-5 text-teal" /> {text}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 font-mono text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Kallol Dey · Software Engineer.</p>
          <p>Bashundhara, Dhaka, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}