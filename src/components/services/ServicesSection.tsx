"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Palette, Share2, Compass, Film, Monitor, Layout } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Film: <Film className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
};

export const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 sm:py-36 px-4 sm:px-8 border-t border-white/5 bg-noise relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// WHAT I OFFER"
          title="CAPABILITIES & SERVICES"
          subtitle="A comprehensive discipline mapping strategy, visual execution, motion design, and digital brand development."
        />

        {/* Large Interactive Service List */}
        <div className="flex flex-col border-t border-white/10">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "py-8 sm:py-10 border-b border-white/10 transition-all duration-500 cursor-pointer relative group px-4 sm:px-8 rounded-xl",
                  isHovered ? "bg-white/[0.03]" : ""
                )}
              >
                {/* Active Background Glow Bar */}
                {isHovered && (
                  <motion.div
                    layoutId="activeServiceGlow"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-blue/15 via-white/[0.02] to-transparent pointer-events-none -z-10 border-l-4 border-brand-blue"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Number & Title */}
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span
                      className={cn(
                        "font-mono text-xl sm:text-2xl transition-colors duration-300",
                        isHovered ? "text-brand-accent font-bold" : "text-muted"
                      )}
                    >
                      {service.number}
                    </span>

                    <div className="flex items-center gap-4">
                      <div className={cn("p-2.5 rounded-xl border transition-colors", isHovered ? "bg-brand-blue/20 border-brand-blue text-white" : "bg-white/5 border-white/10 text-muted")}>
                        {ICON_MAP[service.icon]}
                      </div>
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white group-hover:text-brand-accent transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Description & Arrow */}
                  <div className="flex items-center gap-6 lg:max-w-md">
                    <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                        isHovered
                          ? "bg-brand-blue border-brand-blue text-white rotate-45 shadow-blue-glow"
                          : "border-white/10 text-muted group-hover:text-white group-hover:border-white/30"
                      )}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Deliverables Preview */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-2"
                    >
                      <span className="text-xs font-mono text-brand-accent uppercase tracking-widest mr-4 flex items-center">
                        KEY DELIVERABLES:
                      </span>
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90"
                        >
                          {item}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
