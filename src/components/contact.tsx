import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const cards = [
  {
    href: "mailto:mahamzunaira6@gmail.com",
    icon: Mail,
    label: "Email",
    color: "hsl(var(--primary))",
    glow: "hsl(var(--primary) / 0.22)",
    delay: 0,
  },
  {
    href: "tel:+923269887466",
    icon: Phone,
    label: "Phone",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,.22)",
    delay: 0.3,
  },
  {
    href: "https://maps.google.com/?q=Lahore,Pakistan",
    icon: MapPin,
    label: "Location",
    color: "#ec4899",
    glow: "rgba(236,72,153,.22)",
    delay: 0.6,
  },
];

function FloatingBubble({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  const Icon = card.icon;

  const time = useMotionValue(0);

  const y = useTransform(time, (v) => Math.sin(v + card.delay) * 6);

  const rotate = useTransform(
    time,
    (v) => Math.sin(v * 0.7 + card.delay) * 2
  );

  useAnimationFrame((t) => {
    time.set(t / 1700);
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
    >
      <motion.a
        href={card.href}
        target={card.label === "Location" ? "_blank" : undefined}
        rel="noopener noreferrer"
        style={{
          y,
          rotate,
          borderColor: card.color,
          boxShadow: `0 0 30px ${card.glow}`,
        }}
        whileHover={{
          scale: 1.08,
          y: -5,
          boxShadow: `0 0 50px ${card.glow}`,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          group
          w-24
          h-24
          sm:w-28
          sm:h-28
          md:w-32
          md:h-32
          rounded-3xl
          border-2
          bg-card/70
          backdrop-blur-xl
          flex
          flex-col
          items-center
          justify-center
          gap-2
          transition-all
          duration-300
        "
      >
        <Icon
          size={28}
          strokeWidth={2}
          style={{
            color: card.color,
          }}
        />

        <span
          className="text-xs font-semibold tracking-wider uppercase"
          style={{
            color: card.color,
          }}
        >
          {card.label}
        </span>
      </motion.a>
    </motion.div>
  );
}
export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 max-w-6xl mx-auto px-6"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Heading */}

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="text-muted-foreground text-lg leading-8 max-w-2xl mx-auto"
          >
            I'm currently looking for new opportunities.
            Feel free to reach out regarding internships,
            collaborations or full-time opportunities.
            I'll be happy to connect with you.
          </motion.p>
        </div>

        {/* Contact Bubbles */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-6
            sm:gap-8
            md:gap-10
          "
        >
          {cards.map((card, index) => (
            <FloatingBubble
              key={card.label}
              card={card}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}