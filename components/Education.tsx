const timeline = [
  {
    period: "2023 — Present",
    title: "B.Sc. in Computer Science and Engineering",
    org: "American International University-Bangladesh (AIUB)",
    detail: "CGPA 3.67",
  },
  {
    period: "2018 — 2020",
    title: "Higher Secondary Certificate, Science",
    org: "Udayan Uchcha Madhyamik Bidyalaya",
    detail: "GPA 5.00",
  },
  {
    period: "2018",
    title: "Secondary School Certificate, Science",
    org: "Debidwar Government Reaz Uddin Pilot High School",
    detail: "GPA 5.00",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-b border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-4">Education</p>
        <h2 className="font-display text-2xl font-semibold text-fog sm:text-3xl">
          Where it started
        </h2>

        <div className="mt-10 space-y-0">
          {timeline.map((t, i) => (
            <div key={t.title} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-amber bg-ink" />
                {i !== timeline.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-line" />
                )}
              </div>
              <div className="-mt-0.5">
                <span className="font-mono text-[12px] text-muted">{t.period}</span>
                <h3 className="mt-1 font-display text-lg font-medium text-fog">
                  {t.title}
                </h3>
                <p className="text-sm text-muted">{t.org}</p>
                <p className="mt-0.5 font-mono text-xs text-teal">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
