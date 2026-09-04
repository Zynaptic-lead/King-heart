"use client";

import React from "react";
import Image from "next/image";
import { FolderKanban, Eye, MessageSquare, Plus, ArrowUpRight, Camera, User } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useProjects } from "@/context/ProjectContext";
import { useAuth } from "@/context/AuthContext";
import { AdminTab } from "./AdminSidebar";

interface AnalyticsOverviewProps {
  setActiveTab: (tab: AdminTab) => void;
}

export const AnalyticsOverview: React.FC<AnalyticsOverviewProps> = ({ setActiveTab }) => {
  const { projects } = useProjects();
  const { adminUser } = useAuth();

  return (
    <div className="flex flex-col gap-8">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <GlassCard className="p-6 flex items-start gap-4 border-white/15">
          <div className="p-3 rounded-xl bg-brand-blue/20 text-brand-accent border border-brand-blue/30">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-white">{projects.length}</span>
            <span className="text-xs font-mono text-muted uppercase">Published Projects</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6 flex items-start gap-4 border-white/15">
          <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Eye className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-white">4,820</span>
            <span className="text-xs font-mono text-muted uppercase">Monthly Impressions</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6 flex items-start gap-4 border-white/15">
          <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-white">12</span>
            <span className="text-xs font-mono text-muted uppercase">New Inquiries</span>
          </div>
        </GlassCard>
      </div>

      {/* PROMINENT OWNER PORTRAIT UPDATE BANNER */}
      <GlassCard className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-amber-400/40 bg-white/[0.03] relative overflow-hidden">
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-24 rounded-xl overflow-hidden border-2 border-amber-400 shrink-0 bg-white/5 flex items-center justify-center shadow-lg">
            {adminUser?.avatarUrl ? (
              <Image src={adminUser.avatarUrl} alt="Owner portrait" fill className="object-cover object-top" />
            ) : (
              <Image src="/designer-primary.png" alt="Owner portrait" fill className="object-cover object-top" />
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1 font-bold">
              ✦ OWNER PORTRAIT PHOTO
            </span>
            <h3 className="text-xl font-bold uppercase text-white tracking-tight mb-1">
              CHANGE HERO SECTION PROFILE PICTURE
            </h3>
            <p className="text-xs text-muted font-light leading-relaxed max-w-lg">
              Upload a new photo file from your device. Updates live across the website Hero section and Neon PostgreSQL database.
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab("profile")}
          className="px-6 py-3.5 rounded-xl bg-amber-500 text-black font-extrabold uppercase tracking-wider text-xs flex items-center gap-2 hover:bg-amber-400 transition-all duration-300 shrink-0 shadow-lg"
        >
          <Camera className="w-4 h-4" />
          <span>CHANGE OWNER PHOTO</span>
        </button>
      </GlassCard>

      {/* Quick Action Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="p-8 flex flex-col justify-between gap-6 border-white/15 group hover:border-amber-400/50 transition-colors">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">
              POST WORK
            </span>
            <h3 className="text-2xl font-bold uppercase text-white tracking-tight mb-2">
              PUBLISH A NEW DESIGN CASE STUDY
            </h3>
            <p className="text-xs text-muted font-light leading-relaxed">
              Upload multi-file artwork imagery, title, brand tags, and narrative specs. Posts appear live on the public showcase immediately.
            </p>
          </div>

          <button
            onClick={() => setActiveTab("post")}
            className="w-full py-3.5 rounded-xl bg-brand-blue text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-blue-glow group-hover:bg-brand-accent transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>CREATE PORTFOLIO POST</span>
          </button>
        </GlassCard>

        <GlassCard className="p-8 flex flex-col justify-between gap-6 border-white/15 group hover:border-brand-blue/50 transition-colors">
          <div>
            <span className="text-xs font-mono text-brand-accent uppercase tracking-widest block mb-2">
              PORTFOLIO ARCHIVE
            </span>
            <h3 className="text-2xl font-bold uppercase text-white tracking-tight mb-2">
              REVIEW & DELETE PUBLISHED WORK
            </h3>
            <p className="text-xs text-muted font-light leading-relaxed">
              Manage your published portfolio items, preview live links, or permanently delete old design project posts.
            </p>
          </div>

          <button
            onClick={() => setActiveTab("projects")}
            className="w-full py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
          >
            <span>MANAGE ALL PROJECTS</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </GlassCard>
      </div>
    </div>
  );
};
