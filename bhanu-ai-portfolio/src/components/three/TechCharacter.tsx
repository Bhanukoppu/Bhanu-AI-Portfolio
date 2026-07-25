"use client";

import React from "react";

export default function TechCharacterScene({ className }: { className?: string }) {
  return (
    <div className={className} style={{ height: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>

        <rect x="20" y="60" rx="12" ry="12" width="180" height="110" fill="url(#g1)" />
        <rect x="55" y="24" rx="10" ry="10" width="110" height="72" fill="#075985" />

        <circle cx="80" cy="58" r="8" fill="#fff">
          <animate attributeName="cx" dur="3s" values="78;82;78" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="58" r="8" fill="#fff">
          <animate attributeName="cx" dur="3s" values="138;142;138" repeatCount="indefinite" />
        </circle>

        <rect x="95" y="110" width="30" height="10" rx="4" fill="#fde68a">
          <animateTransform attributeName="transform" type="translate" dur="2s" values="0 0;0 -6;0 0" repeatCount="indefinite" />
        </rect>

        <g transform="translate(0,0)">
          <rect x="50" y="140" width="40" height="16" rx="6" fill="#083344" />
          <rect x="130" y="140" width="40" height="16" rx="6" fill="#083344" />
        </g>
      </svg>
    </div>
  );
}
