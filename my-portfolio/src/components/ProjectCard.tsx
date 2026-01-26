import type { Project } from "../types/project.ts"

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project } :ProjectCardProps){
    return (
    <div className="surface-card border grid grid-cols-1 mt-5 md:grid-cols-2 overflow-hidden w-full">

      <div className="p-6 flex flex-col gap-4">
        <h3>{project.title}</h3>

        <ul className="flex flex-wrap gap-3 text-sm text-gray-400">
          {project.techStack.map((tech) => (
            <li key={`${project.title}-${tech}`}>{tech}</li>
          ))}
        </ul>

        <p className="text-gray-300">{project.description}</p>

        <div className="mt-auto flex gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank">GitHub</a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank">Live</a>
          )}
        </div>
      </div>

      <div className="relative mt-5 ml-5 h-full w-full">
        <img
          src={project.previewImg}
          alt={`${project.title} preview`}
          className="h-[80%] w-[80%] object-cover"
        />
      </div>
    </div>
  );
}