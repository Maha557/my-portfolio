import { motion } from "framer-motion";

/* Floating orb particles — same vibe as splash, adapted for both themes */
const orbs = [
  { top: "-15%", left: "-10%",  w: 520, h: 520, delay: 0,   dur: 7  },
  { top: "auto", left: "auto", right: "-12%", bottom: "-12%", w: 480, h: 480, delay: 1.2, dur: 9 },
  { top: "35%",  left: "60%",  w: 320, h: 320, delay: 2,   dur: 8  },
];

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 137.508) % 100}%`,
  top:  `${(i * 83.721)  % 100}%`,
  size: (i % 4) + 2,
  dur:  3.5 + (i % 4) * 0.8,
  delay:(i % 6) * 0.45,
  color: i % 3 === 0 ? "primary" : i % 3 === 1 ? "violet" : "rose",
}));

export function AmbientBg() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>

      {/* Dot grid — dark: indigo dots, light: rose/mauve dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary) / 0.22) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Glowing orbs */}
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top:    o.top,
            left:   o.left,
            right:  (o as any).right,
            bottom: (o as any).bottom,
            width:  o.w,
            height: o.h,
            background:
              i === 1
                ? "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 70%)"
                : "radial-gradient(circle, hsl(var(--primary) / 0.14) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
        />
      ))}

      {/* Floating glowing particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left:   p.left,
            top:    p.top,
            width:  p.size,
            height: p.size,
            background:
              p.color === "primary"
                ? "hsl(var(--primary) / 0.75)"
                : p.color === "violet"
                ? "hsl(270 65% 60% / 0.65)"
                : "hsl(340 60% 62% / 0.60)",
            boxShadow:
              p.color === "primary"
                ? "0 0 6px hsl(var(--primary) / 0.6)"
                : p.color === "violet"
                ? "0 0 6px hsl(270 65% 60% / 0.5)"
                : "0 0 6px hsl(340 60% 62% / 0.45)",
          }}
          animate={{
            opacity: [0, 0.85, 0],
            y:       [0, -22, 0],
            scale:   [0.5, 1.1, 0.5],
          }}
          transition={{
            duration: p.dur,
            delay:    p.delay,
            repeat:   Infinity,
            ease:     "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
