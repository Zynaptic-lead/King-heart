"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolCard } from "@/components/arsenal/ToolCard";
import { CREATIVE_TOOLS } from "@/data/tools";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Design & Editorial", "3D & Motion", "Video & UI"] as const;

export const CreativeArsenalSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredTools = CREATIVE_TOOLS.filter((tool) =>
    activeCategory === "All" ? true : tool.category === activeCategory
  );

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 border-t border-white/5 relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// DIGITAL TOOLKIT"
          title="THE CREATIVE ARSENAL"
          subtitle="A specialized suite of industry-standard visual design, 3D simulation, kinetic motion, and publishing software engineered for high-precision creative execution."
        />

        {/* Category Filtering Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 relative border",
                activeCategory === cat
                  ? "text-white border-brand-blue bg-brand-blue/20 shadow-blue-glow font-bold"
                  : "text-muted border-white/10 bg-white/[0.02] hover:border-white/20 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
