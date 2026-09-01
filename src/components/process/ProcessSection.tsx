"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/data/process";
import { GlassCard } from "@/components/ui/GlassCard";

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 border-t border-white/5 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// METHODOLOGY"
          title="THE DESIGN PROCESS"
          subtitle="A structured 4-stage creative workflow designed to minimize friction, eliminate ambiguity, and execute visionary visual systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col justify-between group hover:border-brand-blue/50">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-brand-blue group-hover:text-brand-accent transition-colors">
                      {step.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-brand-blue transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">
                    {step.title}
                  </h3>

                  <span className="text-xs font-mono text-brand-accent block mb-4">
                    {step.tagline}
                  </span>

                  <p className="text-xs text-muted font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest block mb-2">
                    DELIVERABLES
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {step.deliverables.map((item) => (
                      <span key={item} className="text-xs text-white/80 font-mono flex items-center gap-1.5">
                        <span className="text-brand-blue">›</span> {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
