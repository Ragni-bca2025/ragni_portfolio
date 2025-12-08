import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Filter } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";

type CategoryFilter = "all" | "web" | "3d" | "experimental";

const categories: { label: string; value: CategoryFilter }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "3D", value: "3d" },
  { label: "Experimental", value: "experimental" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [activeFilter]);

  const handleFilterChange = (filter: CategoryFilter) => {
    if (gridRef.current) {
      gsap.to(gridRef.current.children, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        stagger: 0.05,
        duration: 0.3,
        onComplete: () => setActiveFilter(filter),
      });
    } else {
      setActiveFilter(filter);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20" data-testid="page-projects">
      <div className="relative py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionTitle
            title="Projects"
            subtitle="A showcase of my creative and technical work"
          />

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground mr-4">
              <Filter className="w-4 h-4" />
              <span className="font-mono text-sm">Filter:</span>
            </div>
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={activeFilter === cat.value ? "default" : "outline"}
                size="sm"
                className={
                  activeFilter === cat.value
                    ? "bg-neon-cyan text-black"
                    : "border-neon-cyan/30 text-muted-foreground hover:border-neon-cyan hover:text-neon-cyan"
                }
                onClick={() => handleFilterChange(cat.value)}
                data-testid={`filter-${cat.value}`}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-mono">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
