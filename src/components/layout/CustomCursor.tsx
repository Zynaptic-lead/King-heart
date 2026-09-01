"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "view") {
          setCursorText("VIEW");
          setIsHovered(true);
        } else if (type === "drag") {
          setCursorText("DRAG");
          setIsHovered(true);
        } else {
          setCursorText(null);
          setIsHovered(true);
        }
      } else if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setCursorText(null);
        setIsHovered(true);
      } else {
        setCursorText(null);
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Primary Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand-accent rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? (cursorText ? 0 : 0.5) : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Ring / Text Bubble */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-brand-blue/60 pointer-events-none z-40 flex items-center justify-center bg-brand-blue/10 backdrop-blur-sm"
        animate={{
          x: mousePosition.x - (cursorText ? 40 : isHovered ? 24 : 16),
          y: mousePosition.y - (cursorText ? 40 : isHovered ? 24 : 16),
          width: cursorText ? 80 : isHovered ? 48 : 32,
          height: cursorText ? 80 : isHovered ? 48 : 32,
          backgroundColor: cursorText ? "rgba(0, 102, 255, 0.85)" : isHovered ? "rgba(0, 102, 255, 0.15)" : "rgba(255, 255, 255, 0.02)",
          borderColor: cursorText ? "#0066FF" : isHovered ? "#2F8CFF" : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {cursorText && (
          <span className="text-[11px] font-mono font-bold tracking-widest text-white uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};
