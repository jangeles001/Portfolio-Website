import { skills } from "../skills"
import { SkillCard } from "../components/SkillCard"

export function SkillsDetailsSection(){
    return (
        <section className="flex flex-col p-5 w-full justify-center items-center md:justify-start md:items-start">
            <h2 className="pb-5">Skills & Technologies</h2>
            <hr className="border-t-2 border-slate-500 my-6 w-full"></hr>
            <div className="mb-4 text-lg font-medium mx-auto">
                <div className="grid gap-4 sm:grid-cols-2 mx-auto">
                    { 
                        skills.map((skill) => <SkillCard key={`${skill.name}`} skill={skill}/>)
                    }
                </div>
            </div>
        </section>
    )
}