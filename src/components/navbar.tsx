import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  showAvatar?: boolean;
}

function ProfileAvatar({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="relative shrink-0"
      style={{ width: 38, height: 38 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Spinning gradient ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #a78bfa, #6366f1)",
          padding: 2,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </motion.div>

      {/* Real profile photo */}
      <img
        src="/profile.jpg"
        alt="Maham Shezadi"
        className="absolute rounded-full object-cover object-top"
        style={{ inset: 2, width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
      />
    </motion.div>
  );
}

export function Navbar({ showAvatar = true }: NavbarProps) {
  const [mounted, setMounted]       = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme }         = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "About",      href: "#about"      },
    { name: "Skills",     href: "#skills"     },
    { name: "Projects",   href: "#projects"   },
    { name: "Publication",href: "#publication"},
    { name: "Experience", href: "#experience" },
    { name: "Contact",    href: "#contact"    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background:    scrolled ? "hsla(var(--background) / 0.92)" : "hsla(var(--background) / 0)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom:  scrolled ? "1px solid hsl(var(--border) / 0.6)" : "1px solid transparent",
          boxShadow:     scrolled ? "0 2px 32px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo — avatar fades in after flying animation */}
          <a href="#" aria-label="Home" className="flex items-center gap-3 group">
            <ProfileAvatar visible={showAvatar} />
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: scrolled ? 0 : (showAvatar ? 1 : 0), x: scrolled ? -4 : 0 }}
              transition={{ duration: 0.3 }}
              className="hidden sm:block text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium pointer-events-none"
            >
              Portfolio
            </motion.span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {mounted && theme === "dark" ? (
                  <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={17} />
                  </motion.span>
                ) : (
                  <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={17} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/40 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
