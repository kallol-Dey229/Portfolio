import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <p className="ff-mono mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--b)" }}>
        <span className="h-px w-10" style={{ background: "var(--b)" }} /> {eyebrow}
      </p>
      <h2 className="ff-head text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </Reveal>
  );
}