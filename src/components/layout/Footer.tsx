"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check, Mail, Phone, MessageSquare } from "lucide-react";
import { KingHeartLogo } from "@/components/ui/KingHeartLogo";

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState("");

  const email = "kingh10847@gmail.com";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="p-1 rounded-xl bg-white/5 border border-amber-400/30">
                  <KingHeartLogo size={42} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight uppercase text-white">
                    KING HEART
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 tracking-[0.2em] uppercase">
                    GRAPHICS WORLD
                  </span>
                </div>
              </Link>
              <p className="text-muted text-sm font-light max-w-sm leading-relaxed mb-4">
                Senior Visual Creative & Graphic Design Studio. Building iconic brand identity systems, 3D motion artwork, and high-impact digital experiences.
              </p>
              <span className="text-xs font-mono text-amber-400 tracking-wider block">
                — WHERE CREATIVITY MEETS EXCELLENCE —
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-muted pt-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Global Commissions 2026</span>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-2">
              // Navigation
            </span>
            <Link href="/" className="text-muted hover:text-white transition-colors text-sm uppercase font-medium w-fit">
              Home
            </Link>
            <Link href="/work" className="text-muted hover:text-white transition-colors text-sm uppercase font-medium w-fit">
              Selected Work
            </Link>
            <Link href="/about" className="text-muted hover:text-white transition-colors text-sm uppercase font-medium w-fit">
              About Studio
            </Link>
            <Link href="/contact" className="text-muted hover:text-white transition-colors text-sm uppercase font-medium w-fit">
              Start Project
            </Link>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-2">
              // Direct Inquiries
            </span>
            
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-sm sm:text-base">{email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-blue text-muted hover:text-white transition-colors"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex flex-col gap-1.5 text-xs font-mono text-muted">
              <span>Tel: <a href="tel:09031840503" className="text-white hover:text-amber-400">09031840503</a></span>
              <span>WhatsApp: <a href="https://wa.me/2348104209859" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">08104209859</a></span>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-400 hover:underline uppercase flex items-center gap-1"
              >
                <span>FB: King Heart Graphics</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://tiktok.com/@king_heart47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-pink-400 hover:underline uppercase flex items-center gap-1"
              >
                <span>TikTok: @king_heart47</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            © {new Date().getFullYear()} KING HEART GRAPHICS WORLD. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            <span>Designed with intention. Built with precision.</span>
            {timeString && <span className="ml-4 text-brand-accent">{timeString}</span>}
          </div>
        </div>
      </div>
    </footer>
  );
};
