"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setI((n) => n + 1);
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, !deleting && text === word ? 1400 : deleting ? 35 : 75);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="grad-text">
      {text}
      <span className="caret ml-0.5" style={{ color: "var(--b)", WebkitTextFillColor: "var(--b)" }}>|</span>
    </span>
  );
}