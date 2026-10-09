import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  const all = skillGroups.flatMap((g) => g.items);

  return (
    <section id="stack" className="relative py-24" style={{ background: "var(--bg2)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Stack" title="Tools I reach for" />
      </div>

      <div className="marquee-wrap mt-12 overflow-hidden">
        <div className="marquee-track flex w-max gap-3">
          {[...all, ...all].map((item, i) => (
            <span key={i} className="glass ff-mono whitespace-nowrap rounded-full px-5 py-2.5 text-[13px]">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 80}>
            <div className="glass spot h-full rounded-3xl p-6">
              <h3 className="ff-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--b)" }}>
                {g.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="ff-mono rounded-full border px-3 py-1 text-[12.5px] transition-all hover:-translate-y-0.5 hover:border-[var(--a)] hover:text-[var(--a)]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}