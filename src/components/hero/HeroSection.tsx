"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Camera,
  Briefcase,
  Users,
  PenTool,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HERO_DATA, HeroData } from "@/data/heroData";

interface HeroSectionProps {
  data?: HeroData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data = HERO_DATA }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen md:h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-8 px-4 sm:px-8 overflow-hidden w-full max-w-full bg-background bg-noise select-none">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full max-w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-background to-background">
          <Image
            src={data.bgImage}
            alt="Futuristic Cosmic Ambient Background"
            fill
            priority
            className="object-cover object-right opacity-90 transition-opacity duration-1000"
          />
        </div>

        <motion.div
          className="absolute top-1/4 right-[5%] w-[450px] sm:w-[750px] h-[450px] sm:h-[750px] rounded-full bg-gradient-to-tr from-brand-blue via-purple-600 to-pink-500 opacity-25 blur-[120px] pointer-events-none"
          animate={{
            x: mousePos.x * -15,
            y: mousePos.y * -15,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10 w-full lg:w-2/3 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-20 relative flex-grow flex flex-col justify-center overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-start pt-2 lg:pt-0 z-30 max-w-full">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-6 shadow-glass max-w-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90 truncate">
                {data.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.02] mb-6 uppercase break-words max-w-full"
            >
              {data.headline.line1} <br />
              <span className="relative inline-block text-white">
                {data.headline.line2}
                <span className="absolute left-0 bottom-1 w-full h-3 bg-purple-600/40 -z-10 rounded-full blur-sm" />
              </span> <br />
              {data.headline.line3}<span className="text-pink-500">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-lg text-muted font-light leading-relaxed max-w-lg mb-8"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8"
            >
              <MagneticButton href={data.primaryCta.href} variant="primary" size="lg" className="rounded-full shadow-blue-glow-lg bg-brand-blue hover:bg-brand-accent">
                <span>{data.primaryCta.label}</span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-brand-blue flex items-center justify-center ml-1">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </MagneticButton>

              <MagneticButton
                href={data.secondaryCta.href}
                variant="glass"
                size="lg"
                className="rounded-full bg-white/[0.07] border-white/20 text-white hover:bg-white/15 hover:border-purple-400 backdrop-blur-xl"
              >
                <span>{data.secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-purple-300" />
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden sm:flex items-center gap-3 text-xs font-mono text-muted uppercase tracking-widest"
            >
              <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-pink-400"
                />
              </div>
              <span>Scroll to explore</span>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative flex justify-center items-center min-h-[380px] sm:min-h-[540px] max-w-full overflow-hidden">
            
            <motion.div
              className="absolute w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] max-w-[90vw] rounded-full border border-purple-500/20 pointer-events-none z-10"
              style={{
                x: mousePos.x * 4,
                y: mousePos.y * 4,
              }}
            >
              <div className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_15px_#ec4899] absolute top-10 left-12" />
              <div className="w-2.5 h-2.5 rounded-full bg-brand-blue shadow-[0_0_15px_#0066ff] absolute bottom-12 right-16" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.45, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                x: mousePos.x * 5 + 40,
                y: mousePos.y * 5 - 20,
              }}
              className="absolute top-6 right-8 sm:right-12 z-10 w-[220px] sm:w-[300px] h-[320px] sm:h-[420px] rounded-full overflow-hidden blur-[2px] filter grayscale opacity-40 border border-purple-500/30 pointer-events-none hidden sm:block"
            >
              <Image
                src={data.secondaryPortrait}
                alt="Editorial Background Portrait Layer"
                fill
                className="object-cover object-top"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-purple-900/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                x: mousePos.x * 6,
                y: mousePos.y * 6,
              }}
              className="relative z-20 w-[260px] sm:w-[380px] h-[360px] sm:h-[500px] max-w-[85vw] flex items-end justify-center"
            >
              <div className="absolute inset-0 rounded-b-[120px] bg-gradient-to-t from-brand-blue/30 via-purple-500/20 to-transparent blur-2xl pointer-events-none" />

              <Image
                src={data.primaryPortrait}
                alt="King Heart — Lead Visual Creative"
                fill
                className="object-cover object-top rounded-b-[120px] filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
                priority
                sizes="(max-width: 768px) 85vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 z-30 font-mono text-[11px] sm:text-xs tracking-widest text-pink-400 flex items-center gap-1.5 drop-shadow">
                <span>King Heart ♡</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                x: mousePos.x * 10,
                y: mousePos.y * 10 - 5,
              }}
              className="absolute top-2 right-2 sm:right-6 z-30 px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-[20px] bg-white/[0.07] border border-white/[0.18] shadow-glass"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">{data.availability.status}</span>
                <span className="text-[9px] sm:text-[10px] text-muted font-mono hidden sm:inline">{data.availability.label}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                x: mousePos.x * 12,
                y: mousePos.y * 12,
              }}
              className="absolute top-1/3 left-2 sm:-left-4 z-30 px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-[20px] bg-white/[0.07] border border-white/[0.18] shadow-glass"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-white">Available for Freelance</span>
              <ArrowUpRight className="w-3 h-3 text-purple-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                x: mousePos.x * 12,
                y: mousePos.y * 12,
              }}
              className="absolute top-1/4 right-4 z-30 p-3 rounded-2xl hidden sm:flex flex-col items-center gap-1 backdrop-blur-[20px] bg-white/[0.07] border border-white/[0.18] shadow-glass"
            >
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <PenTool className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white tracking-wider uppercase">{data.roleCard.title}</span>
              <span className="text-[10px] font-mono text-purple-300 uppercase">{data.roleCard.subtitle}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                x: mousePos.x * 12,
                y: mousePos.y * 12,
              }}
              className="absolute bottom-16 right-2 sm:-right-2 z-30 p-3 sm:p-4 rounded-2xl flex flex-col gap-2 backdrop-blur-[20px] bg-white/[0.07] border border-white/[0.18] shadow-glass group hover:border-purple-400/50 transition-colors"
            >
              <span className="text-[9px] sm:text-[10px] font-mono text-muted uppercase tracking-wider">Tools I Use</span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {data.tools.map((t) => (
                  <span
                    key={t.id}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-[11px] sm:text-xs font-mono border"
                    style={{
                      backgroundColor: t.bg,
                      borderColor: t.border,
                      color: t.color,
                    }}
                  >
                    {t.badge}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 mt-4 border-t border-white/10 z-30 relative max-w-full"
        >
          {data.metrics.map((metric) => (
            <motion.div
              key={metric.id}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-4 sm:p-6 rounded-2xl backdrop-blur-[20px] bg-white/[0.07] border border-white/[0.18] shadow-glass flex items-center sm:items-start gap-3.5 hover:border-purple-400/40 transition-all duration-300 max-w-full"
            >
              <div
                className="p-3 rounded-xl border flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `${metric.accentColor}20`,
                  borderColor: `${metric.accentColor}40`,
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
                <span className="text-[10px] sm:text-[11px] font-mono text-muted mt-0.5">
                  {metric.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
