"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ExternalLink, RefreshCw, FolderKanban } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useProjects } from "@/context/ProjectContext";

export const ProjectListTable: React.FC = () => {
  const { projects, deleteProject, resetToDefault } = useProjects();

  return (
    <GlassCard className="p-6 sm:p-10 border-white/15">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FolderKanban className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              LIVE PUBLISHED WORK ({projects.length})
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
            MANAGE PORTFOLIO POSTS
          </h2>
        </div>

        <button
          onClick={() => {
            if (confirm("Reset published projects to initial default showcase?")) {
              resetToDefault();
            }
          }}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400 text-xs font-mono text-muted hover:text-white flex items-center gap-2 transition-colors w-fit"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-[10px] font-mono text-muted uppercase tracking-widest">
              <th className="py-3 px-4">PROJECT</th>
              <th className="py-3 px-4">CATEGORY</th>
              <th className="py-3 px-4">CLIENT</th>
              <th className="py-3 px-4">YEAR</th>
              <th className="py-3 px-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs font-mono">
            {projects.map((project) => (
              <tr key={project.slug} className="hover:bg-white/[0.02] transition-colors group">
                <td className="py-4 px-4 flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </span>
                </td>

                <td className="py-4 px-4 text-white/80">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    {project.category}
                  </span>
                </td>

                <td className="py-4 px-4 text-muted">{project.client}</td>
                <td className="py-4 px-4 text-amber-400">{project.year}</td>

                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/work/${project.slug}`}
                      target="_blank"
                      className="p-2 rounded-lg bg-brand-blue/20 text-brand-accent hover:bg-brand-blue hover:text-white transition-colors"
                      title="View Live Page"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => {
                        if (confirm(`Delete project post "${project.title}"?`)) {
                          deleteProject(project.slug);
                        }
                      }}
                      className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
};
