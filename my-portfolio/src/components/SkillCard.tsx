import type { Skill } from "../types"

interface SkillCardProps {
    skill: Skill;
}

export function SkillCard({ skill } :SkillCardProps){
    return (
        <div className="surface-cards mb-0"
        >
            <p className="text-sm text-black-900">
                <span className="font-semibold text-black-900">
                    {skill.name}
                </span>
                {" — "}
                {skill.details}
            </p>
        </div>
    );
}