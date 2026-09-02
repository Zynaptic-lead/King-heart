"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Camera,
  Briefcase,
  Users,
  CheckCircle2,
} from "lucide-react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { HERO_DATA, HeroData } from "@/data/heroData";

interface HeroSectionProps {
  data?: HeroData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data = HERO_DATA,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-40 md:pt-44 pb-12 px-4 sm:px-8 overflow-hidden w-full max-w-full bg-[#05070E] text-white select-none">
      
      {/* ==================== AMBIENT BACKGROUND ==================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full max-w-full">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent blur-[120px]"
        />

        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 right-[-5%] w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/25 to-pink-500/20 blur-[130px]"
        />

        <div 
          className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="max-w-7xl mx-auto w-full z-20 relative flex-grow flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ==================== LEFT CONTENT ==================== */}
          <div className="lg:col-span-5 flex flex-col items-start z-30 max-w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl mb-6 shadow-2xl"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90 truncate">
                {data.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 uppercase break-words max-w-full"
            >
              {data.headline.line1}
              <br />
              <span className="relative inline-block bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-500 bg-clip-text text-transparent">
                {data.headline.line2}
              </span>
              <br />
              {data.headline.line3}
              <span className="text-cyan-400">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-lg text-slate-300 font-light leading-relaxed max-w-lg mb-8"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8"
            >
              <MagneticButton
                href={data.primaryCta.href}
                variant="primary"
                size="lg"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>{data.primaryCta.label}</span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-blue-900 flex items-center justify-center ml-1">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </MagneticButton>

              <MagneticButton
                href={data.secondaryCta.href}
                variant="glass"
                size="lg"
                className="rounded-full bg-white/[0.05] border-white/15 text-white hover:bg-white/15 hover:border-cyan-400/50 backdrop-blur-xl"
              >
                <span>{data.secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-300" />
              </MagneticButton>
            </motion.div>

            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-slate-400 uppercase tracking-widest">
              <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                />
              </div>
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* ==================== RIGHT VISUAL (STRUCTURED BENTO FRAME) ==================== */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-xl shadow-2xl group overflow-hidden"
            >
              {/* Inner Portrait Wrapper */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={data.primaryPortrait}
                  alt="Portfolio Owner"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 90vw, 45vw"
                />

                {/* Subtle Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-slate-950/20 to-transparent opacity-90" />

                {/* --- 1. TOP INTEGRATED STATUS BADGE --- */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <div className="px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/15 backdrop-blur-md flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-white">
                      Available for Freelance
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-950/80 border border-white/15 backdrop-blur-md text-[11px] font-mono text-cyan-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* --- 2. BOTTOM UNIFIED GLASS INFO DRAWER --- */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-950/80 border border-white/15 backdrop-blur-xl z-20 flex flex-col gap-3 shadow-2xl">
                  {/* Name & Role Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-white tracking-wide">
                        King Heart ♡
                      </span>
                      <span className="text-xs font-mono text-cyan-400">
                        {data.roleCard.title} — {data.roleCard.subtitle}
                      </span>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-300 uppercase">
                      Core Creator
                    </div>
                  </div>

                  {/* Integrated Tech Stack / Tools */}
                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Toolkit Stack
                    </span>
                    <div className="flex items-center gap-1.5">
                      {data.tools.map((tool) => (
                        <span
                          key={tool.id}
                          className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[11px] font-mono border transition-transform hover:scale-110"
                          style={{
                            backgroundColor: tool.bg,
                            borderColor: tool.border,
                            color: tool.color,
                          }}
                        >
                          {tool.badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ==================== METRICS SECTION ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 mt-6 border-t border-white/10 z-30 relative max-w-full"
        >
          {data.metrics.map((metric) => (
            <div
              key={metric.id}
              className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-xl flex items-center sm:items-start gap-3.5 hover:border-cyan-400/40 transition-all duration-300 max-w-full"
            >
              <div
                className="p-3 rounded-xl border flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `${metric.accentColor}15`,
                  borderColor: `${metric.accentColor}30`,
                  color: metric.accentColor,
                }}
              >
                {metric.icon === "camera" && <Camera className="w-4 h-4 sm:w-5 sm:h-5" />}
                {metric.icon === "briefcase" && <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />}
                {metric.icon === "users" && <Users className="w-4 h-4 sm:w-5 sm:h-5" />}
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider mt-0.5">
                  {metric.label}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 mt-0.5">
                  {metric.description}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};