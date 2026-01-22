import type { Skill } from "../types"

interface SkillBarProps{
    Skill: Skill
}

export function SkillBubble({ Skill }: SkillBarProps){
    return (
        <span 
        className="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-sm font-sm text-black inset-ring inset-ring-gray-500/10"
        >
            <h4 className="text-center"><strong>{Skill.name}</strong></h4>
        </span>
    )
}