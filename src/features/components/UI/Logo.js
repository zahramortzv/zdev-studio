import React from "react";

// لوگو: نشان Z + نوشتار. رنگ نوشتار از currentColor می‌آید،
// پس با text-white یا text-navy روی والد تنظیم می‌شود.
function Logo({ name = "ZDEV", sub = "STUDIO", size = 40, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} dir="ltr">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="zdev-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6C5CFF" />
            <stop offset="1" stopColor="#D946EF" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="12" fill="url(#zdev-logo-grad)" />
        <path
          d="M12.5 13h15L12.5 27h15"
          stroke="#fff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="30" cy="10" r="2.6" fill="#D8FF5A" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight">{name}</span>
        <span className="mt-1 text-[0.6rem] font-medium tracking-[0.38em] opacity-70">{sub}</span>
      </span>
    </span>
  );
}

export default Logo;