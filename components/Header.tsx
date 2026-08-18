const links = [
  { href: "#about", label: "About Me" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#beyond", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-fog">
          Kallol <span className="text-amber">Dey</span>
        </a>
        <nav className="hidden gap-7 font-mono text-[13px] text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-amber">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:kalloldey067@gmail.com"
          className="hidden rounded-md border border-line px-4 py-1.5 font-mono text-[13px] text-fog transition-colors hover:border-amber hover:text-amber md:inline-block"
        >
          say hi ↗
        </a>
      </div>
    </header>
  );
}
