"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Shield } from "lucide-react";
import { KingHeartLogo } from "@/components/ui/KingHeartLogo";
import { MagneticButton } from "@/components/ui/MagneticButton";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Capabilities" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full max-w-full select-none ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group z-50">
          <KingHeartLogo size={38} className="group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white uppercase group-hover:text-amber-400 transition-colors">
              KING HEART
            </span>
            <span className="text-[9px] font-mono tracking-widest text-muted uppercase">
              GRAPHICS WORLD
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 px-6 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-white/80 hover:text-amber-400 transition-colors relative py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <MagneticButton href="#contact" variant="glass" size="sm" className="rounded-full">
            <span>START PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </MagneticButton>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/[0.08] border border-amber-400/50 text-amber-400 hover:text-white transition-colors z-50"
          aria-label="Toggle Mobile Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest border-b border-white/10 pb-3">
                MENU NAVIGATION
              </span>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-extrabold text-white uppercase tracking-tight hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted" />
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <MagneticButton
                href="#contact"
                variant="primary"
                size="lg"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center justify-center bg-brand-blue"
              >
                <span>HIRE KING HEART NOW</span>
              </MagneticButton>

              <Link
                href="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-amber-400 uppercase text-center flex items-center justify-center gap-1 py-2"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Studio Portal</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
