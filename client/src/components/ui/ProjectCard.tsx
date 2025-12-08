import { useState, useRef } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * 10,
      y: (x - 0.5) * -10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const categoryColors: Record<string, string> = {
    web: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50",
    "3d": "bg-neon-purple/20 text-neon-purple border-neon-purple/50",
    experimental: "bg-neon-magenta/20 text-neon-magenta border-neon-magenta/50",
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative group rounded-md border border-neon-cyan/20 bg-card/50 backdrop-blur-sm overflow-visible transition-all duration-300",
        isHovered && "border-neon-cyan/50 shadow-neon-glow"
      )}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="View"
      data-testid={`project-card-${project.id}`}
    >
      <div className="relative h-48 overflow-hidden rounded-t-md bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-magenta/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-serif font-bold text-neon-cyan/30">
            {project.title.charAt(0)}
          </span>
        </div>
        
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        
        <div
          className={cn(
            "absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-neon-cyan/50 text-neon-cyan"
            onClick={() => window.open(project.liveUrl, "_blank")}
            data-testid={`project-live-${project.id}`}
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Live
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-neon-purple/50 text-neon-purple"
            onClick={() => window.open(project.githubUrl, "_blank")}
            data-testid={`project-github-${project.id}`}
          >
            <Github className="w-3 h-3 mr-1" />
            Code
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>
          <Badge
            variant="outline"
            className={cn("text-xs", categoryColors[project.category])}
          >
            {project.category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-between text-muted-foreground hover:text-neon-cyan"
          onClick={() => onViewDetails(project)}
          data-testid={`project-details-${project.id}`}
        >
          View Details
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
