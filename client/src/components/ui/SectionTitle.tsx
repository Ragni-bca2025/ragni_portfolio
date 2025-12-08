import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const chars = titleRef.current.innerText.split("");
      titleRef.current.innerHTML = chars
        .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      gsap.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [title]);

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      ref={containerRef}
      className={cn("mb-12", alignmentClasses[align], className)}
    >
      <h2
        ref={titleRef}
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-glow-cyan mb-4"
        data-testid={`section-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center gap-4 justify-center">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
        <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-neon-cyan" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
      </div>
    </div>
  );
}
