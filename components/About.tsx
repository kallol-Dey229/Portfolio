import Counter from "./Counter";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const stats = [
  { value: 7, suffix: "+", label: "Projects built" },
  { value: 18, suffix: "", label: "REST endpoints in FitSync" },
  { value: 3, suffix: "", label: "User roles in Shopora" },
  { value: 3.67, suffix: "", label: "Current CGPA", decimals: 2 },
];

const facts = [
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Studying", value: "B.Sc. CSE, AIUB (2027)" },
  { label: "Languages", value: "Bangla · English" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="About me" title="Code, products, and people who use them" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <div className="glass h-full rounded-3xl p-8">
              <div className="c-muted space-y-4 text-[16.5px] leading-relaxed">
                <p>
                  I&apos;m a final-year Computer Science and Engineering student who likes taking a product from an
                  empty repo to something people actually log into. Most of what I build has two or more user roles,
                  real permissions, and a database that holds up once people start clicking around.
                </p>
                <p>
                  My toolkit is React and Next.js on the front end with Express or NestJS behind it, backed by MongoDB
                  or PostgreSQL. I&apos;m looking for an internship or Junior Software Engineer role where I can work
                  with a real engineering team.
                </p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {facts.map((f) => (
                  <div key={f.label}>
                    <p className="ff-mono text-[11px] uppercase tracking-wider c-muted">{f.label}</p>
                    <p className="ff-head mt-1 text-sm font-semibold">{f.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {stats.slice(0, 2).map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="glass h-full rounded-3xl p-6">
                  <p className="ff-head grad-text text-4xl font-bold">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="ff-mono c-muted mt-1 text-[11px] uppercase tracking-wider">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {stats.slice(2).map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="glass rounded-3xl p-6">
                <p className="ff-head grad-text text-4xl font-bold">
                  <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
                </p>
                <p className="ff-mono c-muted mt-1 text-[11px] uppercase tracking-wider">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}