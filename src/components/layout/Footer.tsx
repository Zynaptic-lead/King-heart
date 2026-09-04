import React from "react";
import Link from "next/link";
import { KingHeartLogo } from "@/components/ui/KingHeartLogo";
import { ArrowUpRight, Heart, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-12 px-4 sm:px-8 relative overflow-hidden select-none">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <KingHeartLogo size={42} />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider text-white uppercase group-hover:text-amber-400 transition-colors">
                  KING HEART
                </span>
                <span className="text-[10px] font-mono tracking-widest text-muted uppercase">
                  GRAPHICS WORLD
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted font-light leading-relaxed max-w-sm">
              Where creativity meets excellence. Designing bold visual identities, 3D motion artwork, editorial publications, and visual architecture.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Global Remote Freelance & Contract</span>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-mono text-muted uppercase tracking-widest">
              NAVIGATION
            </span>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <Link href="#work" className="text-white/80 hover:text-white transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Designer
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-xs font-mono text-muted uppercase tracking-widest">
              DIRECT CONTACT
            </span>
            <div className="flex flex-col gap-2 text-sm font-mono">
              <a
                href="mailto:kingh10847@gmail.com"
                className="text-white hover:text-amber-400 transition-colors"
              >
                kingh10847@gmail.com
              </a>
              <a href="tel:09031840503" className="text-muted hover:text-white transition-colors">
                Tel: 09031840503
              </a>
              <a
                href="https://wa.me/2348104209859"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1"
              >
                WhatsApp: 08104209859 <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted hover:text-white transition-colors"
              >
                Facebook / King Heart Graphics
              </a>
              <a
                href="https://tiktok.com/@king_heart47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted hover:text-white transition-colors"
              >
                TikTok / @king_heart47
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} KING HEART GRAPHICS WORLD. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admin/login"
              className="px-3 py-1 rounded-md bg-white/5 border border-white/10 hover:border-amber-400 text-amber-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Shield className="w-3 h-3" />
              <span>Admin Portal</span>
            </Link>

            <span className="text-[10px]">VER 2.5 — LUXURY GLASS EDITION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
