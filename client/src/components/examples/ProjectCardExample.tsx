import { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import { projects } from "@/data/projects";

export default function ProjectCardExample() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const project = projects[0];

  return (
    <div className="p-8 bg-black">
      <div className="max-w-sm mx-auto">
        <ProjectCard project={project} onViewDetails={setSelectedProject} />
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
