import ProjectCard from "./ProjectCard";
import { projects } from "../config/portfolioData";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
