import type { Project } from "../types/project.ts"

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project } :ProjectCardProps){
 return (
    <div className="border rounded opacity-70 hover:opcaity-.5 hover:opacity-100">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
    </div>
 );
}