"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const layout = project.layoutVariant || "horizontal";

  const cardVariants = {
    horizontal: "col-span-12 lg:col-span-12 flex flex-col lg:flex-row gap-8 items-stretch",
    vertical: "col-span-12 md:col-span-6 flex flex-col gap-6",
    editorial: "col-span-12 md:col-span-6 flex flex-col gap-6 lg:translate-y-12",
    full: "col-span-12 flex flex-col gap-6",
  };

  const imageHeightClasses = {
    horizontal: "h-[350px] sm:h-[500px] lg:w-3/5",
    vertical: "h-[400px] sm:h-[550px] w-full",
    editorial: "h-[400px] sm:h-[550px] w-full",
    full: "h-[450px] sm:h-[650px] w-full",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group relative", cardVariants[layout])}
    >
      {/* Image Container with Custom Cursor Trigger */}
      <Link
        href={`/work/${project.slug}`}
        className={cn(
          "relative overflow-hidden rounded-2xl glass-panel group-hover:border-brand-blue/40 transition-colors duration-500 block",
          imageHeightClasses[layout]
        )}
        data-cursor="view"
      >
        {/* Background Image with Scale Hover */}
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        />

        {/* Liquid Glass Overlay & Subtle Blue Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Floating Category Pill */}
        <div className="absolute top-6 left-6 z-10">
          <span className="glass-pill px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-white uppercase border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Project Number */}
        <div className="absolute bottom-6 right-6 z-10 font-mono text-xs text-white/60 tracking-widest">
          0{index + 1} // {project.year}
        </div>
      </Link>

      {/* Project Specs & Description */}
      <div
        className={cn(
          "flex flex-col justify-center gap-4 z-10",
          layout === "horizontal" ? "lg:w-2/5 p-4 lg:p-6" : "p-2"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-brand-accent tracking-widest uppercase">
            CLIENT: {project.client}
          </span>
          <span className="text-xs font-mono text-muted">{project.year}</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-brand-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted text-sm sm:text-base font-light line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Services Badges */}
        <div className="flex flex-wrap gap-2 py-2">
          {project.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="text-[11px] font-mono text-white/70 px-2.5 py-1 rounded bg-white/5 border border-white/5"
            >
              {service}
            </span>
          ))}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white uppercase group-hover:text-brand-accent transition-colors pt-2"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};
