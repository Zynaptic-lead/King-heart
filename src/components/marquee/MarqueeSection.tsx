"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "GRAPHIC DESIGN",
  "BRAND IDENTITY",
  "ART DIRECTION",
  "MOTION DESIGN",
  "VISUAL STORYTELLING",
  "TYPOGRAPHY",
  "3D ARTWORK",
  "EDITORIAL SYSTEMS",
];

export const MarqueeSection: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 bg-black/60 border-y border-white/10 overflow-hidden relative select-none">
      {/* Side gradient overlays for seamless edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee-slow">
        {/* Repeat 3 times for continuous infinite loop */}
        {[...Array(3)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6">
            {MARQUEE_ITEMS.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white/90 whitespace-nowrap hover:text-brand-accent transition-colors">
                  {item}
                </span>
                <span className="text-brand-blue text-lg sm:text-2xl font-mono">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
