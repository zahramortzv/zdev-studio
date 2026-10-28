import React from "react";
import { NAV_ITEMS, SITE } from "@/data/site";

function Footer() {
  const year = new Date().toLocaleDateString("fa-IR", { year: "numeric" });
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between md:px-8">
        <div className="text-center md:text-right">
          <p className="text-xl font-bold text-white" dir="ltr">
            {SITE.name}
          </p>
          <p className="mt-1 text-sm">طراحی و توسعه سایت و فروشگاه آنلاین</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {NAV_ITEMS.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className="transition-colors hover:text-white">
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {year} {SITE.name}. همه حقوق محفوظ است.
      </p>
    </footer>
  );
}

export default Footer;
