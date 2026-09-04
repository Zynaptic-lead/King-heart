"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { KingHeartLogo } from "@/components/ui/KingHeartLogo";
import { useAuth } from "@/context/AuthContext";

export default function AdminLoginPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("kingh10847@gmail.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const success = await login(email, password);
    if (success) {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid Email or Password. Default credentials: kingh10847@gmail.com / admin123");
    }
  };

  return (
    <div className="min-h-screen pt-36 pb-24 px-4 sm:px-8 flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <GlassCard className="p-8 sm:p-10 border-white/20 relative shadow-2xl">
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <div className="p-2 rounded-2xl bg-white/5 border border-amber-400/40 shadow-lg">
              <KingHeartLogo size={48} />
            </div>
            <h1 className="text-2xl font-extrabold text-white uppercase tracking-tight">
              ADMIN PORTAL LOGIN
            </h1>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> KING HEART GRAPHICS WORLD
            </span>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-6 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Admin Email</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="kingh10847@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm"
                />
                <Mail className="w-4 h-4 text-muted absolute left-3.5 top-4" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm"
                />
                <Lock className="w-4 h-4 text-muted absolute left-3.5 top-4" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-brand-accent transition-all duration-300 shadow-blue-glow mt-2"
            >
              <span>ACCESS DASHBOARD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-6 mt-6 border-t border-white/10 text-center flex flex-col gap-2 text-xs font-mono">
            <span className="text-muted">New Admin Member?</span>
            <Link href="/admin/register" className="text-amber-400 hover:underline font-bold uppercase">
              Create Admin Account (Passcode Required)
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
