import React from "react";

export default function DiscoverMoreButton({
  href = "#",
  children = "Discover More +",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`
        relative overflow-hidden inline-flex items-center justify-center
        px-8 py-3 rounded-full
        text-base font-semibold
        text-black border-2 border-[#2563eb]
        transition-colors duration-300
        hover:text-white
        group
        ${className}
      `}
    >
      <span
        className="
          absolute inset-0 w-[140%] bg-[#2563eb]
          -translate-x-full skew-x-[12deg]
          transition-transform duration-700
          group-hover:translate-x-0
        "
      />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}
