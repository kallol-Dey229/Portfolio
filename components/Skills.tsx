import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="stack" className="border-b border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-4">Stack</p>
        <h2 className="font-display text-2xl font-semibold text-fog sm:text-3xl">
          Tools I reach for
        </h2>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-[11px] uppercase tracking-wide text-teal">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}
