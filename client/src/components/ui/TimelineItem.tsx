import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItemProps {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  isLeft?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  year,
  description,
  isLeft = false,
}: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current,
        {
          opacity: 0,
          x: isLeft ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [isLeft]);

  return (
    <div
      ref={itemRef}
      className={`flex items-center gap-8 ${isLeft ? "flex-row-reverse" : ""}`}
      data-testid={`timeline-item-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`flex-1 ${isLeft ? "text-right" : ""}`}>
        <div className="p-6 rounded-md border border-neon-cyan/30 bg-card/50 backdrop-blur-sm hover:border-neon-cyan/60 hover:shadow-neon-glow transition-all duration-300">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 mb-3">
            {year}
          </span>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-neon-purple mb-2">{subtitle}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="relative flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-neon-cyan border-2 border-black shadow-neon-cyan" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neon-cyan to-transparent" />
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}
