import React from "react";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "../components/UI/Reveal";

function ProjectPage() {
  return (
    <Section id="projects">
      <Title text="نمونه کارها" subtitle="چند نمونه از پروژه‌هایی که طراحی و پیاده‌سازی کرده‌ایم." />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 100} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default ProjectPage;
