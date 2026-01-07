import type { Skill } from "../types"

interface SkillBarProps{
    Skill: Skill
}

export function SkillBar({ Skill }: SkillBarProps){
    return (
        <div className="border">
            <h4>{Skill.name}</h4>
            <p>{Skill.SkillLevel}</p>
        </div>
    )
}