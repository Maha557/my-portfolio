import { motion } from "framer-motion";

const stats = [
  { value: "5+",     label: "Projects Built"       },
  { value: "2",      label: "AI Certifications"    },
  { value: "3.02",   label: "CGPA"                 },
  { value: "3+",     label: "Years of Coding"      },
];

export function Stats() {
  return (
    <section className="relative z-10 py-10 border-y border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] } },
              }}
              className="flex flex-col items-center text-center gap-1 py-4"
            >
              <span
                className="text-4xl md:text-5xl font-bold text-primary"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.value}
              </span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase font-medium">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
