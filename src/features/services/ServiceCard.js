import React from "react";
import Image from "next/image";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-lg">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Image src={icon} alt="" width={30} height={30} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
      <p className="text-sm leading-7 text-muted md:text-base">{description}</p>
    </div>
  );
}

export default ServiceCard;
