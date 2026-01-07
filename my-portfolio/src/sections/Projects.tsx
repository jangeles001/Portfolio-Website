import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../projects";

export function ProjectsSection(){
    return (
        <section className="border p-5">
            <h2 className="">Projects</h2>
            { projects.map((project) => {
                return (
                    <ProjectCard project={project}></ProjectCard>)
                })
            }
        </section>
    )
}