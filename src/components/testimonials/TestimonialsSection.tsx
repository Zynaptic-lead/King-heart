"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TESTIMONIALS } from "@/data/testimonials";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 border-t border-white/5 relative bg-noise">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// ENDORSEMENTS"
          title="WHAT COLLABORATORS SAY"
          subtitle="Reflections from creative directors, press editors, and founders on visual execution and design impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col justify-between p-8 relative group hover:border-brand-blue/40">
                <Quote className="w-8 h-8 text-brand-blue/40 mb-6 group-hover:text-brand-accent transition-colors" />

                <p className="text-base text-white/90 font-light leading-relaxed italic mb-8">
                  "{testimonial.quote}"
                </p>

                <div className="pt-6 border-t border-white/10 flex flex-col gap-1">
                  <span className="text-sm font-bold uppercase text-white tracking-wide">
                    {testimonial.clientName}
                  </span>
                  <span className="text-xs font-mono text-brand-accent">
                    {testimonial.clientRole} — {testimonial.company}
                  </span>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest mt-1">
                    PROJECT: {testimonial.projectContext}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
