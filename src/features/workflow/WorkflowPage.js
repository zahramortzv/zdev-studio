import React from "react";
import Image from "next/image";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import StepCard from "./StepCard";
import Reveal from "../components/UI/Reveal";
import { steps } from "@/data/steps";

const toFa = (n) => n.toLocaleString("fa-IR");

function WorkflowPage() {
  const firstPart = steps.slice(0, 3);
  const secondPart = steps.slice(3, 6);

  return (
    <Section id="process" tone="soft">
      <Title
        text="فرایند کار با ما"
        subtitle="مسیر پروژه از اولین تماس تا تحویل و پشتیبانی، شفاف و مرحله‌به‌مرحله است."
      />
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col gap-5">
          {firstPart.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <StepCard number={toFa(i + 1)} {...step} />
            </Reveal>
          ))}
        </div>

        <div className="order-first flex justify-center lg:order-none">
          <Image
            src="/images/workflow.svg"
            alt=""
            width={380}
            height={380}
            className="h-auto w-56 animate-float md:w-80 lg:w-[360px]"
          />
        </div>

        <div className="flex flex-col gap-5">
          {secondPart.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <StepCard number={toFa(i + 4)} {...step} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default WorkflowPage;
