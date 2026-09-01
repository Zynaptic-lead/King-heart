"use client";

import React from "react";
import { motion } from "framer-motion";

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-24 sm:py-36 px-4 sm:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-brand-accent">
            // PHILOSOPHY & VISION
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-[1.05] max-w-5xl mb-12"
        >
          CREATIVE THINKER<span className="text-brand-blue">.</span> <br />
          <span className="text-gradient-muted">VISUAL STORYTELLER</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-muted uppercase tracking-widest block mb-2">
              APPROACH & METHODOLOGY
            </span>
            <div className="h-[1px] w-16 bg-brand-blue" />
          </div>

          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-3xl font-light text-white leading-snug"
            >
              I transform ideas into visual experiences through strategy, typography, imagery, color and composition.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-muted font-light mt-6 leading-relaxed"
            >
              Design isn't merely decorative skin—it is the functional architecture of visual communication. By blending Swiss typographic precision with contemporary digital art direction, I build scalable identity systems that demand attention and endure across medium boundaries.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
