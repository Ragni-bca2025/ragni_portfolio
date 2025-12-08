import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = cursorDot.current;
    const outline = cursorOutline.current;
    if (!dot || !outline) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(outline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorLabel = target.getAttribute("data-cursor");
      if (cursorLabel) {
        setCursorText(cursorLabel);
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setCursorText("");
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor], input, textarea"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter as EventListener);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter as EventListener);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDot}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          isHovering
            ? "bg-neon-magenta scale-150"
            : "bg-neon-cyan"
        }`}
        style={{ mixBlendMode: "difference" }}
        data-testid="cursor-dot"
      />
      <div
        ref={cursorOutline}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border transition-all duration-300 flex items-center justify-center ${
          isHovering
            ? "w-20 h-20 border-neon-magenta bg-neon-magenta/10"
            : "w-8 h-8 border-neon-cyan/50 bg-transparent"
        }`}
        data-testid="cursor-outline"
      >
        {cursorText && (
          <span className="text-[10px] font-mono text-neon-magenta uppercase tracking-wider">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
