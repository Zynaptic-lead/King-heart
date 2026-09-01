"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized coordinates from -1 to 1
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 overflow-hidden bg-background bg-noise">
      {/* Dynamic Cursor-Following Ambient Light Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none -z-10"
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * 40,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Floating Liquid Glass Geometric Accent Objects */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-48 sm:w-64 h-48 sm:h-64 rounded-3xl glass-panel pointer-events-none -z-10 border border-white/10 rotate-12 hidden lg:block"
        animate={{
          x: mousePos.x * -30,
          y: mousePos.y * -30,
          rotate: 12 + mousePos.x * 5,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-[8%] w-36 sm:w-48 h-36 sm:h-48 rounded-full glass-panel pointer-events-none -z-10 border border-white/10 -rotate-6 hidden lg:block"
        animate={{
          x: mousePos.x * 25,
          y: mousePos.y * 25,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 30 }}
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full my-auto z-10">
        {/* Category Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
          <span className="text-xs font-mono tracking-[0.25em] text-white uppercase">
            GRAPHIC DESIGNER / VISUAL CREATIVE
          </span>
        </motion.div>

        {/* Oversized Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-white leading-[0.92] mb-8"
        >
          DESIGN THAT <br />
          <span className="text-gradient-blue">MAKES AN</span> <br />
          IMPRESSION<span className="text-brand-blue">.</span>
        </motion.h1>

        {/* Supporting Paragraph & CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-5 text-base sm:text-lg text-muted font-light leading-relaxed"
          >
            I create bold visual identities, digital experiences and visual systems that turn ideas into memorable brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-7 flex flex-wrap items-center gap-4 md:justify-end"
          >
            <MagneticButton href="#work" variant="primary" size="lg">
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton href="/contact" variant="glass" size="lg">
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Bar & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-7xl mx-auto w-full pt-12 flex items-center justify-between text-xs font-mono text-muted uppercase tracking-widest"
      >
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          <span>PARIS, FRANCE // GLOBAL DIGITAL STUDIO</span>
        </div>

        <a
          href="#intro"
          className="flex items-center gap-2 hover:text-white transition-colors ml-auto sm:ml-0"
        >
          <span>SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-brand-accent" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
