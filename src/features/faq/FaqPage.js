import React from "react";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import Reveal from "../components/UI/Reveal";
import { faqs } from "@/data/faq";
import { PlusIcon } from "../components/UI/Icons";

// با <details> ساخته شده تا بدون جاوااسکریپت هم کار کند و برای کیبورد و صفحه‌خوان مناسب باشد
function FaqPage() {
  return (
    <Section id="faq" tone="soft">
      <Title text="سوالات متداول" subtitle="جواب چند سوالی که معمولاً قبل از شروع پروژه پرسیده می‌شود." />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={i * 70}>
          <details className="group rounded-2xl border border-line bg-white transition-colors open:border-primary open:shadow-sm hover:border-primary">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-base font-bold text-navy [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <PlusIcon className="shrink-0 text-primary-strong transition-transform duration-200 group-open:rotate-45" />
            </summary>
            <p className="px-5 pb-5 text-sm leading-8 text-muted md:text-base">{item.a}</p>
          </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default FaqPage;
