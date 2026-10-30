import React from "react";
import Image from "next/image";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import Reveal from "../components/UI/Reveal";
import { SpeedIcon, ShieldIcon, ChatIcon } from "../components/UI/Icons";

// فقط همین‌ها نمایش داده می‌شود. اگر نخواستی، لینک را خالی بگذار.
const OWNER = {
  name: "زهرا مرتضوی",
  initial: "ز",
  // فایل عکس باید در پوشه‌ی public باشد. اگر داخل public/images گذاشتی: "/images/zahra.jpeg"
  // اگر خالی بگذاری، آواتار نمایش داده می‌شود
  photo: "/images/zahra.jpeg",
  role: "طراح و توسعه‌دهنده‌ی وب",
  github: "https://github.com/zahramortzv",
  linkedin: "https://www.linkedin.com/in/zahramortzv",
};

const principles = [
  {
    icon: <SpeedIcon />,
    title: "سریع و بهینه",
    text: "سایت‌ها با Next.js ساخته می‌شوند تا سریع بالا بیایند و روی موبایل هم روان باشند.",
  },
  {
    icon: <ShieldIcon />,
    title: "شفاف و قابل‌اعتماد",
    text: "شرح خدمات، هزینه و زمان تحویل قبل از شروع پروژه مکتوب و مشخص می‌شود.",
  },
  {
    icon: <ChatIcon />,
    title: "همراه شما بعد از تحویل",
    text: "پس از راه‌اندازی سایت هم در کنار شما هستیم؛ از رفع مشکلات فنی تا به‌روزرسانی و توسعه‌ی سایت.",
  },
];

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function AboutPage() {
  const links = [
    OWNER.github && { href: OWNER.github, label: "GitHub", icon: <GitHubIcon /> },
    OWNER.linkedin && { href: OWNER.linkedin, label: "LinkedIn", icon: <LinkedInIcon /> },
  ].filter(Boolean);

  return (
    <Section id="about">
      <Title eyebrow="درباره من" text="سایت، چهره‌ی دیجیتال برند شماست" />
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            {OWNER.photo ? (
              <Image
                src={OWNER.photo}
                alt={`عکس ${OWNER.name}`}
                width={80}
                height={80}
                className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-primary/15"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-fuchsia-500 text-4xl font-bold text-white ring-4 ring-primary/15"
              >
                {OWNER.initial}
              </div>
            )}
            <div>
              <p className="text-xl font-bold text-navy">{OWNER.name}</p>
              <p className="text-sm text-muted">{OWNER.role}</p>
            </div>
          </div>

          <p className="text-base leading-9 text-navy md:text-lg">
            سایت اولین جایی است که مشتری درباره‌ی شما قضاوت می‌کند. ZDEV Studio
            برای همین شکل گرفته است: طراحی دقیق، کدی تمیز و تجربه‌ای روان، از
            اولین نگاه تا آخرین کلیک.
          </p>
          <p className="mt-4 text-base leading-9 text-muted md:text-lg">
            از اولین گفتگو تا روز انتشار، طراحی و کدنویسی پروژه‌ی شما به دست یک
            نفر انجام می‌شود؛ یعنی ارتباط مستقیم، تصمیم‌های سریع و تحویل بدون
            واسطه. شرح خدمات، قیمت و زمان تحویل هم پیش از شروع، مکتوب و توافق
            می‌شود.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="ابزارها">
            {["Next.js", "React", "Tailwind CSS", "طراحی ریسپانسیو", "سئوی پایه"].map((t) => (
              <li key={t} className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-navy">
                {t}
              </li>
            ))}
          </ul>

          {links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-primary hover:text-primary-strong"
                  >
                    {l.icon}
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
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