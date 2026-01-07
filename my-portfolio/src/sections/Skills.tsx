import { skills } from "../skills"
import { SkillBar } from "../components/SkillBar"


export function SkillsSection(){
    return (
        <section className="border p-5">
            <h2>Skills Section</h2>
            {skills.map((skill) => {
                return (
                    <SkillBar Skill={skill} />
                )
            })}
        </section>
    )
}