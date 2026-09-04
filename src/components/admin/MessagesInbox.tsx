"use client";

import React from "react";
import { MessageSquare, Mail, Calendar, DollarSign, Tag } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

interface MessageItem {
  id: string;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budgetRange: string;
  message: string;
  date: string;
}

const SAMPLE_MESSAGES: MessageItem[] = [
  {
    id: "msg-1",
    name: "Alex Rivera",
    email: "alex@riverastudio.com",
    company: "Rivera Luxury Goods",
    projectType: "Brand Identity",
    budgetRange: "$25k — $50k",
    message: "We are looking for a complete visual identity redesign for our high-end fragrance line. Loved your 3D motion work on King Heart!",
    date: "2026-09-04",
  },
  {
    id: "msg-2",
    name: "Sophie Bennett",
    email: "sophie@techflow.io",
    company: "TechFlow Labs",
    projectType: "3D & Motion Graphics",
    budgetRange: "$10k — $25k",
    message: "Hi King Heart, we need 3D product motion graphics for our upcoming launch event in Berlin. Are you available Q4 2026?",
    date: "2026-09-03",
  },
];

export const MessagesInbox: React.FC = () => {
  return (
    <GlassCard className="p-6 sm:p-10 border-white/15">
      <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              CLIENT INQUIRIES INBOX ({SAMPLE_MESSAGES.length})
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
            PROJECT BRIEFS & MESSAGES
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {SAMPLE_MESSAGES.map((msg) => (
          <div
            key={msg.id}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-colors flex flex-col gap-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-brand-blue/20 text-brand-accent flex items-center justify-center font-mono font-bold text-sm border border-brand-blue/30">
                  {msg.name.charAt(0)}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{msg.name}</span>
                  <a href={`mailto:${msg.email}`} className="text-xs font-mono text-amber-400 hover:underline">
                    {msg.email} {msg.company ? `(${msg.company})` : ""}
                  </a>
                </div>
              </div>

              <span className="text-[10px] font-mono text-muted flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {msg.date}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-md bg-brand-blue/20 text-brand-accent border border-brand-blue/30 flex items-center gap-1">
                <Tag className="w-3 h-3" /> {msg.projectType}
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <DollarSign className="w-3 h-3" /> Budget: {msg.budgetRange}
              </span>
            </div>

            <p className="text-sm text-white/90 font-light leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5 font-sans">
              "{msg.message}"
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};
