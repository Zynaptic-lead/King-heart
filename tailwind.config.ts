import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: {
          DEFAULT: "#0A0A0A",
          elevated: "#121212",
          glass: "rgba(255, 255, 255, 0.04)",
        },
        brand: {
          blue: "#0066FF",
          accent: "#2F8CFF",
          glow: "rgba(0, 102, 255, 0.25)",
        },
        muted: "#8A8A8A",
        borderGlass: "rgba(255, 255, 255, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backdropBlur: {
        glass: "24px",
      },
      animation: {
        "glow-pulse": "glowPulse 8s ease-in-out infinite alternate",
        "float-slow": "floatSlow 12s ease-in-out infinite alternate",
        "marquee-slow": "marquee 35s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%": { opacity: "0.4", transform: "scale(1)" },
          "100%": { opacity: "0.8", transform: "scale(1.15)" },
        },
        floatSlow: {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "100%": { transform: "translateY(-20px) rotate(4deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "blue-glow": "0 0 40px -5px rgba(0, 102, 255, 0.35)",
        "blue-glow-lg": "0 0 80px 10px rgba(0, 102, 255, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
