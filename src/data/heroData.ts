export interface HeroData {
  eyebrow: string;
  headline: {
    line1: string;
    line2: string;
    line3: string;
    accentWord: string;
  };
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  primaryPortrait: string;
  secondaryPortrait: string;
  bgImage: string;
  availability: {
    status: string;
    label: string;
    isAvailable: boolean;
  };
  roleCard: {
    title: string;
    subtitle: string;
    category: string;
  };
  tools: {
    id: string;
    name: string;
    badge: string;
    bg: string;
    border: string;
    color: string;
  }[];
  metrics: {
    id: string;
    value: string;
    label: string;
    description: string;
    icon: "camera" | "briefcase" | "users";
    accentColor: string;
  }[];
}

export const HERO_DATA: HeroData = {
  eyebrow: "✦ Crafting Visual Stories. Building Brands.",
  headline: {
    line1: "Design That",
    line2: "Speaks Before",
    line3: "You Do",
    accentWord: "Speaks Before",
  },
  subtitle:
    "Hi, I'm King Heart — a graphic designer and visual storyteller crafting powerful brands, 3D motion graphics, and digital experiences that leave a lasting impact.",
  primaryCta: {
    label: "VIEW PORTFOLIO",
    href: "#work",
  },
  secondaryCta: {
    label: "HIRE ME",
    href: "/contact",
  },
  primaryPortrait: "/designer-primary.png",
  secondaryPortrait: "/designer-secondary.png",
  bgImage: "/hero-bg.png",
  availability: {
    status: "Available for Q3/Q4 Projects",
    label: "Open for freelance & contracts",
    isAvailable: true,
  },
  roleCard: {
    title: "Lead Visual Designer",
    subtitle: "Brand Identity & 3D Motion",
    category: "Design & Creative Direction",
  },
  tools: [
    {
      id: "figma",
      name: "Figma",
      badge: "UI/UX",
      bg: "#1E1E1E",
      border: "rgba(255,255,255,0.1)",
      color: "#F24E1E",
    },
    {
      id: "blender",
      name: "Blender",
      badge: "3D",
      bg: "#1E1E1E",
      border: "rgba(255,255,255,0.1)",
      color: "#EA7600",
    },
    {
      id: "photoshop",
      name: "Photoshop",
      badge: "Raster",
      bg: "#1E1E1E",
      border: "rgba(255,255,255,0.1)",
      color: "#31A8FF",
    },
  ],
  metrics: [
    {
      id: "projects",
      value: "120+",
      label: "Projects Completed",
      description: "Brand identities, 3D assets, and digital campaigns",
      icon: "briefcase",
      accentColor: "#10B981",
    },
    {
      id: "clients",
      value: "45+",
      label: "Global Clients",
      description: "Startups, agencies, and independent creators",
      icon: "users",
      accentColor: "#00E8FF",
    },
  ],
};