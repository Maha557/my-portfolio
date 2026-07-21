import { motion } from "framer-motion";

const certificates = [
  {
    title: "AI for Writing and Communication",
    issuer: "Google via Coursera",
    date: "Jun 2026",
    description: "Studied ethical considerations and best practices in AI-driven content creation."
  },
  {
    title: "AI Fundamentals",
    issuer: "Google via Coursera",
    date: "Jun 2026",
    description: "Explored machine learning techniques including supervised and unsupervised learning."
  }
];

export function Certificates() {
  return (
    <section className="py-12 max-w-5xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certificates</h2>
          <div className="h-[1px] flex-1 bg-border ml-4 max-w-xs"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="p-8 bg-card border border-border flex flex-col h-full hover:border-primary/30 transition-colors">
              <span className="text-xs font-medium text-primary mb-3 block uppercase tracking-wider">{cert.date}</span>
              <h3 className="text-xl font-serif font-bold text-card-foreground mb-2">{cert.title}</h3>
              <p className="text-sm font-medium text-foreground mb-4 opacity-80">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm flex-grow leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
