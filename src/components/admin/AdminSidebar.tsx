"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  PlusCircle,
  FolderKanban,
  MessageSquare,
  User,
  LogOut,
  ExternalLink,
  ShieldCheck,
  Menu,
  X,
  Camera,
} from "lucide-react";
import { KingHeartLogo } from "@/components/ui/KingHeartLogo";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

export type AdminTab = "overview" | "post" | "projects" | "messages" | "profile";

interface AdminSidebarProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, setActiveTab }) => {
  const { adminUser, logout } = useAuth();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const NAV_ITEMS: { id: AdminTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: "overview", label: "Dashboard Overview", icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: "post", label: "Post New Work", icon: <PlusCircle className="w-4 h-4" />, badge: "NEW" },
    { id: "projects", label: "Manage Projects", icon: <FolderKanban className="w-4 h-4" /> },
    { id: "messages", label: "Client Messages", icon: <MessageSquare className="w-4 h-4" /> },
    { id: "profile", label: "Owner Photo & Profile", icon: <Camera className="w-4 h-4" /> },
  ];

  const handleSelectTab = (tab: AdminTab) => {
    setActiveTab(tab);
    setMobileDrawerOpen(false);
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-1 rounded-lg bg-white/5 border border-amber-400/40">
            <KingHeartLogo size={28} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-extrabold text-white uppercase tracking-wider">
              KING HEART
            </span>
            <span className="text-[8px] font-mono text-amber-400 tracking-widest uppercase">
              STUDIO EXECUTIVE PORTAL
            </span>
          </div>
        </div>

        <button
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="p-2 rounded-xl bg-white/5 border border-amber-400/50 text-amber-400 hover:text-white transition-colors"
        >
          {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileDrawerOpen && (
        <div
          onClick={() => setMobileDrawerOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
        />
      )}

      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#09090b] border-r border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 select-none shadow-2xl overflow-y-auto",
          mobileDrawerOpen ? "translate-x-0 pt-20 lg:pt-6" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div>
          <div className="pb-6 border-b border-white/10 flex items-center gap-3 mb-6 hidden lg:flex">
            <div className="p-1.5 rounded-xl bg-white/5 border border-amber-400/40 shadow-lg">
              <KingHeartLogo size={36} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-white tracking-wider uppercase">
                KING HEART
              </span>
              <span className="text-[9px] font-mono text-amber-400 tracking-widest uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> EXECUTIVE PORTAL
              </span>
            </div>
          </div>

          {adminUser && (
            <div
              onClick={() => handleSelectTab("profile")}
              className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/60 cursor-pointer transition-all mb-6 flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-400/50 bg-white/10 flex items-center justify-center">
                {adminUser.avatarUrl ? (
                  <Image src={adminUser.avatarUrl} alt={adminUser.name} fill className="object-cover object-top" />
                ) : (
                  <Image src="/designer-primary.png" alt={adminUser.name} fill className="object-cover object-top" />
                )}
              </div>

              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                  {adminUser.name}
                </span>
                <span className="text-[9px] font-mono text-amber-400/80 truncate">
                  Change Photo & Profile →
                </span>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest px-3 mb-2">
              ADMINISTRATIVE MENU
            </span>

            <nav className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectTab(item.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left group",
                      isActive
                        ? "bg-brand-blue text-white font-bold shadow-blue-glow border border-brand-accent"
                        : "text-white/70 hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(isActive ? "text-white" : "text-muted group-hover:text-amber-400")}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-amber-400 text-black">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between text-xs font-mono text-muted hover:text-amber-400 transition-colors uppercase p-2"
          >
            <span>Public Showcase Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={logout}
            className="w-full py-3 px-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};
