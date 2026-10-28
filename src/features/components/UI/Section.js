import React from "react";

// id برای اسکرول منو است؛ scroll-mt فاصله‌ی نوبار ثابت را جبران می‌کند
function Section({ id, children, className = "", tone = "white" }) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 py-16 md:py-24 ${
        tone === "soft" ? "bg-surface" : "bg-white"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">{children}</div>
    </section>
  );
}

export default Section;
