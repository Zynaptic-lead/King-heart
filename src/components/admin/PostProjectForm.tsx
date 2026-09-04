"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, UploadCloud, X, Sparkles, Image as ImageIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useProjects } from "@/context/ProjectContext";
import { Project } from "@/types";

const CATEGORIES = ["Brand Identity", "Editorial Design", "3D & Motion", "Graphic Design", "UI Visual Design"];

interface PostProjectFormProps {
  onSuccess?: () => void;
}

export const PostProjectForm: React.FC<PostProjectFormProps> = ({ onSuccess }) => {
  const { addProject } = useProjects();
  const [publishedSuccess, setPublishedSuccess] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [creativeDirection, setCreativeDirection] = useState("");
  const [servicesInput, setServicesInput] = useState("Brand Architecture, Logo System, Packaging");
  const [toolsInput, setToolsInput] = useState("Adobe Illustrator, Figma, Photoshop");

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newImages: string[] = [];
    let readCount = 0;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          newImages.push(event.target.result as string);
        }
        readCount++;
        if (readCount === files.length) {
          setUploadedImages((prev) => [...prev, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const services = servicesInput.split(",").map((s) => s.trim()).filter(Boolean);
    const tools = toolsInput.split(",").map((t) => t.trim()).filter(Boolean);

    const defaultFallback = "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600&auto=format&fit=crop";

    const coverImage = uploadedImages.length > 0 ? uploadedImages[0] : defaultFallback;
    const secondaryImage = uploadedImages.length > 1 ? uploadedImages[1] : coverImage;
    const gallery = uploadedImages.length > 0 ? uploadedImages : [coverImage, secondaryImage];

    const newProject: Project = {
      slug: slug || `project-${Date.now()}`,
      title: title || "Untitled Design Project",
      category,
      year: year || "2026",
      client: client || "Private Client",
      description: description || "Custom brand identity system designed by King Heart Graphics World.",
      overview: overview || "Comprehensive strategic visual identity created to elevate brand positioning.",
      challenge: challenge || "Creating a distinctive visual presence that stands out across print and digital media.",
      solution: solution || "We engineered an adaptive logo system paired with high-contrast editorial typography.",
      creativeDirection: creativeDirection || "High-contrast luxury, bold typography, electric blue & gold lighting.",
      coverImage,
      secondaryImage,
      gallery,
      services: services.length ? services : ["Brand Architecture", "Design System"],
      tools: tools.length ? tools : ["Adobe Illustrator", "Figma"],
      featured: true,
      layoutVariant: "horizontal",
      colorPalette: [
        { name: "Obsidian Black", hex: "#050505" },
        { name: "King Gold", hex: "#D4AF37" },
        { name: "Electric Blue", hex: "#0066FF" },
      ],
      typography: [
        { role: "Headline Font", font: "Neue Haas Grotesk", sample: title.toUpperCase() },
      ],
    };

    addProject(newProject);
    setPublishedSuccess(true);

    setTimeout(() => {
      setPublishedSuccess(false);
      if (onSuccess) onSuccess();
    }, 2000);
  };

  return (
    <GlassCard className="p-8 sm:p-12 relative border-white/15">
      <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              POST WORK TO PUBLIC SITE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
            CREATE NEW PORTFOLIO POST
          </h2>
        </div>
      </div>

      {publishedSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-16 text-center flex flex-col items-center justify-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow-blue-glow">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold uppercase text-white">WORK PUBLISHED LIVE!</h3>
          <p className="text-sm text-muted">
            Your new project is now visible on the public website home page and portfolio archive.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          
          <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <label className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
                  PROJECT ARTWORK MEDIA (UPLOAD FILES) *
                </label>
              </div>
              <span className="text-[10px] font-mono text-muted">
                {uploadedImages.length} Image(s) Added
              </span>
            </div>

            <label className="relative flex flex-col items-center justify-center w-full py-8 border-2 border-dashed border-white/20 rounded-2xl cursor-pointer hover:border-brand-blue hover:bg-white/[0.03] transition-all group">
              <UploadCloud className="w-10 h-10 text-muted group-hover:text-brand-accent transition-colors mb-2" />
              <span className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                CLICK TO UPLOAD ARTWORK FILES
              </span>
              <span className="text-xs text-muted font-mono">
                Select 1 or multiple image files (PNG, JPG, WEBP)
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            {uploadedImages.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {uploadedImages.map((img, idx) => (
                  <div key={idx} className="relative h-28 rounded-xl overflow-hidden border border-white/15 group">
                    <Image src={img} alt={`Uploaded ${idx + 1}`} fill className="object-cover" />
                    {idx === 0 && (
                      <span className="absolute top-1 left-1 px-2 py-0.5 rounded bg-brand-blue text-[9px] font-mono text-white font-bold uppercase">
                        Cover
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute top-1 right-1 p-1 rounded-full bg-black/80 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                      title="Remove image"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Project Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. King Heart Luxury Identity"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white focus:outline-none focus:border-brand-blue text-sm font-mono"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Client Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. King Heart Cybernetics"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Year *</label>
              <input
                type="text"
                required
                placeholder="2026"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm font-mono"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-muted uppercase tracking-wider">Short Description (Card Subtitle) *</label>
            <textarea
              required
              rows={2}
              placeholder="Brief summary displayed on project cards..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Project Objective</label>
              <textarea
                rows={3}
                placeholder="Detailed overview of client goals..."
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">The Challenge</label>
              <textarea
                rows={3}
                placeholder="Design challenges solved..."
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm resize-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Services Delivered (Comma Separated)</label>
              <input
                type="text"
                placeholder="Brand Architecture, Logo System, Packaging"
                value={servicesInput}
                onChange={(e) => setServicesInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm font-mono"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">Software Tools Used (Comma Separated)</label>
              <input
                type="text"
                placeholder="Adobe Illustrator, Figma, Photoshop"
                value={toolsInput}
                onChange={(e) => setToolsInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue text-sm font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-3 hover:bg-brand-accent transition-all duration-300 shadow-blue-glow mt-4"
          >
            <Plus className="w-5 h-5" />
            <span>PUBLISH WORK TO PUBLIC SITE NOW</span>
          </button>
        </form>
      )}
    </GlassCard>
  );
};
