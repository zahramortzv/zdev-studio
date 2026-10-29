import React from "react";
import Image from "next/image";
import Button from "../components/UI/Button";
import { SITE } from "@/data/site";
import { SpeedIcon, WireframeIcon, DevelopIcon } from "../components/UI/Icons";
import RotatingWord from "./RotatingWord";

function Chip({ icon, text, className, delay }) {
  return (
    <div
      className={`absolute hidden items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md animate-float lg:flex ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <span className="text-sky-300">{icon}</span>
      {text}
    </div>
  );
}

function LandingPage() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-navy"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 94%, 50% 100%, 0 94%)" }}
    >
      <Image
        src="/images/landing4.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover animate-kenburns"
      />
      <div className="absolute inset-0 bg-linear-to-b from-navy/85 via-navy/65 to-navy/90" />

      {/* پس‌زمینه‌ی زنده */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob md:h-96 md:w-96" />
        <div
          className="absolute bottom-[8%] left-[6%] h-64 w-64 rounded-full bg-sky-400/20 blur-3xl animate-blob md:h-80 md:w-80"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <Chip icon={<SpeedIcon size={20} />} text="سرعت بالا" className="right-[8%] top-[30%]" delay="0s" />
      <Chip icon={<WireframeIcon size={20} />} text="طراحی ریسپانسیو" className="left-[7%] top-[38%]" delay="-2.5s" />
      <Chip icon={<DevelopIcon size={20} />} text="کد تمیز و مدرن" className="bottom-[24%] right-[12%]" delay="-4.5s" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 pb-24 pt-28 text-center">
        <h1 className="text-3xl font-bold leading-snug text-white sm:text-4xl md:text-6xl md:leading-tight">
          <span className="sr-only">طراحی و توسعه سایت و فروشگاه آنلاین</span>
          <span aria-hidden="true">
            طراحی و توسعه
            <br />
            <RotatingWord /> حرفه‌ای
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/90 md:text-xl md:leading-9">
          ما در {SITE.name} وب‌سایت‌هایی می‌سازیم که کسب‌وکار شما را رشد می‌دهند و
          تجربه‌ای روان و جذاب برای کاربران شما می‌سازند.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button text="ثبت سفارش" href="#order" size="lg" glow />
          {/* <Button text="مشاهده نمونه کارها" href="#projects" variant="outline" size="lg" /> */}
        </div>
      </div>

      <a
        href="#services"
        aria-label="رفتن به بخش خدمات"
        className="absolute bottom-[9%] left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/60 p-1.5">
          <span className="h-2 w-1 rounded-full bg-white animate-cue" />
        </span>
      </a>
    </section>
  );
}

export default LandingPage;
