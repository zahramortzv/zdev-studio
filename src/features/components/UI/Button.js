import React from "react";

const VARIANTS = {
  primary: "bg-primary-strong text-white hover:bg-[#0f559f]",
  dark: "bg-navy text-white hover:bg-[#1a1f31]",
  outline:
    "border-2 border-white/70 text-white hover:bg-white hover:text-navy",
  outlineDark:
    "border-2 border-navy/20 text-navy hover:border-primary-strong hover:text-primary-strong",
};

const SIZES = {
  sm: "text-sm px-4 py-2",
  md: "text-sm md:text-base px-6 py-3",
  lg: "text-base md:text-lg px-8 py-3.5",
};

// اگر href بدهی لینک می‌شود، وگرنه button
function Button({
  text,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  external = false,
  glow = false,
}) {
  const className = `inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${glow ? "animate-glow " : ""}${
    VARIANTS[variant] || VARIANTS.primary
  } ${SIZES[size] || SIZES.md} ${fullWidth ? "w-full" : ""}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {text}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {text}
    </button>
  );
}

export default Button;
