import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const publications = [
  {
    title: "Bone Abnormalities Detection Using Medical Imaging",
    date: "2026",
    authors:
      "Khan, M. N., Shahzadi, M., Qadri, A. R., Nazar, S., Habiba, U., & Nazir, Z.",
    journal: "Spectrum of Engineering Sciences",
    description:
      "Co-authored a peer-reviewed research paper on AI-based bone abnormality detection from X-ray images using EfficientNet-B0, ResNet-18, GradCAM++, and explainable deep learning techniques for fracture and bone tumor classification.",
    tags: ["EfficientNet-B0", "ResNet-18", "GradCAM++", "Explainable AI"],
    link: "https://doi.org/10.5281/zenodo.21062147",
  },
];

export function Publication() {
  return (
    <section
      id="publication"
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
          Publication
        </h2>

        <div className="flex-1 h-px bg-border max-w-xs" />
      </motion.div>

      {/* Publications Grid */}

      <div className="grid grid-cols-1 gap-5 md:gap-8">
        {publications.map((pub, index) => (
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
              scale: 1.01,
            }}
            className="group bg-card border border-border rounded-2xl p-7 shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Header */}

            <div className="flex justify-between items-start gap-4 mb-5">
              <div>
                <h3 className="text-2xl font-bold leading-snug group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>

                <p className="text-sm text-primary mt-2 font-medium">
                  {pub.journal} &middot; {pub.date}
                </p>
              </div>

              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Publication"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shrink-0"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              )}
            </div>

            {/* Authors */}

            <p className="text-sm text-foreground/70 italic mb-4">
              {pub.authors}
            </p>

            {/* Description */}

            <p className="text-muted-foreground text-base leading-7 flex-grow mb-7">
              {pub.description}
            </p>

            {/* Tags */}

            <div className="flex flex-wrap gap-3 pt-5 border-t border-border">
              {pub.tags.map((tag) => (
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
