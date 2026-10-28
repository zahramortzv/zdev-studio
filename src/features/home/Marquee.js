import React from "react";

const ITEMS = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "طراحی ریسپانسیو",
  "سئوی پایه",
  "فروشگاه آنلاین",
  "لندینگ‌پیج",
  "پنل مدیریتی",
  "UI/UX",
];

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-12 pr-12">
      {ITEMS.map((t) => (
        <li key={t} className="flex items-center gap-12 whitespace-nowrap text-base font-medium text-muted">
          {t}
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
        </li>
      ))}
    </ul>
  );
}

// dir=ltr تا جهت حرکت در صفحه‌ی راست‌چین به‌هم نریزد
function Marquee() {
  return (
    <div dir="ltr" className="overflow-hidden border-b border-line bg-white py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </div>
  );
}

export default Marquee;
