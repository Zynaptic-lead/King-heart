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
  PenTool,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HERO_DATA, HeroData } from "@/data/heroData";
import { useAuth } from "@/context/AuthContext";

interface HeroSectionProps {
  data?: HeroData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data = HERO_DATA }) => {
  const { adminUser } = useAuth();

  const activePortrait = adminUser?.avatarUrl || data.primaryPortrait;

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-44 md:pt-48 pb-12 px-4 sm:px-8 overflow-hidden w-full max-w-full bg-background bg-noise select-none">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full max-w-full">
        <div className="absolute top-1/4 right-[5%] w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-gradient-to-tr from-brand-blue via-purple-600 to-pink-500 opacity-20 blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-10 left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-br from-purple-900/30 via-brand-blue/20 to-transparent blur-[120px] pointer-events-none z-0" />

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent z-10 w-full lg:w-3/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-20 relative flex-grow flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-start z-30 max-w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-md mb-6 shadow-lg max-w-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90 truncate">
                {data.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.02] mb-6 uppercase break-words max-w-full"
            >
              {data.headline.line1} <br />
              <span className="relative inline-block text-white">
                {data.headline.line2}
                <span className="absolute left-0 bottom-1 w-full h-3 bg-purple-600/40 -z-10 rounded-full blur-sm" />
              </span> <br />
              {data.headline.line3}<span className="text-pink-500">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-lg text-muted font-light leading-relaxed max-w-lg mb-8"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8"
            >
              <MagneticButton href={data.primaryCta.href} variant="primary" size="lg" className="rounded-full shadow-blue-glow bg-brand-blue hover:bg-brand-accent">
                <span>{data.primaryCta.label}</span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-brand-blue flex items-center justify-center ml-1">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </MagneticButton>

              <MagneticButton
                href={data.secondaryCta.href}
                variant="glass"
                size="lg"
                className="rounded-full bg-white/[0.08] border-white/20 text-white hover:bg-white/20 hover:border-purple-400 backdrop-blur-md"
              >
                <span>{data.secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-purple-300" />
              </MagneticButton>
            </motion.div>

            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-muted uppercase tracking-widest">
              <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-pink-400"
                />
              </div>
              <span>Scroll to explore</span>
            </div>
          </div>

          <div className="lg:col-span-7 relative flex justify-center items-center min-h-[380px] sm:min-h-[520px] max-w-full">
            
            <div className="absolute top-4 right-10 sm:right-16 z-10 w-[220px] sm:w-[290px] h-[300px] sm:h-[400px] rounded-full overflow-hidden blur-[1px] opacity-35 border border-purple-500/30 hidden sm:block">
              <Image
                src={activePortrait}
                alt="Secondary Editorial Portrait"
                fill
                className="object-cover object-top"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-purple-900/30 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-20 w-[280px] sm:w-[380px] h-[380px] sm:h-[500px] max-w-[90vw] flex items-end justify-center"
            >
              <div className="absolute inset-0 rounded-b-[120px] bg-gradient-to-t from-brand-blue/30 via-purple-500/20 to-transparent blur-xl pointer-events-none" />

              <Image
                src={activePortrait}
                alt="King Heart — Portfolio Owner"
                fill
                className="object-cover object-top rounded-b-[120px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
                priority
                sizes="(max-width: 768px) 90vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-75 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 z-30 font-mono text-[11px] sm:text-xs tracking-widest text-pink-400 flex items-center gap-1.5 shadow-lg bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                <span>King Heart ♡</span>
              </div>
            </motion.div>

            <div className="absolute top-2 right-2 sm:right-6 z-30 px-3.5 py-2 rounded-full flex items-center gap-2 bg-black/70 border border-white/20 backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">{data.availability.status}</span>
                <span className="text-[9px] sm:text-[10px] text-muted font-mono hidden sm:inline">{data.availability.label}</span>
              </div>
            </div>

            <div className="absolute top-1/3 left-2 sm:-left-2 z-30 px-3 py-1.5 rounded-full flex items-center gap-1.5 bg-black/70 border border-white/20 backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-white">Available for Freelance</span>
              <ArrowUpRight className="w-3 h-3 text-purple-300" />
            </div>

            <div className="absolute top-1/4 right-4 z-30 p-3 rounded-2xl hidden sm:flex flex-col items-center gap-1 bg-black/70 border border-white/20 backdrop-blur-md shadow-xl">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <PenTool className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white tracking-wider uppercase">{data.roleCard.title}</span>
              <span className="text-[10px] font-mono text-purple-300 uppercase">{data.roleCard.subtitle}</span>
            </div>

            <div className="absolute bottom-12 right-2 sm:right-0 z-30 p-3 sm:p-3.5 rounded-2xl flex flex-col gap-2 bg-black/70 border border-white/20 backdrop-blur-md shadow-xl">
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
            </div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 mt-4 border-t border-white/10 z-30 relative max-w-full"
        >
          {data.metrics.map((metric) => (
            <div
              key={metric.id}
              className="p-4 sm:p-6 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md shadow-xl flex items-center sm:items-start gap-3.5 hover:border-purple-400/50 transition-all duration-300 max-w-full"
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
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};