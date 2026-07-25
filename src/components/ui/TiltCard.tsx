"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees */
  maxTilt?: number;
  /** Scale applied on hover */
  scale?: number;
  /** Show a soft light that follows the cursor */
  glare?: boolean;
  /** Border radius class applied to the glare overlay — should match the child's rounding */
  glareRounded?: string;
};

/**
 * Wraps any content with a subtle 3D tilt that follows the cursor,
 * built with plain CSS 3D transforms + spring physics (no Three.js needed
 * for lightweight hover effects like this).
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  glareRounded = "rounded-xl",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), springConfig);

  const glareBackground = useTransform([x, y], ([xv, yv]: number[]) =>
    `radial-gradient(circle at ${xv * 100}% ${yv * 100}%, rgba(217,169,78,0.16), transparent 60%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{ background: glareBackground }}
          className={`pointer-events-none absolute inset-0 ${glareRounded}`}
        />
      )}
    </motion.div>
  );
}
