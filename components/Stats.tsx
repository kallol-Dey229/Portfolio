"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const stats = [
  { value: 6, suffix: "+", label: "Projects shipped" },
  { value: 15, suffix: "+", label: "Technologies used" },
  { value: 3.67, suffix: "", label: "Current CGPA", decimals: 2 },
  { value: 3, suffix: "", label: "Full-stack roles built" },
];

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        setN(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="text-center md:text-left">
              <p className="font-display text-4xl font-semibold text-fog">
                <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}