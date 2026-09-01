"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

export const FeaturedWorkSection: React.FC = () => {
  return (
    <section id="work" className="py-24 sm:py-36 px-4 sm:px-8 border-t border-white/5 relative bg-noise">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// SELECTED PORTFOLIO"
          title="FEATURED CREATIVE WORK"
          subtitle="An art gallery showcase of brand identity architectures, 3D fluid motion design, editorial publications, and experimental poster visualizers."
        />

        {/* Asymmetrical Projects Grid Showcase */}
        <div className="grid grid-cols-12 gap-y-16 md:gap-y-24 gap-x-8 mb-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* CTA to Full Work Archive */}
        <div className="flex justify-center pt-8">
          <MagneticButton href="/work" variant="glass" size="lg">
            <span>Explore Complete Archive</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
