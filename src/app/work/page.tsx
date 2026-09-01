"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

const WORK_CATEGORIES = ["All", "Brand Identity", "Editorial Design", "3D & Motion", "Graphic Design"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = PROJECTS.filter((p) =>
    activeCategory === "All" ? true : p.category === activeCategory
  );

  return (
    <div className="pt-36 pb-24 px-4 sm:px-8 min-h-screen bg-background relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// ARCHIVE"
          title="SELECTED DESIGN WORK"
          subtitle="Explore the complete collection of brand identity architectures, 3D fluid motion graphics, editorial monographs, and experimental posters."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-16">
          {WORK_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 border",
                activeCategory === cat
                  ? "text-white border-brand-blue bg-brand-blue/20 shadow-blue-glow font-bold"
                  : "text-muted border-white/10 bg-white/[0.02] hover:border-white/20 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-12 gap-y-16 md:gap-y-24 gap-x-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
