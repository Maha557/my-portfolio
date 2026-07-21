import { motion } from "framer-motion";

const experiences = [
  {
    title: "Freelance Academic & Technical Support",
    date: "Freelance",
    description: "Researched datasets, created Excel reports, organized and validated client data, maintained documentation, and delivered projects on time."
  },
  {
    title: "Video Editor",
    date: "Jan 2026",
    description: "Edited short and long game and product videos."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
          <div className="h-[1px] flex-1 bg-border ml-4 max-w-xs"></div>
        </div>
        
        <div className="space-y-12 pl-4 md:pl-8 border-l border-border relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              </div>
              <div className="mb-2 text-xs font-medium text-primary uppercase tracking-wider">{exp.date}</div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{exp.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
