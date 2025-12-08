import { useEffect, useRef } from "react";
import { Link } from "wouter";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroScene from "@/components/3d/HeroScene";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    if (titleRef.current) {
      const words = titleRef.current.innerText.split(" ");
      titleRef.current.innerHTML = words
        .map((word) => `<span class="inline-block mr-4">${word}</span>`)
        .join("");

      tl.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 50, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    ).fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.2"
    );
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" data-testid="page-home">
      <HeroScene />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-magenta/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-black/50 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-neon-cyan" />
          <span className="text-sm font-mono text-neon-cyan">
            Full-Stack Developer
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-glow-cyan"
          data-testid="hero-title"
        >
          Himanshu Prakash
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-xl text-lg md:text-xl text-muted-foreground mb-8 font-mono"
          data-testid="hero-subtitle"
        >
          Building immersive, animated, and high-performance digital experiences
          for the modern web.
        </p>

        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4">
          <Link href="/projects">
            <MagneticButton
              className="bg-neon-cyan text-black hover:bg-neon-cyan/90 font-semibold px-6"
              data-cursor="View"
              data-testid="cta-projects"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </MagneticButton>
          </Link>
          <Link href="/contact">
            <MagneticButton
              variant="outline"
              className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 px-6"
              data-cursor="Contact"
              data-testid="cta-contact"
            >
              Contact Me
            </MagneticButton>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-mono text-muted-foreground">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-neon-cyan to-transparent" />
        </div>
      </div>
    </div>
  );
}
