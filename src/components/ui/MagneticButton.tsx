"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  onClick,
  href,
  variant = "glass",
  size = "md",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * 0.3; // subtle magnetic intensity
    const distanceY = (e.clientY - centerY) * 0.3;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-brand-blue text-white shadow-blue-glow hover:bg-brand-accent hover:shadow-blue-glow-lg border border-transparent",
    glass:
      "bg-white/[0.04] backdrop-blur-md border border-white/10 text-white hover:bg-white/[0.1] hover:border-brand-blue/50 hover:shadow-blue-glow",
    outline:
      "bg-transparent border border-white/20 text-white hover:border-brand-blue hover:text-brand-accent",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider",
    md: "px-6 py-3.5 text-sm tracking-wider",
    lg: "px-8 py-4 text-base tracking-wider",
  };

  const buttonContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "inline-flex items-center justify-center font-medium uppercase transition-all duration-300 rounded-full cursor-pointer group select-none relative overflow-hidden",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Light sheen highlight on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};
