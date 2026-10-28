import React from "react";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import Reveal from "../components/UI/Reveal";
import { SITE } from "@/data/site";
import { SpeedIcon, ShieldIcon, ChatIcon } from "../components/UI/Icons";

const principles = [
  {
    icon: <SpeedIcon />,
    title: "سریع و بهینه",
    text: "سایت‌ها با Next.js ساخته می‌شوند تا سریع بالا بیایند و روی موبایل هم روان باشند.",
  },
  {
    icon: <ShieldIcon />,
    title: "شفاف و قابل‌اعتماد",
    text: "محدوده‌ی کار، هزینه و زمان تحویل قبل از شروع پروژه مکتوب و مشخص می‌شود.",
  },
  {
    icon: <ChatIcon />,
    title: "همراه شما بعد از تحویل",
    text: "ارتباط با ما بعد از انتشار سایت قطع نمی‌شود؛ رفع اشکال و به‌روزرسانی هم داریم.",
  },
];

const stack = ["Next.js", "React", "Tailwind CSS", "طراحی ریسپانسیو", "سئوی پایه"];

function AboutPage() {
  return (
    <Section id="about">
      <Title text="درباره ما" />
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-base leading-9 text-navy md:text-lg">
            {SITE.name} یک استودیوی طراحی و توسعه‌ی وب است. تمرکز ما روی ساخت
            سایت‌های شرکتی، فروشگاه‌های آنلاین و لندینگ‌پیج‌هاست؛ سایت‌هایی که
            ظاهر حرفه‌ای دارند و مشتری را به اقدام (تماس، سفارش یا خرید) نزدیک‌تر
            می‌کنند.
          </p>
          <p className="mt-4 text-base leading-9 text-muted md:text-lg">
            از جلسه‌ی اول تا تحویل نهایی، مسیر کار را ساده و شفاف نگه می‌داریم
            تا شما دقیقاً بدانید در هر مرحله چه اتفاقی می‌افتد.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="ابزارهای ما">
            {stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-navy"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex flex-col gap-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
            <div className="flex gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-strong">
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm leading-7 text-muted md:text-base">{p.text}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AboutPage;
