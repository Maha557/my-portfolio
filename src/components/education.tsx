import { motion } from "framer-motion";

export function Education() {
  return (
    <section
      id="education"
      className="py-12 md:py-24 max-w-6xl mx-auto px-6"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-5 mb-8 md:mb-14"
      >
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Education
        </h2>

        <div className="flex-1 h-px bg-border max-w-xs" />
      </motion.div>

      {/* Education Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Left Side */}

          <div>
            <h3 className="text-3xl font-bold text-card-foreground mb-2">
              Bachelor of Computer Science
            </h3>

            <p className="text-lg font-medium text-foreground">
              University of Narowal
            </p>
          </div>

          {/* Right Side */}

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Nov 2022 – Jun 2026
            </span>

            <span className="px-4 py-2 rounded-full border border-primary/25 bg-primary/5 text-sm font-semibold text-foreground">
              CGPA: 3.02
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}