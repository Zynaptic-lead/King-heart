"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = false,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        "glass-panel rounded-2xl relative overflow-hidden p-6 sm:p-8",
        hoverEffect && "glass-panel-hover group",
        glow && "before:absolute before:inset-0 before:bg-brand-blue/10 before:blur-2xl before:-z-10",
        className
      )}
      {...props}
    >
      {/* Top micro reflection line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
