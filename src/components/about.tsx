import { motion } from "framer-motion";

const words = "Developed and trained deep learning models using Python, TensorFlow and PyTorch. Preprocessed and validated large-scale medical imaging datasets. Evaluated model performance using classification metrics. Integrated trained AI models with a FastAPI-based backend for inference. Worked with multimodal AI concepts, model optimization, and AI deployment workflows. Passionate about solving real-world problems using AI.".split(" ");

export function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="flex items-center gap-4 mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">About</h2>
        <motion.div
          className="h-[1px] flex-1 bg-border ml-4 max-w-xs"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
      </motion.div>

      <div className="prose prose-lg dark:prose-invert max-w-3xl text-muted-foreground">
        <p className="leading-relaxed text-lg text-justify">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.28em]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.018,
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}
