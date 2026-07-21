import { motion } from "framer-motion";

const categories = [
  {
    label: "AI / Machine Learning",
    accent: "primary",
    skills: [
      "AI / ML", "Deep Learning", "PyTorch", "TensorFlow", "CNN Models",
      "Scikit-learn", "Model Fine-Tuning", "Model Evaluation",
      "AI Model Deployment", "Multimodal AI Systems", "NLP Fundamentals",
      "Data Preprocessing",
    ],
  },
  {
    label: "Engineering & Tools",
    accent: "violet",
    skills: [
      "Python", "C++", "OOP", "FastAPI", "Docker", "CUDA", "OpenCV",
      "NumPy / SymPy", "Git & GitHub", "matplotlib / seaborn",
    ],
  },
  {
    label: "Web & Interface",
    accent: "sky",
    skills: [
      "HTML / Tailwind CSS", "React", "Next.js", "UI / UX Design",
      "API Integration",
    ],
  },
  {
    label: "Working Style",
    accent: "muted",
    skills: [
      "Problem-Solving", "Analytical Thinking", "Leadership",
      "Team Collaboration", "Time Management", "Documentation",
    ],
  },
];

// per-category badge style
const badgeClass: Record<string, string> = {
  primary:
    "border-primary/25 bg-primary/5 text-foreground hover:bg-primary/12 hover:border-primary/50",
  violet:
    "border-violet-400/25 bg-violet-500/5 text-foreground hover:bg-violet-500/10 hover:border-violet-400/50",
  sky:
    "border-sky-400/25 bg-sky-500/5 text-foreground hover:bg-sky-500/10 hover:border-sky-400/50",
  muted:
    "border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border",
};

const dotClass: Record<string, string> = {
  primary: "bg-primary",
  violet: "bg-violet-500",
  sky: "bg-sky-500",
  muted: "bg-muted-foreground/50",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6 w-full">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-14"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-foreground"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Skills
        </h2>
        <div className="h-[1px] flex-1 bg-border max-w-xs" />
      </motion.div>

      {/* Category grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.label}
            variants={cardItem}
            className="group p-6 bg-card border border-border rounded-none hover:border-primary/30 transition-all duration-300"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-5">
              <span className={`w-2 h-2 rounded-full shrink-0 ${dotClass[cat.accent]}`} />
              <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                {cat.label}
              </h3>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.25 }}
                  whileHover={{ y: -2 }}
                  className={`px-3 py-1.5 text-xs font-medium border rounded-none transition-all duration-200 cursor-default ${badgeClass[cat.accent]}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
