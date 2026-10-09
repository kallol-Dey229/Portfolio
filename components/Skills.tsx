import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  const all = skillGroups.flatMap((g) => g.items);

  return (
    <section id="stack" className="border-b border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="eyebrow mb-4">Stack</p>
          <h2 className="font-display text-2xl font-semibold text-fog sm:text-3xl">Tools I reach for</h2>
        </Reveal>

        {/* scrolling marquee */}
        <div className="marquee relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max gap-3">
            {[...all, ...all].map((item, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 font-mono text-[13px] text-fog"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <div className="card-hover h-full rounded-xl border border-line bg-surface p-6">
                <h3 className="font-mono text-[11px] uppercase tracking-wide text-teal">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[12.5px] text-fog transition-colors hover:border-amber hover:text-amber"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}