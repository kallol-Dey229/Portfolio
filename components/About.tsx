const facts = [
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Studying", value: "B.Sc. in CSE, AIUB (2023 – present)" },
  { label: "Focus", value: "Full-stack, role-based web platforms" },
  { label: "Also comfortable in", value: ".NET, Java, C++" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-4">About Me</p>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-[17px] leading-relaxed text-muted">
            <p>
              I&apos;m an aspiring software engineer who likes taking a product from an
              empty repo to something people actually log into. Most of what I build
              follows the same shape: two or more user roles, real permissions, and
              a database that has to hold up once people start clicking around —
              trainers and members on <span className="text-fog">FitSync</span>,
              recruiters and candidates on <span className="text-fog">Hireloop</span>.
            </p>
            <p>
              My day-to-day toolkit is Next.js on the front end with Express or NestJS
              behind it, backed by MongoDB, MySQL, or PostgreSQL depending on the shape
              of the data. I&apos;ve also spent time in .NET and Java, so I&apos;m not
              precious about the stack — I pick what fits the problem.
            </p>
            <p>
              Outside of coursework and side projects, I&apos;m usually deep in a game,
              a few chapters into a new book, or planning the next trip.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-4 self-start rounded-lg border border-line bg-surface p-6 sm:grid-cols-2 md:grid-cols-1">
            {facts.map((f) => (
              <div key={f.label} className="border-b border-line/70 pb-4 last:border-0 last:pb-0">
                <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {f.label}
                </dt>
                <dd className="mt-1 font-display text-[15px] font-medium text-fog">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
