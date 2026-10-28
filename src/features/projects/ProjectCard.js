import React from "react";
import Image from "next/image";

function ProjectCard({ image, title, description, link }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-bold leading-7 text-navy">{title}</h3>
        <p className="line-clamp-3 text-sm leading-7 text-muted">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex w-fit items-center rounded-full bg-primary-strong px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#0f559f]"
          >
            مشاهده پروژه
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
