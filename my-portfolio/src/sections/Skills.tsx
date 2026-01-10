import { skills } from "../skills"
import { SkillBubble } from "../components/skillbubble"


export function SkillsSection(){
    return (
        <section className="flex flex-col p-5 w-full">
            <div className="flex flex-row flex-wrap justify-center mx-auto gap-5 max-w-[800px]">
                {skills.map((skill) => {
                    return (
                        <SkillBubble key={skill.name} Skill={skill} />
                    )
                })}
            </div>
        </section>
    )
}