import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [loadingText, setLoadingText] = useState("Booting RaveOS...");

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete,
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0, rotationY: -180 },
      { scale: 1, opacity: 1, rotationY: 0, duration: 0.8, ease: "back.out(1.7)" }
    )
      .to(logoRef.current, {
        textShadow: "0 0 20px hsl(180, 100%, 50%), 0 0 40px hsl(180, 100%, 50%), 0 0 60px hsl(180, 100%, 50%)",
        duration: 0.3,
        repeat: 3,
        yoyo: true,
      })
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.5"
      )
      .to(progressRef.current, {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: function () {
          const progress = this.progress();
          if (progress > 0.3 && progress < 0.6) {
            setLoadingText("Loading Portfolio...");
          } else if (progress >= 0.6) {
            setLoadingText("Initializing Experience...");
          }
        },
      });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center"
      data-testid="preloader"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent animate-scan-line"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div
        ref={logoRef}
        className="text-8xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta mb-8"
        style={{
          WebkitTextStroke: "2px hsl(180, 100%, 50%)",
          textShadow: "0 0 10px hsl(180, 100%, 50%)",
        }}
        data-testid="preloader-logo"
      >
        RK
      </div>

      <div
        ref={textRef}
        className="font-mono text-sm text-neon-cyan/80 mb-8 tracking-widest"
        data-testid="preloader-text"
      >
        {loadingText}
      </div>

      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full w-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full"
          style={{
            boxShadow: "0 0 10px hsl(180, 100%, 50%), 0 0 20px hsl(280, 100%, 50%)",
          }}
          data-testid="preloader-progress"
        />
      </div>

      <div className="absolute bottom-8 font-mono text-xs text-muted-foreground">
        v1.0.0 | RaveOS
      </div>
    </div>
  );
}
