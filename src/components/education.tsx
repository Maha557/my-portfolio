import { motion } from "framer-motion";

export function Education() {
  return (
    <section className="py-12 max-w-5xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
          <div className="h-[1px] flex-1 bg-border ml-4 max-w-xs"></div>
        </div>
        
        <div className="p-8 bg-card border border-border group hover:border-primary/30 transition-colors">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
            <div>
              <h3 className="text-2xl font-serif font-bold text-card-foreground mb-1">Bachelor of Computer Science</h3>
              <p className="text-foreground font-medium text-lg">University of Narowal</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <span className="text-sm font-medium text-primary block mb-1">Nov 2022 – Jun 2026</span>
              <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 inline-block">CGPA: 3.02</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
