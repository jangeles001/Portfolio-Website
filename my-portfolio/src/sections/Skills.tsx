import { skills } from "../skills"
import { SkillBubble } from "../components/SkillBubble"


export function SkillsSection(){
    return (
        <section className="flex flex-col motion-safe:opacity-0 p-5 w-full py-auto will-Change-[opacity,transform] motion-safe:animate-fade-in-up">
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