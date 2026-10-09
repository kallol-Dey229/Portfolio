import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const timeline = [
  { period: "2026", title: "Complete Web Development Course", org: "Programming Hero", detail: "Certification" },
  { period: "2023 — 2027 (Expected)", title: "B.Sc. in Computer Science and Engineering", org: "American International University-Bangladesh (AIUB)", detail: "CGPA 3.67" },
  { period: "2018 — 2020", title: "Higher Secondary Certificate, Science", org: "Udayan Uchcha Madhyamik Bidyalaya", detail: "GPA 5.00" },
  { period: "2018", title: "Secondary School Certificate, Science", org: "Debidwar Government Reaz Uddin Pilot High School", detail: "GPA 5.00" },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24" style={{ background: "var(--bg2)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle eyebrow="Education" title="Education & certifications" />

        <div className="relative mt-12 pl-8">
          <div className="absolute bottom-2 left-[7px] top-2 w-px" style={{ background: "linear-gradient(to bottom,var(--a),var(--b),transparent)" }} />
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 100}>
              <div className="relative pb-10 last:pb-0">
                <span className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2" style={{ background: "var(--bg2)", borderColor: "var(--b)", boxShadow: "0 0 14px var(--b)" }} />
                <div className="glass rounded-2xl p-5 transition-transform hover:translate-x-1">
                  <span className="ff-mono text-[12px]" style={{ color: "var(--b)" }}>{t.period}</span>
                  <h3 className="ff-head mt-1 text-lg font-semibold">{t.title}</h3>
                  <p className="c-muted text-sm">{t.org}</p>
                  <p className="ff-mono c-muted mt-1 text-xs">{t.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}