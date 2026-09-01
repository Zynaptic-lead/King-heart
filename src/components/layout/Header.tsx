"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { KingHeartLogo } from "@/components/ui/KingHeartLogo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Logo / Brand Name */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="p-1 rounded-xl bg-white/5 border border-white/10 group-hover:border-amber-400/50 transition-colors">
              <KingHeartLogo size={34} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-wider text-white uppercase group-hover:text-amber-400 transition-colors">
                KING HEART
              </span>
              <span className="text-[9px] font-mono text-amber-400/90 tracking-[0.2em] uppercase">
                GRAPHICS WORLD
              </span>
            </div>
          </Link>

          {/* Desktop Glass Navigation */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-1 px-6 py-2 rounded-full border transition-all duration-500",
              isScrolled
                ? "bg-black/70 backdrop-blur-xl border-white/15 shadow-glass"
                : "bg-white/[0.03] backdrop-blur-md border-white/10"
            )}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 rounded-full relative",
                    isActive ? "text-white font-semibold" : "text-muted hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton href="/contact" variant="primary" size="sm">
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors pointer-events-auto"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Glass Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl flex flex-col justify-between px-6 py-24 md:hidden"
          >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
              <div className="flex items-center gap-3">
                <KingHeartLogo size={32} />
                <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                  KING HEART GRAPHICS WORLD
                </span>
              </div>

              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-3xl font-bold uppercase tracking-tight text-white hover:text-brand-blue transition-colors flex items-center justify-between group"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-6 h-6 text-muted group-hover:text-brand-accent transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="max-w-sm mx-auto w-full pt-8 border-t border-white/10 flex flex-col gap-4">
              <div className="flex justify-between items-center text-xs font-mono text-muted uppercase">
                <span>WHERE CREATIVITY MEETS EXCELLENCE</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-brand-blue text-white font-bold text-center uppercase text-sm tracking-wider shadow-blue-glow"
              >
                Start a Project ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
