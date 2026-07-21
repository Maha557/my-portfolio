import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BIG   = 110;  // same size as in splash
const SMALL = 38;   // navbar size

interface Props { onLanded: () => void }

export function FlyingAvatar({ onLanded }: Props) {
  const [fly, setFly] = useState(false);

  // Centre of viewport (where splash photo was)
  const vw = typeof window !== "undefined" ? window.innerWidth  : 1280;
  const vh = typeof window !== "undefined" ? window.innerHeight : 720;

  const startLeft = vw / 2 - BIG / 2;
  const startTop  = vh / 2 - BIG / 2 - 60; // slightly above center (photo was above name)

  // Navbar avatar top-left corner: padding 24px, navbar height 68px
  const endLeft = 24;
  const endTop  = (68 - SMALL) / 2;  // = 15

  useEffect(() => {
    // Very short hold so user sees it, then fly
    const t = setTimeout(() => setFly(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="fixed z-[120] pointer-events-none"
      style={{ borderRadius: "50%", left: startLeft, top: startTop }}
      initial={{ width: BIG, height: BIG, opacity: 0 }}
      animate={
        fly
          ? { left: endLeft, top: endTop, width: SMALL, height: SMALL, opacity: [1, 1, 0] }
          : { width: BIG, height: BIG, opacity: 1 }
      }
      transition={
        fly
          ? { duration: 0.72, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0.25, ease: "easeOut" }
      }
      onAnimationComplete={() => { if (fly) onLanded(); }}
    >
      {/* Spinning ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #a78bfa, #f472b6, #6366f1)",
          padding: fly ? 2 : 3,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </motion.div>

      {/* Profile photo */}
      <img
        src="/profile.jpg"
        alt="Maham Shezadi"
        className="absolute rounded-full object-cover object-top"
        style={{ inset: fly ? 2 : 3, width: `calc(100% - ${fly ? 4 : 6}px)`, height: `calc(100% - ${fly ? 4 : 6}px)` }}
      />

      {/* Glow — only when big */}
      {!fly && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: -14,
            background: "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
}
