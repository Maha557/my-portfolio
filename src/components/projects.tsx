import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Based Bone Abnormality Detection Using Medical Imaging",
    date: "Oct 2025 – Jun 2026",
    description:
      "Developed deep learning models using Python and PyTorch for automated bone abnormality detection. Preprocessed medical imaging datasets, evaluated model performance with classification metrics, and integrated the trained model with a FastAPI backend for real-time inference.",
    tags: ["Python", "PyTorch", "FastAPI", "Medical Imaging"],
    github: "https://github.com/Maha557/Bone-abnormality-project",
  },
  {
    title: "Skin Disease Detection and Classification",
    description:
      "Built a deep learning model capable of classifying eight skin diseases from labeled images. Developed an interactive Streamlit application for real-time prediction and evaluated the model using accuracy, precision, recall and F1-score.",
    tags: ["Deep Learning", "Streamlit", "Classification"],
  },
  {
    title: "Responsive Image Gallery Website",
    description:
      "Designed and developed a fully responsive image gallery using HTML, CSS and JavaScript featuring category filtering and a clean user interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Maha557/Image_Gallery-",
  },
  {
    title: "Banking System Using C++ & OOP",
    description:
      "Implemented a banking management system using Object-Oriented Programming concepts including customer management, transactions and data validation.",
    tags: ["C++", "OOP"],
  },
  {
    title: "Network Architecture (Cisco)",
    description:
      "Designed a secure and scalable banking network architecture using Cisco Packet Tracer with routing, switching and security concepts.",
    tags: ["Networking", "Cisco"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
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
          Projects
        </h2>

        <div className="flex-1 h-px bg-border max-w-xs" />
      </motion.div>

      {/* Projects Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
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
              duration: 0.55,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group bg-card border border-border rounded-2xl p-7 shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Header */}

            <div className="flex justify-between items-start gap-4 mb-5">
              <div>
                <h3 className="text-2xl font-bold leading-snug group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {project.date && (
                  <p className="text-sm text-primary mt-2 font-medium">
                    {project.date}
                  </p>
                )}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shrink-0"
                >
                  <FaGithub size={20} />
                </a>
              )}
            </div>

            {/* Description */}

            <p className="text-muted-foreground text-base leading-7 flex-grow mb-7">
              {project.description}
            </p>

            {/* Tags */}

            <div className="flex flex-wrap gap-3 pt-5 border-t border-border">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{
                    scale: 1.06,
                    y: -2,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/40 cursor-default transition-all duration-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}