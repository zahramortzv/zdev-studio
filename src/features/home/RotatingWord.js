"use client";
import React, { useEffect, useState } from "react";

const WORDS = ["سایت شرکتی", "فروشگاه آنلاین", "لندینگ‌پیج", "پنل مدیریتی"];

function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span key={i} className="inline-block animate-word text-sky-300">
      {WORDS[i]}
    </span>
  );
}

export default RotatingWord;
