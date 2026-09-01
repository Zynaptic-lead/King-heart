export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  creativeDirection: string;
  coverImage: string;
  secondaryImage: string;
  gallery: string[];
  services: string[];
  tools: string[];
  featured: boolean;
  layoutVariant?: "horizontal" | "vertical" | "full" | "editorial";
  colorPalette: { name: string; hex: string }[];
  typography: { role: string; font: string; sample: string }[];
  nextProjectSlug?: string;
}

export interface Tool {
  id: string;
  name: string;
  category: "Design & Editorial" | "3D & Motion" | "Video & UI";
  description: string;
  typicalUsage: string;
  masteryLevel: string; // e.g. "Primary Tool", "Advanced", "Specialized"
  accentColor: string;
  svgIconPath: string; // inline SVG rendering identifier or path
}

export interface Service {
  number: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  projectContext: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budgetRange: string;
  message: string;
}
