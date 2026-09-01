"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Send, CheckCircle2, Mail, MapPin, Globe } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactFormData } from "@/types";

const PROJECT_TYPES = [
  "Brand Identity",
  "3D & Motion Graphics",
  "Editorial & Print",
  "Digital Experience / UI",
  "Art Direction",
  "Other / Custom Commission",
];

const BUDGET_RANGES = [
  "$5k — $10k",
  "$10k — $25k",
  "$25k — $50k",
  "$50k+",
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    projectType: PROJECT_TYPES[0],
    budgetRange: BUDGET_RANGES[1],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate frontend form submission handler ready for Resend/Formspree API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden bg-background">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent">
                  // INITIATE COMMISSION
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.98] mb-6"
              >
                LET'S MAKE <br />
                <span className="text-gradient-blue">SOMETHING</span> <br />
                MEMORABLE<span className="text-brand-blue">.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-muted font-light leading-relaxed mb-12 max-w-md"
              >
                Have a project, campaign or idea in mind? Let's turn it into something people remember.
              </motion.p>
            </div>

            {/* Direct Details Glass Box */}
            <GlassCard className="flex flex-col gap-6 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-brand-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest block">EMAIL INQUIRIES</span>
                  <a href="mailto:hello@valerienoir.design" className="text-sm font-mono text-white font-bold hover:text-brand-accent transition-colors">
                    hello@valerienoir.design
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-muted">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest block">STUDIO LOCATION</span>
                  <span className="text-sm font-mono text-white font-medium">Paris, France // Remote Worldwide</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-muted">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest block">AVAILABILITY</span>
                  <span className="text-sm font-mono text-emerald-400 font-medium">Accepting Q3 / Q4 2026 Projects</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-12 relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 text-center flex flex-col items-center justify-center gap-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-blue/20 border border-brand-blue flex items-center justify-center text-brand-accent shadow-blue-glow">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold uppercase text-white tracking-tight">
                      MESSAGE TRANSMITTED
                    </h3>
                    <p className="text-muted text-sm max-w-sm font-light">
                      Thank you for reaching out. I will review your project brief and reply within 24–48 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase text-white hover:bg-white/20 transition-colors mt-4"
                    >
                      Send Another Brief
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold uppercase text-white tracking-wider pb-4 border-b border-white/10">
                      PROJECT PLANNER BRIEF
                    </h3>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-muted uppercase tracking-wider">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Elena Rostova"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-sans text-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-muted uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. elena@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Company / Brand */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Company / Brand (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Nexus Cybernetics"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-sans text-sm"
                      />
                    </div>

                    {/* Project Type Selector */}
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Project Type</label>
                      <div className="flex flex-wrap gap-2">
                        {PROJECT_TYPES.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-3.5 py-2 rounded-lg text-xs font-mono uppercase transition-all border ${
                              formData.projectType === type
                                ? "bg-brand-blue/20 border-brand-blue text-white shadow-blue-glow font-bold"
                                : "bg-white/[0.02] border-white/10 text-muted hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Range Selector */}
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Estimated Budget (USD)</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {BUDGET_RANGES.map((budget) => (
                          <button
                            type="button"
                            key={budget}
                            onClick={() => setFormData({ ...formData, budgetRange: budget })}
                            className={`py-2.5 px-3 rounded-lg text-xs font-mono text-center transition-all border ${
                              formData.budgetRange === budget
                                ? "bg-brand-blue/20 border-brand-blue text-white shadow-blue-glow font-bold"
                                : "bg-white/[0.02] border-white/10 text-muted hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Details */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Project Details / Message *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me about your goals, timelines, and visual expectations..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-sans text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-3 hover:bg-brand-accent transition-all duration-300 shadow-blue-glow disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <span>START A PROJECT</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
