"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Check, UploadCloud, User, Shield, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useAuth } from "@/context/AuthContext";

export const ProfileSettings: React.FC = () => {
  const { adminUser, updateProfile } = useAuth();
  const [name, setName] = useState(adminUser?.name || "King Heart");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(adminUser?.avatarUrl || null);
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAvatarFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setAvatarPreview(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!avatarPreview) return;

    setIsSaving(true);
    const success = await updateProfile(avatarPreview, name);
    setIsSaving(false);

    if (success) {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  return (
    <GlassCard className="p-8 sm:p-12 border-white/15 relative">
      <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              OWNER PORTRAIT & PROFILE SETTINGS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
            UPDATE DESIGNER PHOTO & AVATAR
          </h2>
        </div>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-8 max-w-xl">
        
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="relative w-36 h-44 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-white/5 shrink-0 flex items-center justify-center">
            {avatarPreview || adminUser?.avatarUrl ? (
              <Image
                src={avatarPreview || adminUser?.avatarUrl || "/designer-primary.png"}
                alt="Owner Avatar Preview"
                fill
                className="object-cover object-top"
              />
            ) : (
              <User className="w-12 h-12 text-muted" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-2 text-[9px] font-mono text-amber-400 uppercase font-bold">
              HERO PHOTO
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              CHANGE OWNER PROFILE PICTURE
            </span>
            <p className="text-xs text-muted font-light leading-relaxed">
              Upload a new photo from your device. This image will immediately update as your primary portrait across the Hero section and Admin Portal.
            </p>

            <label className="px-4 py-2.5 rounded-xl bg-brand-blue text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-accent transition-colors shadow-blue-glow w-fit mt-1">
              <Camera className="w-4 h-4" />
              <span>CHOOSE NEW PHOTO FILE</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarFile}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-muted uppercase tracking-wider">Designer Display Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm"
          />
        </div>

        {savedSuccess && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Profile picture & owner details saved successfully! Updated live in Neon PostgreSQL & Hero section.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSaving}
          className="w-full py-4 rounded-xl bg-amber-500 text-black font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-amber-400 transition-all duration-300 shadow-lg"
        >
          {isSaving ? (
            <span>SAVING PROFILE...</span>
          ) : (
            <>
              <Check className="w-4 h-4" />
              <span>SAVE PROFILE PICTURE LIVE NOW</span>
            </>
          )}
        </button>
      </form>
    </GlassCard>
  );
};
