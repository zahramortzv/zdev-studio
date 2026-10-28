"use client";
import React, { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "@/data/site";
import { HamburMenu, CloseIcon } from "../components/UI/Icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  // تغییر ظاهر نوبار بعد از اسکرول
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // هایلایت آیتم منو بر اساس بخشی که در دید است
  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // قفل اسکرول و بستن با Esc وقتی منوی موبایل باز است
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const solid = scrolled || isOpen;

  return (
    <>
      <nav
        aria-label="منوی اصلی"
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <a
            href="#home"
            className={`text-xl md:text-2xl font-bold tracking-wide ${
              solid ? "text-navy" : "text-white"
            }`}
            dir="ltr"
          >
            {SITE.name}
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    solid
                      ? active === item.id
                        ? "text-primary-strong"
                        : "text-navy hover:text-primary-strong"
                      : active === item.id
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded bg-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#order"
            className="hidden lg:inline-flex rounded-full bg-primary-strong px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#0f559f]"
          >
            ثبت سفارش
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className={`lg:hidden rounded-md p-1 ${solid ? "text-navy" : "text-white"}`}
          >
            {isOpen ? <CloseIcon /> : <HamburMenu />}
          </button>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5">
          <div className="h-full bg-primary" style={{ width: `${progress * 100}%` }} />
        </div>
      </nav>

      {/* منوی موبایل */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${isOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <ul
          id="mobile-menu"
          inert={!isOpen}
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col gap-1 bg-white px-5 pb-8 pt-20 shadow-xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  active === item.id
                    ? "bg-surface text-primary-strong"
                    : "text-navy hover:bg-surface"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#order"
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-primary-strong px-5 py-3 text-center font-bold text-white"
            >
              ثبت سفارش
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
