import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-4">Contact</p>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-fog sm:text-4xl">
              Let&apos;s build
              <br />
              something together.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Open to Software Engineering internships and collaborative projects.
              Reach out and I&apos;ll get back to you.
            </p>
          </div>

          <div className="flex flex-col gap-3 font-mono text-sm">
            <a
              href="mailto:kalloldey067@gmail.com"
              className="flex items-center gap-3 text-fog transition-colors hover:text-amber"
            >
              <MailIcon className="h-4 w-4 text-teal" /> kalloldey067@gmail.com
            </a>
            <a
              href="tel:+8801908064940"
              className="flex items-center gap-3 text-fog transition-colors hover:text-amber"
            >
              <PhoneIcon className="h-4 w-4 text-teal" /> +880 1908-064940
            </a>
            <a
              href="https://www.linkedin.com/in/kallol-dey067"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-fog transition-colors hover:text-amber"
            >
              <LinkedInIcon className="h-4 w-4 text-teal" /> linkedin.com/in/kallol-dey067
            </a>
            <a
              href="https://github.com/kallol-Dey229"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-fog transition-colors hover:text-amber"
            >
              <GitHubIcon className="h-4 w-4 text-teal" /> github.com/kallol-Dey229
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 font-mono text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Kallol Dey . Software Engineer.</p>
          <p>Bashundhara, Dhaka, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}
