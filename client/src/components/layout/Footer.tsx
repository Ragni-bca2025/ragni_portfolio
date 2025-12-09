import { Github, Linkedin, Mail, Zap } from "lucide-react";
import { socialLinks } from "@/data/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neon-cyan/20 bg-black/50" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-neon-cyan" />
              <span className="font-serif font-bold text-xl text-glow-cyan">RK</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building immersive digital experiences at the intersection of design and technology.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-semibold text-sm text-neon-cyan uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
                  data-testid={`footer-link-${link.toLowerCase()}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-semibold text-sm text-neon-cyan uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-full border border-neon-cyan/30 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan hover:shadow-neon-cyan transition-all"
                data-cursor="Email"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neon-cyan/30 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan hover:shadow-neon-cyan transition-all"
                data-cursor="GitHub"
                data-testid="footer-github"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neon-cyan/30 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan hover:shadow-neon-cyan transition-all"
                data-cursor="LinkedIn"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neon-cyan/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {currentYear} Ragni Kumari. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with React + Three.js + GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
