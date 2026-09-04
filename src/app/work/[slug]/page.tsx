"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useProjects } from "@/context/ProjectContext";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const { getProjectBySlug } = useProjects();
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-36 pb-24 px-4 sm:px-8 min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-white uppercase tracking-widest mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.05] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted font-light max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        <GlassCard className="p-8 mb-16 border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs">
            <div>
              <span className="text-muted block mb-1 uppercase tracking-wider">CLIENT</span>
              <span className="text-white font-bold text-sm">{project.client}</span>
            </div>
            <div>
              <span className="text-muted block mb-1 uppercase tracking-wider">YEAR</span>
              <span className="text-white font-bold text-sm">{project.year}</span>
            </div>
            <div>
              <span className="text-muted block mb-1 uppercase tracking-wider">SERVICES</span>
              <span className="text-white font-bold text-sm">{project.services.join(", ")}</span>
            </div>
            <div>
              <span className="text-muted block mb-1 uppercase tracking-wider">TOOLS USED</span>
              <span className="text-white font-bold text-sm">{project.tools.join(", ")}</span>
            </div>
          </div>
        </GlassCard>

        <div className="relative w-full h-[380px] sm:h-[600px] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white border-l-2 border-brand-blue pl-4">
              CREATIVE DIRECTION
            </h2>
            <p className="text-sm text-muted font-light leading-relaxed">
              {project.creativeDirection}
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-10">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
                THE OBJECTIVE
              </h3>
              <p className="text-base text-muted font-light leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
                THE CHALLENGE
              </h3>
              <p className="text-base text-muted font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
                THE SOLUTION
              </h3>
              <p className="text-base text-muted font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="flex flex-col gap-8 mb-20">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
              ARTWORK GALLERY & ASSETS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10"
                >
                  <Image
                    src={img}
                    alt={`${project.title} Gallery asset ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-muted uppercase">Ready to start a similar project?</span>
            <span className="text-xl font-bold text-white uppercase">Let's build your brand together.</span>
          </div>

          <MagneticButton href="/contact" variant="primary" size="lg">
            <span>HIRE KING HEART NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </article>
  );
}
