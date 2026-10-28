import React from "react";

function StepCard({ title, description, icon, number }) {
  return (
    <div className="group flex w-full items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-strong transition-colors duration-300 group-hover:bg-primary-strong group-hover:text-white">
        {icon}
        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
          {number}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-bold text-navy md:text-base">{title}</h3>
        <p className="text-xs leading-6 text-muted md:text-sm">{description}</p>
      </div>
    </div>
  );
}

export default StepCard;
