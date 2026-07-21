import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  alphaDir: number;
  speed: number;
  angle: number;
  twinkleSpeed: number;
  colorIdx: number;
}

// Vibrant multi-color palettes per theme
const DARK_COLORS = [
  "255,70%,72%",   // indigo
  "280,65%,70%",   // violet
  "320,60%,68%",   // pink
  "190,80%,65%",   // cyan
  "45,90%,65%",    // gold
  "160,65%,60%",   // teal
];

const LIGHT_COLORS = [
  "340,75%,50%",   // deep rose
  "270,65%,52%",   // purple
  "210,75%,50%",   // cobalt
  "25,85%,50%",    // amber
  "160,60%,40%",   // emerald
  "300,60%,48%",   // magenta
];

export function SparklesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    function isDark() {
      return document.documentElement.classList.contains("dark");
    }

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      buildStars();
    }

    function buildStars() {
      if (!canvas) return;
      const count = Math.floor((canvas.width * canvas.height) / 6500);
      stars = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        alpha: Math.random(),
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        speed: Math.random() * 0.5 + 0.15,
        angle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.014 + 0.005,
        colorIdx: i % 6,
      }));
    }

    function getColor(s: Star) {
      const palette = isDark() ? DARK_COLORS : LIGHT_COLORS;
      return `hsl(${palette[s.colorIdx]})`;
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dark = isDark();

      for (const s of stars) {
        // Drift
        s.x += Math.cos(s.angle) * s.speed * 0.016;
        s.y += Math.sin(s.angle) * s.speed * 0.007;

        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        // Twinkle
        s.alpha += s.alphaDir * s.twinkleSpeed;
        if (s.alpha >= 1) { s.alpha = 1; s.alphaDir = -1; }
        if (s.alpha <= 0.04) { s.alpha = 0.04; s.alphaDir = 1; }

        ctx.save();
        // Light mode: stronger opacity so sparkles are visible
        ctx.globalAlpha = dark ? s.alpha * 0.75 : s.alpha * 0.9;

        const color = getColor(s);

        if (s.r > 0.9) {
          // 4-pointed sparkle star
          const len = s.r * 5;
          ctx.translate(s.x, s.y);
          ctx.strokeStyle = color;
          ctx.lineWidth = s.r * 0.55;
          ctx.lineCap = "round";
          ctx.shadowBlur = dark ? 8 : 6;
          ctx.shadowColor = color;
          ctx.beginPath();
          ctx.moveTo(0, -len); ctx.lineTo(0, len);
          ctx.moveTo(-len, 0); ctx.lineTo(len, 0);
          ctx.stroke();
          // Center glow dot
          ctx.shadowBlur = dark ? 14 : 10;
          ctx.beginPath();
          ctx.arc(0, 0, s.r * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        } else {
          // Glowing dot with radial gradient
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
          grd.addColorStop(0, color);
          grd.addColorStop(1, "transparent");
          ctx.shadowBlur = dark ? 6 : 4;
          ctx.shadowColor = color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    // Watch for theme class changes
    const observer = new MutationObserver(() => {});
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const ro = new ResizeObserver(resize);
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden
    />
  );
}
