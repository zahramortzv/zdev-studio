import React from "react";
import Reveal from "./Reveal";

function Title({ text, subtitle, center = false }) {
  return (
    <Reveal className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-4xl font-bold leading-snug text-navy">
        {text}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-3 block h-1 w-12 rounded-full bg-primary ${
          center ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg text-muted ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export default Title;
