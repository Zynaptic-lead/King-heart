"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  PlusCircle,
  FolderKanban,
  MessageSquare,
  LogOut,
  ExternalLink,
  Shield,
} from "lucide-react";
import { KingHeartLogo } from "@/components/ui/KingHeartLogo";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

export type AdminTab = "overview" | "post" | "projects" | "messages";

interface AdminSidebarProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, setActiveTab }) => {
  const { adminUser, logout } = useAuth();

  const NAV_ITEMS: { id: AdminTab; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Dashboard Overview", icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: "post", label: "Post New Work", icon: <PlusCircle className="w-4 h-4" /> },
    { id: "projects", label: "Manage Projects", icon: <FolderKanban className="w-4 h-4" /> },
    { id: "messages", label: "Client Messages", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-full lg:w-64 glass-panel p-6 flex flex-col justify-between border-r border-white/10 rounded-2xl h-full min-h-[500px]">
      <div>
        <div className="pb-6 border-b border-white/10 flex items-center gap-3 mb-6">
          <div className="p-1 rounded-xl bg-white/5 border border-amber-400/40">
            <KingHeartLogo size={32} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-white uppercase tracking-wider">
              KING HEART
            </span>
            <span className="text-[9px] font-mono text-amber-400 tracking-widest uppercase flex items-center gap-1">
              <Shield className="w-2.5 h-2.5" /> ADMIN PORTAL
            </span>
          </div>
        </div>

        {adminUser && (
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 mb-6 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">{adminUser.name}</span>
              <span className="text-[10px] font-mono text-muted">{adminUser.email}</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        )}

        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left",
                  isActive
                    ? "bg-brand-blue text-white font-bold shadow-blue-glow border border-brand-accent"
                    : "text-muted hover:text-white hover:bg-white/5"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between text-xs font-mono text-muted hover:text-amber-400 transition-colors uppercase p-2"
        >
          <span>View Public Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={logout}
          className="w-full py-2.5 px-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};
