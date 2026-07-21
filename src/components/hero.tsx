import { motion } from "framer-motion";
import { Download } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-6 w-full relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl">

          {/* Space for flying avatar */}
          <div style={{ height: 80 }} />

          {/* Name label — above heading */}
          <motion.div variants={item} className="mb-6">
            <span
              className="text-primary font-semibold tracking-[0.18em] uppercase"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)" }}
            >
              Maham Shezadi
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            AI/ML Engineer
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, hsl(var(--primary)) 0%, #a78bfa 45%, #f472b6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &amp; CS Graduate
            </span>
          </motion.h1>

          {/* Location row */}
          <motion.div variants={item} className="flex items-center gap-4 mb-7">
            <span className="h-[1px] w-16 bg-border" />
            <span className="text-xs text-muted-foreground tracking-widest uppercase font-mono">
              Lahore, Pakistan
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
          >
            Building deep learning models for real-world impact — from medical imaging
            to multimodal AI. Turning research into deployable solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-primary-foreground transition-all duration-300 relative overflow-hidden"
              style={{ background: "hsl(var(--primary))" }}
            >
              <span className="relative z-10">View Projects</span>
              <span
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"
                style={{ background: "hsl(var(--primary) / 0.8)" }}
              />
            </a>

            <a
              href="/maham-cv.pdf"
              download="Maham_Shezadi_CV.pdf"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-medium border border-primary/50 hover:border-primary hover:bg-primary/8 text-primary transition-all duration-300"
            >
              <Download size={15} strokeWidth={2} />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium border border-border hover:border-primary/40 hover:bg-primary/5 text-foreground transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={item}
            className="mt-16 flex items-center gap-3 text-muted-foreground/50"
          >
            <motion.span
              className="block w-[1px] h-10 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
              animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[10px] tracking-[0.25em] uppercase font-mono">Scroll</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
