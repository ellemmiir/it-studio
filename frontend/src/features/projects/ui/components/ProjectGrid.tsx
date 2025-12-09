import { ProjectPreview } from "../../model/types";
import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  projects: ProjectPreview[];
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};
