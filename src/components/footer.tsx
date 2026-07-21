import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border mt-12 bg-background w-full">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm font-medium">
          Maham Shezadi © 2026
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Maha557" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a 
            href="https://linkedin.com/in/maham-shazadi-437238331" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a 
            href="https://wa.me/923269887466" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
