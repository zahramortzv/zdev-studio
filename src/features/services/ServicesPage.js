import React from "react";
import Title from "../components/UI/Title";
import Section from "../components/UI/Section";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Reveal from "../components/UI/Reveal";

function ServicesPage() {
  return (
    <Section id="services" tone="soft">
      <Title
        text="خدمات ما"
        subtitle="از معرفی ساده‌ی برند تا فروشگاه آنلاین کامل؛ هر چه برای حضور حرفه‌ای در فضای دیجیتال لازم دارید."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={i * 100} className="h-full">
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default ServicesPage;
