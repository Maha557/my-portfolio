import { motion } from "framer-motion";

const certificates = [
  {
    title: "AI for Writing and Communication",
    issuer: "Google via Coursera",
    date: "Jun 2026",
    description:
      "Studied ethical considerations, responsible AI practices, and effective AI-assisted content creation techniques.",
  },
  {
    title: "AI Fundamentals",
    issuer: "Google via Coursera",
    date: "Jun 2026",
    description:
      "Learned core Artificial Intelligence concepts including supervised learning, unsupervised learning, machine learning workflows, and real-world AI applications.",
  },
  {
    title: "Artificial Intelligence (AI) Internship",
    issuer: "Devnexes Digital Solutions",
    date: "Sep 2026",
    description:
      "Completed a 1-month remote internship in Artificial Intelligence, demonstrating consistent learning, active task execution, and successful completion of assigned project milestones.",
  },
  {
    title: "Frontend Development Virtual Internship",
    issuer: "CodeAlpha",
    date: "Jul 2026 – Aug 2026",
    description:
      "Successfully completed the CodeAlpha Virtual Internship Program in Frontend Development, demonstrating dedication and sincerity throughout the program.",
  },
];

export function Certificates() {
  return (
    <section
      id="certificates"
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
          Certificates
        </h2>

        <div className="flex-1 h-px bg-border max-w-xs" />
      </motion.div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="bg-card border border-border rounded-2xl p-7 shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Date */}

            <span className="inline-flex w-fit px-4 py-2 rounded-full border border-primary/25 bg-primary/5 text-sm font-semibold text-primary mb-5">
              {cert.date}
            </span>

            {/* Title */}

            <h3 className="text-2xl font-bold text-card-foreground leading-snug mb-3">
              {cert.title}
            </h3>

            {/* Issuer */}

            <p className="text-base font-medium text-foreground/80 mb-5">
              {cert.issuer}
            </p>

            {/* Description */}

            <p className="text-muted-foreground text-base leading-7 flex-grow">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
