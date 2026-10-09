import Reveal from "./Reveal";

const facts = [
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Studying", value: "B.Sc. in CSE, AIUB (2023 – 2027, expected)" },
  { label: "Focus", value: "Full-stack, role-based web platforms" },
  { label: "Looking for", value: "Internship or Junior Software Engineer role" },
  { label: "Languages", value: "Bangla (Native) · English (Conversational)" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="eyebrow mb-4">About Me</p>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted">
              <p>
                I&apos;m a final-year Computer Science and Engineering student who likes taking a
                product from an empty repo to something people actually log into. Most of what I
                build has two or more user roles, real permissions, and a database that holds up
                once people start clicking around: trainers and members on{" "}
                <span className="text-fog">FitSync</span>, customers, sellers and admins on{" "}
                <span className="text-fog">Shopora</span>.
              </p>
              <p>
                My day-to-day toolkit is React and Next.js on the front end with Express or NestJS
                behind it, backed by MongoDB or PostgreSQL depending on the shape of the data.
                I&apos;ve also worked with ASP.NET Core and C#, so I pick what fits the problem
                rather than sticking to one stack.
              </p>
              <p>
                I&apos;m looking for an internship or Junior Software Engineer role where I can
                apply these skills with a real engineering team. Outside of coursework, I&apos;m
                usually deep in a game, a few chapters into a book, or planning the next trip.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <dl className="grid grid-cols-1 gap-4 self-start rounded-lg border border-line bg-surface p-6 sm:grid-cols-2 md:grid-cols-1">
              {facts.map((f) => (
                <div key={f.label} className="border-b border-line/70 pb-4 last:border-0 last:pb-0">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">{f.label}</dt>
                  <dd className="mt-1 font-display text-[15px] font-medium text-fog">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}