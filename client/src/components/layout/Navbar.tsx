import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import gsap from "gsap";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-neon-cyan/20"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              data-cursor="Home"
              data-testid="nav-logo"
            >
              <Zap className="w-6 h-6 text-neon-cyan group-hover:text-neon-magenta transition-colors" />
              <span className="font-serif font-bold text-xl text-glow-cyan">RK</span>
            </div>
          </Link>

          <div ref={linksRef} className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`relative font-mono text-sm tracking-wider cursor-pointer transition-colors ${
                    location === item.path
                      ? "text-neon-cyan"
                      : "text-foreground/70 hover:text-neon-cyan"
                  }`}
                  data-cursor="View"
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {location === item.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-neon-cyan shadow-neon-cyan" />
                  )}
                </span>
              </Link>
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-neon-cyan/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  className={`block py-2 font-mono text-sm tracking-wider ${
                    location === item.path
                      ? "text-neon-cyan"
                      : "text-foreground/70"
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`nav-mobile-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
