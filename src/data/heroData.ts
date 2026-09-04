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
  secondaryPortrait: "/designer-primary.png",
  bgImage: "/hero/background.jpg",
  availability: {
    status: "Open to Work",
    label: "Available for new projects",
    isAvailable: true,
  },
  roleCard: {
    title: "GRAPHIC",
    subtitle: "DESIGNER",
    category: "Visual Creative",
  },
  tools: [
    {
      id: "ps",
      name: "Photoshop",
      badge: "Ps",
      bg: "rgba(49, 168, 255, 0.2)",
      border: "rgba(49, 168, 255, 0.4)",
      color: "#31A8FF",
    },
    {
      id: "ai",
      name: "Illustrator",
      badge: "Ai",
      bg: "rgba(255, 154, 0, 0.2)",
      border: "rgba(255, 154, 0, 0.4)",
      color: "#FF9A00",
    },
    {
      id: "figma",
      name: "Figma",
      badge: "Fg",
      bg: "rgba(242, 78, 30, 0.2)",
      border: "rgba(242, 78, 30, 0.4)",
      color: "#F24E1E",
    },
  ],
  metrics: [
    {
      id: "exp",
      value: "5+",
      label: "Years Experience",
      description: "Designing with purpose since 2019",
      icon: "camera",
      accentColor: "#0066FF",
    },
    {
      id: "projects",
      value: "120+",
      label: "Projects Completed",
      description: "From branding to digital experiences",
      icon: "briefcase",
      accentColor: "#A855F7",
    },
    {
      id: "clients",
      value: "50+",
      label: "Happy Clients",
      description: "Brands that trust my creative vision",
      icon: "users",
      accentColor: "#EC4899",
    },
  ],
};
