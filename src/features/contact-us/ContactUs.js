import React from "react";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import Reveal from "../components/UI/Reveal";
import { CONTACT } from "@/data/site";
import {
  PhoneIcon,
  SendIcon,
  ChatIcon,
  InstagramIcon,
  MailIcon,
  PinIcon,
} from "../components/UI/Icons";

function ContactUs() {
  const items = [
    CONTACT.phone && { icon: <PhoneIcon />, label: "تلفن", value: CONTACT.phone, href: `tel:${CONTACT.phone}`, ltr: true },
    CONTACT.whatsapp && { icon: <ChatIcon />, label: "واتساپ", value: "ارسال پیام", href: CONTACT.whatsapp, external: true },
    CONTACT.telegram && { icon: <SendIcon />, label: "تلگرام", value: "ارسال پیام", href: CONTACT.telegram, external: true },
    CONTACT.instagram && { icon: <InstagramIcon />, label: "اینستاگرام", value: "مشاهده پیج", href: CONTACT.instagram, external: true },
    CONTACT.email && { icon: <MailIcon />, label: "ایمیل", value: CONTACT.email, href: `mailto:${CONTACT.email}`, ltr: true },
    CONTACT.address && { icon: <PinIcon />, label: "آدرس", value: CONTACT.address },
  ].filter(Boolean);

  return (
    <Section id="contact">
      <Title text="تماس با ما" subtitle="سوالی دارید یا پروژه‌ای در ذهن دارید؟ از هر راهی که راحت‌ترید پیام بدهید." />
      {items.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line p-6 text-center text-muted">
          برای ارتباط با ما می‌توانید از فرم ثبت سفارش در همین صفحه استفاده کنید.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => {
            const body = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-strong">
                  {it.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{it.label}</span>
                  <span className={`block truncate font-bold text-navy ${it.ltr ? "text-left" : ""}`} dir={it.ltr ? "ltr" : undefined}>
                    {it.value}
                  </span>
                </span>
              </>
            );
            const cls = "flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md";
            return (
              <li key={it.label}>
                <Reveal delay={idx * 80}>
                {it.href ? (
                  <a
                    href={it.href}
                    className={`${cls} hover:border-primary`}
                    {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}

export default ContactUs;
