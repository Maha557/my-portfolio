import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";

const cards = [
  {
    href: "mailto:mahamzunaira6@gmail.com",
    icon: Mail,
    label: "Email",
    border: "hsl(var(--primary))",
    glow: "hsl(var(--primary) / 0.25)",
    iconColor: "hsl(var(--primary))",
    from: { x: -80, y: 40, rotate: -12, opacity: 0 },
    floatDelay: 0,
  },
  {
    href: "tel:+923269887466",
    icon: Phone,
    label: "Phone",
    border: "#a78bfa",
    glow: "rgba(167,139,250,0.28)",
    iconColor: "#a78bfa",
    from: { x: 0, y: 80, rotate: 0, opacity: 0 },
    floatDelay: 0.4,
  },
  {
    href: "https://maps.google.com/?q=Lahore,Pakistan",
    icon: MapPin,
    label: "Location",
    border: "#f472b6",
    glow: "rgba(244,114,182,0.28)",
    iconColor: "#f472b6",
    from: { x: 80, y: 40, rotate: 12, opacity: 0 },
    floatDelay: 0.8,
  },
];

const CLOUD_RADIUS = "42% 58% 55% 45% / 48% 44% 56% 52%";

function FloatingCloud({ card, index }: { card: typeof cards[0]; index: number }) {
  const Icon = card.icon;
  const t = useMotionValue(0);
  const y = useTransform(t, (v) => Math.sin(v + card.floatDelay * Math.PI * 2) * 8);
  const rotate = useTransform(t, (v) => Math.sin(v * 0.7 + card.floatDelay) * 3);

  useAnimationFrame((time) => {
    t.set(time / 1800);
  });

  return (
    <motion.div
      className="flex items-center justify-center"
      initial={card.from}
      whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.18,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.a
        href={card.href}
        target={card.label === "Location" ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label={card.label}
        className="flex flex-col items-center justify-center gap-2 select-none"
        style={{
          y,
          rotate,
          width: 110,
          height: 110,
          borderRadius: CLOUD_RADIUS,
          border: `2.5px solid ${card.border}`,
          background: `radial-gradient(ellipse at center, ${card.glow} 0%, hsl(var(--card)) 70%)`,
          boxShadow: `0 0 28px ${card.glow}, inset 0 0 18px ${card.glow}`,
          cursor: "pointer",
        }}
        whileHover={{
          scale: 1.18,
          boxShadow: `0 0 48px ${card.glow}, 0 0 80px ${card.glow}, inset 0 0 24px ${card.glow}`,
        }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <Icon size={24} strokeWidth={2} style={{ color: card.iconColor }} />
        <span
          className="text-[10px] font-bold tracking-widest uppercase"
          style={{ color: card.border }}
        >
          {card.label}
        </span>
      </motion.a>
    </motion.div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 max-w-5xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            I'm currently looking for new opportunities. Whether you have a question or just
            want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-10 max-w-sm mx-auto">
          {cards.map((card, i) => (
            <FloatingCloud key={card.label} card={card} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
