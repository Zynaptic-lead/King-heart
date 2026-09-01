import { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    tagline: "Uncovering the Core Problem & Strategic Vision",
    description: "Deep dive into your brand core, target audience, competitive landscape, and strategic visual objectives to build a crystal-clear foundation.",
    deliverables: ["Brand Audit", "Competitive Landscape Analysis", "Creative Brief Alignment", "Visual Benchmarking"],
  },
  {
    number: "02",
    title: "EXPLORE",
    tagline: "Research, Moodboards & Concept Directions",
    description: "Translating strategic insights into tangible visual explorations. Developing raw moodboards, typography pairing studies, and initial visual concepts.",
    deliverables: ["Curated Moodboards", "Typography Pairing Concepts", "3 Distinct Visual Directions", "Color Palette Explorations"],
  },
  {
    number: "03",
    title: "CREATE",
    tagline: "Building the Visual System & Artwork",
    description: "Developing the selected concept direction into a cohesive, high-precision visual system including logo geometry, editorial layouts, motion graphics, and 3D assets.",
    deliverables: ["Vector Logo Construction", "Full Visual Identity System", "Key Visual Artworks", "3D & Motion Renderings"],
  },
  {
    number: "04",
    title: "REFINE",
    tagline: "Polishing, Testing & Final Deliverable Handoff",
    description: "Meticulous detail refinement, print proof testing, digital token export, and preparing structured master files ready for production and launch.",
    deliverables: ["Master Brand Guidelines PDF", "Vector & Raster Production Files", "Social & Motion Assets", "Client Handoff Package"],
  },
];
