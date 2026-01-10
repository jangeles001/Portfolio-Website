import type { Skill } from "../types"

interface SkillBarProps{
    Skill: Skill
}

export function SkillBubble({ Skill }: SkillBarProps){
    return (
        <div 
        className="border border-gray-500 rounded-2xl shadow-lg w-min h-min pl-5 pr-5
        transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1
        hover:shadow-xl"
        >
            <h4 className="font-bold text-center font-sm"><strong>{Skill.name}</strong></h4>
        </div>
    )
}