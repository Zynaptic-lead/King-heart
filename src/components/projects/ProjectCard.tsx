"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, Eye } from "lucide-react";
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
    horizontal: "h-[380px] sm:h-[520px] lg:w-3/5",
    vertical: "h-[420px] sm:h-[560px] w-full",
    editorial: "h-[420px] sm:h-[560px] w-full",
    full: "h-[480px] sm:h-[680px] w-full",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group relative", cardVariants[layout])}
    >
      <Link
        href={`/work/${project.slug}`}
        className={cn(
          "relative overflow-hidden rounded-3xl glass-panel border border-white/15 group-hover:border-amber-400/60 transition-all duration-500 block shadow-2xl",
          imageHeightClasses[layout]
        )}
        data-cursor="view"
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-brand-blue/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
          <span className="glass-pill px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-white uppercase border border-white/20 bg-black/40 backdrop-blur-md shadow-lg">
            {project.category}
          </span>
        </div>

        <div className="absolute top-6 right-6 z-20">
          <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider text-amber-400 uppercase bg-amber-400/10 border border-amber-400/40 backdrop-blur-md flex items-center gap-1.5 animate-pulse shadow-glass">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>CASE STUDY INSIDE</span>
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 pointer-events-none">
          <div className="px-6 py-3 rounded-full bg-brand-blue/90 border border-brand-accent text-white font-mono text-xs uppercase tracking-widest flex items-center gap-3 shadow-blue-glow-lg backdrop-blur-xl">
            <Eye className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>CLICK TO OPEN FULL CASE STUDY & GALLERY</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 text-xs font-mono text-white/90">
          <span className="px-3 py-1 rounded-lg bg-black/60 border border-white/15 backdrop-blur-md flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-brand-accent" />
            <span>{project.gallery.length} High-Res Artwork Assets</span>
          </span>
        </div>

        <div className="absolute bottom-6 right-6 z-20 font-mono text-xs text-white/70 tracking-widest bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10">
          0{index + 1} // {project.year}
        </div>
      </Link>

      <div
        className={cn(
          "flex flex-col justify-center gap-4 z-10",
          layout === "horizontal" ? "lg:w-2/5 p-4 lg:p-6" : "p-2"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-amber-400 tracking-widest uppercase">
            CLIENT: {project.client}
          </span>
          <span className="text-xs font-mono text-muted">{project.year}</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted text-sm sm:text-base font-light line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 py-1">
          {project.services.slice(0, 4).map((service) => (
            <span
              key={service}
              className="text-[11px] font-mono text-white/80 px-2.5 py-1 rounded-md bg-white/5 border border-white/10"
            >
              {service}
            </span>
          ))}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/15 text-xs font-mono font-bold tracking-widest text-white uppercase group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300 w-fit mt-2 shadow-glass"
        >
          <span>EXPLORE CASE STUDY</span>
          <div className="w-6 h-6 rounded-full bg-amber-400 text-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};
