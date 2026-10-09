"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollUI() {
  const [progress, setProgress] = useState(0);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    const onMove = (e: MouseEvent) => {
      if (glow.current) glow.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[70] h-[3px] w-full">
        <div className="h-full" style={{ width: `${progress}%`, background: "linear-gradient(90deg,var(--a),var(--b),var(--c))" }} />
      </div>

      <div
        ref={glow}
        className="cursor-glow pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-25 transition-transform duration-150 ease-out"
        style={{ background: "radial-gradient(circle, var(--a), transparent 65%)" }}
      />

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`glass c-text fixed bottom-6 right-6 z-50 rounded-full p-3 transition-all duration-300 hover:-translate-y-1 ${
          progress > 12 ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}