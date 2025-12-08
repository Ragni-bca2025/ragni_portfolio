import { useState } from "react";
import { cn } from "@/lib/utils";

interface SkillChipProps {
  skill: string;
  index: number;
}

export default function SkillChip({ skill, index }: SkillChipProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    "border-neon-cyan/50 hover:border-neon-cyan hover:shadow-neon-cyan",
    "border-neon-magenta/50 hover:border-neon-magenta hover:shadow-neon-magenta",
    "border-neon-purple/50 hover:border-neon-purple hover:shadow-neon-purple",
    "border-neon-green/50 hover:border-neon-green hover:shadow-neon-green",
    "border-neon-blue/50 hover:border-neon-blue hover:shadow-neon-blue",
  ];

  const colorClass = colors[index % colors.length];

  return (
    <div
      className={cn(
        "px-4 py-2 rounded-md border bg-black/50 font-mono text-sm transition-all duration-300 cursor-default",
        colorClass,
        isHovered && "scale-105"
      )}
      style={{
        animation: isHovered ? "glitch 0.2s ease-in-out" : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`skill-chip-${skill.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span className={cn(
        "transition-colors",
        isHovered ? "text-foreground" : "text-muted-foreground"
      )}>
        {skill}
      </span>
    </div>
  );
}
