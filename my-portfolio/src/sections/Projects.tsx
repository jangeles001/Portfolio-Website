import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../projects";

export function ProjectsSection(){
    return (
        <section className="p-10 gap-5">
            <h2 className="text-lg p-5 pl-0">Projects</h2>
            <hr></hr>
            { projects.map((project) => {
                return (
                    <ProjectCard key={`${project.id}`} project={project}></ProjectCard>)
                })
            }
        </section>
    )
}