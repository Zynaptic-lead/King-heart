"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowUpRight, Compass, Eye, ShieldCheck } from "lucide-react";
import { KingHeartLogo } from "@/components/ui/KingHeartLogo";

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-8 min-h-screen bg-background relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[750px] h-[750px] bg-brand-blue/15 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// BIOGRAPHY & MANIFESTO"
          title="ABOUT KING HEART GRAPHICS WORLD"
          subtitle="Where creativity meets excellence — senior visual creative studio bridging Swiss typographic clarity with contemporary 3D motion and brand architecture."
        />

        {/* Large Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-16 rounded-3xl glass-panel border border-white/10 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-4">
            STUDIO MANIFESTO
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05] max-w-4xl">
            GOOD DESIGN ISN'T DECORATION<span className="text-brand-blue">.</span> <br />
            <span className="text-gradient-blue">IT'S COMMUNICATION.</span>
          </h2>
        </motion.div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              CREATIVE PHILOSOPHY
            </span>
            <h3 className="text-3xl font-bold uppercase text-white tracking-tight">
              WHERE CREATIVITY MEETS EXCELLENCE
            </h3>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              King Heart Graphics World is an elite visual studio operating globally at the intersection of brand identity, editorial publication, 3D fluid motion graphics, and interactive digital design systems.
            </p>
            <p className="text-base text-muted font-light leading-relaxed">
              Every project begins with strategic inquiry: Who is the audience? What is the core truth? How does color, typography, and motion evoke visceral trust? By stripping away non-essential noise, we construct identity systems that cut through culture.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-surface-elevated to-black opacity-90" />
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <KingHeartLogo size={120} />
              <h3 className="text-3xl font-extrabold text-white tracking-wider uppercase">
                KING HEART
              </h3>
              <span className="text-sm font-mono text-amber-400 tracking-[0.25em] uppercase">
                GRAPHICS WORLD
              </span>
              <p className="text-xs font-mono text-muted uppercase tracking-widest max-w-xs mt-2">
                — WHERE CREATIVITY MEETS EXCELLENCE —
              </p>
            </div>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <GlassCard className="p-8 flex flex-col gap-4">
            <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-brand-accent w-fit">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold uppercase text-white tracking-tight">
              RADICAL CLARITY
            </h4>
            <p className="text-xs text-muted font-light leading-relaxed">
              Eliminating visual clutter to focus on pure typography, proportion, and visual hierarchy.
            </p>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col gap-4">
            <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-brand-accent w-fit">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold uppercase text-white tracking-tight">
              KINETIC EXPERIMENTATION
            </h4>
            <p className="text-xs text-muted font-light leading-relaxed">
              Integrating 3D physics, glass caustics, and procedural motion into static branding systems.
            </p>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col gap-4">
            <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-brand-accent w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold uppercase text-white tracking-tight">
              PRECISION EXECUTION
            </h4>
            <p className="text-xs text-muted font-light leading-relaxed">
              Production-grade print specs, web design tokens, and vector master assets built for scale.
            </p>
          </GlassCard>
        </div>

        {/* Call to Action Bar */}
        <div className="p-12 rounded-3xl bg-black border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight mb-2">
              READY TO ELEVATE YOUR BRAND?
            </h3>
            <p className="text-muted text-sm font-light">
              Let's discuss commission opportunities, timeline, and creative direction.
            </p>
          </div>
          <MagneticButton href="/contact" variant="primary" size="lg">
            <span>Initiate Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
