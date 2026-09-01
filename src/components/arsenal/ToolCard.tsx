"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tool } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

// Brand SVG Path Renderers for applications
const ToolLogoSvg: React.FC<{ icon: string; color: string }> = ({ icon, color }) => {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold font-mono text-sm border shadow-inner transition-transform duration-300 group-hover:scale-110"
      style={{
        backgroundColor: `${color}15`,
        borderColor: `${color}40`,
        color: color,
      }}
    >
      {icon === "photoshop" && "Ps"}
      {icon === "illustrator" && "Ai"}
      {icon === "indesign" && "Id"}
      {icon === "after-effects" && "Ae"}
      {icon === "premiere-pro" && "Pr"}
      {icon === "figma" && "Fg"}
      {icon === "blender" && "Bl"}
      {icon === "cinema-4d" && "C4D"}
      {icon === "canva" && "Cn"}
    </div>
  );
};

export const ToolCard: React.FC<ToolCardProps> = ({ tool, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:border-brand-blue/50">
        <div>
          <div className="flex items-center justify-between mb-6">
            <ToolLogoSvg icon={tool.svgIconPath} color={tool.accentColor} />
            <span className="text-[10px] font-mono tracking-widest text-muted uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              {tool.masteryLevel}
            </span>
          </div>

          <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-brand-accent transition-colors mb-2">
            {tool.name}
          </h3>

          <p className="text-xs text-muted font-light leading-relaxed mb-4">
            {tool.description}
          </p>
        </div>

        <div className="pt-4 border-t border-white/5 mt-4">
          <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block mb-1">
            TYPICAL USAGE
          </span>
          <span className="text-xs text-white/80 font-mono tracking-tight">
            {tool.typicalUsage}
          </span>
        </div>
      </GlassCard>
    </motion.div>
  );
};
