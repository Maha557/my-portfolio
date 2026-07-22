import { motion } from "framer-motion";

const categories = [
  {
    label: "AI / Machine Learning",
    accent: "primary",
    skills: [
      "AI / ML",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "CNN Models",
      "Scikit-learn",
      "Model Fine-Tuning",
      "Model Evaluation",
      "AI Model Deployment",
      "Multimodal AI Systems",
      "NLP Fundamentals",
      "Data Preprocessing",
    ],
  },
  {
    label: "Engineering & Tools",
    accent: "violet",
    skills: [
      "Python",
      "C++",
      "OOP",
      "FastAPI",
      "Docker",
      "CUDA",
      "OpenCV",
      "NumPy / SymPy",
      "Git & GitHub",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    label: "Web & Interface",
    accent: "sky",
    skills: [
      "HTML",
      "Tailwind CSS",
      "React",
      "Next.js",
      "UI / UX Design",
      "API Integration",
    ],
  },
  {
    label: "Working Style",
    accent: "muted",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Leadership",
      "Team Collaboration",
      "Time Management",
      "Documentation",
    ],
  },
];

const badgeClass: Record<string, string> = {
  primary:
    "border-primary/30 bg-primary/5 text-foreground hover:bg-primary/15 hover:border-primary",
  violet:
    "border-violet-400/30 bg-violet-500/5 text-foreground hover:bg-violet-500/15 hover:border-violet-400",
  sky:
    "border-sky-400/30 bg-sky-500/5 text-foreground hover:bg-sky-500/15 hover:border-sky-400",
  muted:
    "border-border bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground",
};

const dotClass: Record<string, string> = {
  primary: "bg-primary",
  violet: "bg-violet-500",
  sky: "bg-sky-500",
  muted: "bg-muted-foreground",
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-12 md:py-24 max-w-6xl mx-auto px-6"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-5 mb-8 md:mb-14"
      >
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Skills
        </h2>

        <div className="h-[1px] flex-1 bg-border max-w-xs" />
      </motion.div>

      {/* Grid */}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.label}
            variants={cardItem}
            whileHover={{
              y: -6,
            }}
            className="bg-card border border-border rounded-2xl p-5 md:p-7 shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
          >
            {/* Title */}

            <div className="flex items-center gap-3 mb-6">
              <span
                className={`w-3 h-3 rounded-full ${dotClass[cat.accent]}`}
              />

              <h3 className="text-xl font-bold uppercase tracking-wide">
                {cat.label}
              </h3>
            </div>

            {/* Skills */}

            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.25,
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                  }}
                  className={`px-4 py-2 rounded-full border text-sm md:text-base font-medium cursor-default transition-all duration-200 ${badgeClass[cat.accent]}`}
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