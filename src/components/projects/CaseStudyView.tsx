"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Project } from "@/types";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { PROJECTS } from "@/data/projects";

interface CaseStudyViewProps {
  project: Project;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project }) => {
  const nextProject = PROJECTS.find((p) => p.slug === project.nextProjectSlug) || PROJECTS[0];

  return (
    <article className="min-h-screen pt-32 pb-24 px-4 sm:px-8 bg-background relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-blue/15 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </Link>
        </motion.div>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-accent">
                {project.category} // CASE STUDY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.95]"
            >
              {project.title}
            </motion.h1>
          </div>

          {/* Project Meta Bar */}
          <div className="lg:col-span-4">
            <GlassCard className="grid grid-cols-2 gap-4 p-6">
              <div>
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest block mb-1">CLIENT</span>
                <span className="text-sm font-bold text-white uppercase">{project.client}</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest block mb-1">YEAR</span>
                <span className="text-sm font-mono text-brand-accent">{project.year}</span>
              </div>

              <div className="col-span-2 pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest block mb-2">SERVICES</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.services.map((svc) => (
                    <span key={svc} className="text-[11px] font-mono text-white/80 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Main Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] sm:h-[650px] w-full rounded-3xl overflow-hidden glass-panel mb-20 border border-white/10"
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Overview & Creative Direction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-accent uppercase block mb-3">
                01 // PROJECT OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight mb-4">
                THE OBJECTIVE
              </h2>
              <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <span className="text-xs font-mono tracking-widest text-brand-accent uppercase block mb-3">
                02 // THE CHALLENGE
              </span>
              <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <span className="text-xs font-mono tracking-widest text-brand-accent uppercase block mb-3">
                03 // DESIGN SOLUTION
              </span>
              <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard className="p-8">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-widest block mb-4">
                CREATIVE DIRECTION
              </span>
              <p className="text-base text-white/90 font-light leading-relaxed mb-6">
                "{project.creativeDirection}"
              </p>

              <span className="text-xs font-mono text-muted uppercase tracking-widest block mb-3">
                SOFTWARE ARSENAL USED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">
                    {tool}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Secondary Spotlight Image */}
            <div className="relative h-72 rounded-2xl overflow-hidden glass-panel border border-white/10">
              <Image
                src={project.secondaryImage}
                alt={`${project.title} detail`}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Color Palette & Typography Section */}
        <div className="py-16 border-y border-white/10 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Color Swatches */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono text-brand-accent uppercase tracking-widest block mb-2">
                  04 // VISUAL SYSTEM
                </span>
                <h3 className="text-2xl font-bold uppercase text-white tracking-tight">
                  COLOR PALETTE ARCHITECTURE
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.colorPalette.map((color) => (
                  <div key={color.hex} className="flex flex-col gap-2">
                    <div
                      className="h-24 rounded-xl border border-white/10 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs font-bold text-white uppercase">{color.name}</span>
                    <span className="text-xs font-mono text-muted uppercase">{color.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Pairing */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono text-brand-accent uppercase tracking-widest block mb-2">
                  TYPOGRAPHY SPECIFICATION
                </span>
                <h3 className="text-2xl font-bold uppercase text-white tracking-tight">
                  EDITORIAL TYPE SYSTEM
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {project.typography.map((type) => (
                  <GlassCard key={type.role} className="p-4 flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-brand-accent uppercase">{type.role} — {type.font}</span>
                    <span className="text-lg font-bold text-white tracking-tight uppercase">{type.sample}</span>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Gallery Showcase */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-brand-accent uppercase tracking-widest block mb-2">
              05 // EXHIBITION GALLERY
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight">
              FINAL VISUAL DELIVERABLES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((imgUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden glass-panel border border-white/10 group"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} gallery item ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-muted uppercase tracking-widest block mb-2">
              NEXT CASE STUDY
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="text-2xl sm:text-4xl font-bold uppercase text-white hover:text-brand-accent transition-colors flex items-center gap-4"
            >
              <span>{nextProject.title}</span>
              <ArrowUpRight className="w-6 h-6 text-brand-blue" />
            </Link>
          </div>

          <MagneticButton href="/work" variant="glass" size="md">
            <span>View All Projects</span>
          </MagneticButton>
        </div>
      </div>
    </article>
  );
};
