import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../projects";

export function ProjectsSection(){
    return (
        <section id="project-section" className="flex flex-col p-5 w-full justify-center items-center md:justify-start md:items-start">
            <h2 className="text-lg p-5 pl-0">Projects</h2>
            <hr className="border-t-2 border-slate-500 my-6 w-full"></hr>
            { projects.map((project) => {
                return (
                    <ProjectCard key={`${project.id}`} project={project}></ProjectCard>)
                })
            }
        </section>
    )
}