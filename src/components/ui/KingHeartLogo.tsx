"use client";

import React from "react";

interface KingHeartLogoProps {
  className?: string;
  size?: number;
}

export const KingHeartLogo: React.FC<KingHeartLogoProps> = ({ className, size = 36 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>
      </defs>

      {/* Crown Top */}
      <path
        d="M25 32 L35 44 L50 25 L65 44 L75 32 L72 50 L28 50 Z"
        fill="url(#goldGradient)"
      />
      <circle cx="25" cy="30" r="3" fill="#FFE066" />
      <circle cx="50" cy="23" r="3.5" fill="#FFE066" />
      <circle cx="75" cy="30" r="3" fill="#FFE066" />

      {/* Heart Outline */}
      <path
        d="M50 88 C20 68 15 48 30 38 C40 31 48 38 50 42 C52 38 60 31 70 38 C85 48 80 68 50 88 Z"
        stroke="url(#goldGradient)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* KH Monogram Text */}
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fill="url(#goldGradient)"
        fontSize="22"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="1"
      >
        KH
      </text>
    </svg>
  );
};
