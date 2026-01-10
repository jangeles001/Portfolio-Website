import { skills } from "../skills"
import { SkillCard } from "../components/SkillCard"

export function SkillsDetailsSection(){
    return (
        <section className="flex flex-col p-5 w-full">
            <h2 className="pb-5">Skills & Technologies</h2>
            <hr></hr>
            <div className="mb-4 text-lg font-medium">
                <div className="grid gap-4 sm:grid-cols-2">
                    { 
                        skills.map((skill) => <SkillCard key={`${skill.name}`} skill={skill}/>)
                    }
                </div>
            </div>
        </section>
    )
}