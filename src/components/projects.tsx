import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI-Based Bone Abnormality Detection Using Medical Imaging",
    date: "Oct 2025 – Jun 2026",
    description: "Developed deep learning models with Python & PyTorch. Preprocessed large-scale medical imaging datasets. Evaluated performance with classification metrics. Integrated with FastAPI backend for inference.",
    tags: ["Python", "PyTorch", "FastAPI", "Medical Imaging"],
    github: "https://github.com/Maha557/Bone-abnormality-project"
  },
  {
    title: "Skin Disease Detection and Classification Using Deep Learning",
    description: "Deep learning model classifying 8 skin diseases from labeled images. Built interactive Streamlit app for real-time prediction. Evaluated with accuracy, precision, recall, F1-score.",
    tags: ["Deep Learning", "Streamlit", "Classification"]
  },
  {
    title: "Responsive Image Gallery Website",
    description: "HTML/CSS/JavaScript responsive gallery with filtering categories.",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Banking System Using C++ and OOP",
    description: "Database structure, customer records, data validation, OOP concepts.",
    tags: ["C++", "OOP"]
  },
  {
    title: "Network Architecture (Cisco)",
    description: "Designed secure and scalable banking network.",
    tags: ["Networking", "Cisco"]
  }
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 50,
    x: i % 2 === 0 ? -30 : 30,
    rotate: i % 2 === 0 ? -3 : 3,
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        <motion.div
          className="h-[1px] flex-1 bg-border ml-4 max-w-xs"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.13 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group p-8 bg-card border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-colors flex flex-col h-full relative overflow-hidden"
          >
            {/* shine sweep on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ x: "-100%", opacity: 0 }}
              whileHover={{ x: "100%", opacity: 1 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(105deg, transparent 40%, hsl(var(--primary)/0.06) 50%, transparent 60%)",
              }}
            />

            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif font-bold text-card-foreground group-hover:text-primary transition-colors pr-4">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                    aria-label="View on GitHub"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
              </div>

              {project.date && (
                <span className="text-xs font-medium text-primary/80 mb-3 block uppercase tracking-wider">
                  {project.date}
                </span>
              )}

              <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-start mt-auto pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <motion.span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground"
                      whileHover={{ color: "hsl(var(--primary))", scale: 1.08 }}
                      transition={{ duration: 0.15 }}
                    >
                      #{tag.toLowerCase().replace(/\s+/g, '')}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
