import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number; x: number; y: number;
  size: number; duration: number; delay: number; opacity: number;
}

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  const particles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: (i * 137.508) % 100,
    y: (i * 83.721) % 100,
    size: (i % 4) + 1.5,
    duration: 2.5 + (i % 3),
    delay: (i % 5) * 0.3,
    opacity: 0.15 + (i % 4) * 0.1,
  }));

  const name = "MAHAM SHEZADI";

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 900);
    }, 3800);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: "linear-gradient(135deg, #06090f 0%, #0d1226 50%, #0a0a1a 100%)" }}
          exit={{ y: "-100%", opacity: 0.8 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Glowing orb top-left */}
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Glowing orb bottom-right */}
          <motion.div
            className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Floating particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`, top: `${p.y}%`,
                width: p.size, height: p.size,
                background: p.id % 3 === 0
                  ? "rgba(99,102,241,0.7)"
                  : p.id % 3 === 1
                  ? "rgba(139,92,246,0.6)"
                  : "rgba(167,139,250,0.5)",
              }}
              animate={{ opacity: [0, p.opacity + 0.2, 0], y: [0, -18, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* ── Main content ── */}
          <div className="relative z-10 flex flex-col items-center">

            {/* PROFILE PHOTO — appears first above name */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: 110, height: 110 }}
            >
              {/* Spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #a78bfa, #f472b6, #6366f1)",
                  padding: 3,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full" style={{ background: "#06090f" }} />
              </motion.div>

              {/* Photo */}
              <img
                src="/profile.jpg"
                alt="Maham Shezadi"
                className="absolute rounded-full object-cover object-top"
                style={{ inset: 3, width: "calc(100% - 6px)", height: "calc(100% - 6px)" }}
              />

              {/* Outer glow pulse */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: -14,
                  background: "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)",
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* PORTFOLIO label */}
            <motion.p
              className="text-indigo-400/60 text-xs tracking-[0.5em] uppercase mb-7 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Portfolio
            </motion.p>

            {/* Name — letter by letter */}
            <div className="flex justify-center overflow-hidden mb-3">
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 7vw, 4.5rem)",
                    fontWeight: 700,
                    color: "#f1f5f9",
                    letterSpacing: "0.12em",
                    width: char === " " ? "0.5em" : undefined,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Divider line */}
            <motion.div
              className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "340px" }}
              transition={{ delay: 2.1, duration: 0.7, ease: "easeOut" }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="mt-4 text-indigo-400 text-sm md:text-base tracking-[0.35em] uppercase font-light"
            >
              AI / ML Engineer &nbsp;&middot;&nbsp; CS Graduate
            </motion.p>

            {/* Progress bar */}
            <div className="mt-10 w-52 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 3.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
