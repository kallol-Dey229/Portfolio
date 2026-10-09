"use client";
import { useEffect, useState } from "react";

export default function ScrollUI() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-0.5 w-full">
        <div
          className="h-full bg-gradient-to-r from-amber to-teal"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 rounded-full border border-line bg-surface p-3 text-fog shadow-lg transition-all duration-300 hover:border-amber hover:text-amber ${
          progress > 15 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}