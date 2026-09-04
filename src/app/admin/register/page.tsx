"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail, User, Key, ArrowRight, ShieldAlert, AlertCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { KingHeartLogo } from "@/components/ui/KingHeartLogo";
import { useAuth } from "@/context/AuthContext";

export default function AdminRegisterPage() {
  const { register, isAuthenticated } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const res = await register(name, email, password, accessKey);
    if (res.success) {
      router.push("/admin/dashboard");
    } else {
      setError(res.error || "Failed to register admin account.");
    }
  };

  return (
    <div className="min-h-screen pt-36 pb-24 px-4 sm:px-8 flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <GlassCard className="p-8 sm:p-10 border-white/20 relative shadow-2xl">
          <div className="flex flex-col items-center text-center gap-3 mb-6">
            <div className="p-2 rounded-2xl bg-white/5 border border-amber-400/40 shadow-lg">
              <KingHeartLogo size={48} />
            </div>
            <h1 className="text-2xl font-extrabold text-white uppercase tracking-tight">
              REGISTER ADMIN ACCOUNT
            </h1>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5" /> AUTHORIZED MEMBERS ONLY
            </span>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-6 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Full Name *</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. King Heart"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm"
                />
                <User className="w-4 h-4 text-muted absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Admin Email *</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="kingh10847@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm"
                />
                <Mail className="w-4 h-4 text-muted absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Password *</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm"
                />
                <Lock className="w-4 h-4 text-muted absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">Admin Security Passcode *</label>
                <span className="text-[10px] font-mono text-muted">Key: KINGHEART2026</span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Enter KINGHEART2026"
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-amber-400/50 text-amber-400 placeholder:text-white/20 focus:outline-none focus:border-amber-400 text-sm font-mono"
                />
                <Key className="w-4 h-4 text-amber-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-brand-accent transition-all duration-300 shadow-blue-glow mt-3"
            >
              <span>CREATE ADMIN ACCOUNT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-5 mt-5 border-t border-white/10 text-center flex flex-col gap-1 text-xs font-mono">
            <span className="text-muted">Already registered?</span>
            <Link href="/admin/login" className="text-brand-accent hover:underline font-bold uppercase">
              Log in to Admin Dashboard
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
