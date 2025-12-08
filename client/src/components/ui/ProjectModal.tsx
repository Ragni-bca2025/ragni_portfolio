import { X, ExternalLink, Github, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="project-modal"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-md border border-neon-cyan/30 bg-card shadow-neon-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-card border-b border-neon-cyan/20">
          <h2 className="font-serif text-xl font-bold text-foreground">
            {project.title}
          </h2>
          <Button
            size="icon"
            variant="ghost"
            onClick={onClose}
            data-testid="modal-close"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="relative h-48 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-magenta/20 flex items-center justify-center">
          <span className="text-6xl font-serif font-bold text-neon-cyan/40">
            {project.title.charAt(0)}
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-neon-cyan/10 text-neon-cyan border-neon-cyan/50">
              {project.role}
            </Badge>
            <Badge variant="outline" className="bg-neon-purple/10 text-neon-purple border-neon-purple/50">
              {project.category}
            </Badge>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-foreground mb-2">About</h3>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-foreground mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-sm font-mono bg-muted border border-neon-cyan/20 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-foreground mb-3">Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-4 border-t border-neon-cyan/20">
            <Button
              className="flex-1 bg-neon-cyan text-black hover:bg-neon-cyan/90"
              onClick={() => window.open(project.liveUrl, "_blank")}
              data-testid="modal-live-link"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-neon-purple text-neon-purple hover:bg-neon-purple/10"
              onClick={() => window.open(project.githubUrl, "_blank")}
              data-testid="modal-github-link"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
