"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Globe, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden bg-background">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400">
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
                className="text-base sm:text-lg text-muted font-light leading-relaxed mb-10 max-w-md"
              >
                Have a project, campaign or idea in mind? Let's turn it into something people remember. Reach out via email, phone, or WhatsApp.
              </motion.p>
            </div>

            <GlassCard className="flex flex-col gap-5 p-6 sm:p-8 border-white/15">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-blue/20 text-brand-accent border border-brand-blue/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-widest block">EMAIL</span>
                    <a href="mailto:kingh10847@gmail.com" className="text-sm font-mono text-white font-bold hover:text-amber-400 transition-colors">
                      kingh10847@gmail.com
                    </a>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted" />
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-widest block">TELEPHONE</span>
                    <a href="tel:09031840503" className="text-sm font-mono text-white font-bold hover:text-amber-400 transition-colors">
                      09031840503
                    </a>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted" />
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-widest block">WHATSAPP</span>
                    <a
                      href="https://wa.me/2348104209859"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-white font-bold hover:text-emerald-400 transition-colors"
                    >
                      08104209859
                    </a>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-muted uppercase">SOCIAL CHANNELS:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-amber-400 hover:underline uppercase"
                  >
                    FB: King Heart Graphics
                  </a>
                  <span className="text-muted">·</span>
                  <a
                    href="https://tiktok.com/@king_heart47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-pink-400 hover:underline uppercase"
                  >
                    TikTok: @king_heart47
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-12 relative border-white/15">
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
                      BRIEF TRANSMITTED
                    </h3>
                    <p className="text-muted text-sm max-w-sm font-light">
                      Thank you for reaching out to King Heart Graphics World. I will review your project brief and respond shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase text-white hover:bg-white/20 transition-colors mt-4"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold uppercase text-white tracking-wider pb-4 border-b border-white/10">
                      PROJECT PLANNER BRIEF
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-muted uppercase tracking-wider">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Rivera"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue transition-all text-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-muted uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. alex@brand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Company / Brand Name</label>
                      <input
                        type="text"
                        placeholder="e.g. King Heart Project"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue transition-all text-sm"
                      />
                    </div>

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

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Project Details / Message *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me about your brand goals, timeline, and vision..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-3 hover:bg-brand-accent transition-all duration-300 shadow-blue-glow disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <span>SEND BRIEF NOW</span>
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
