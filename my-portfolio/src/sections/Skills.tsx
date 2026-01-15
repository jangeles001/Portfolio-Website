import { skills } from "../skills"
import { SkillBubble } from "../components/SkillBubble"


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
            <div className="flex justify-center items-center p-y-24 mt-5 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="relative w-[900px] max-w-[95%] mt-5 rounded-2xl border border-white/10 bg-slate-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur">

                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                        <span className="h-3 w-3 rounded-full bg-red-500"></span>
                        <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>

                        <div className="ml-4 flex-1 h-6 rounded-md bg-white/10">
                            <div className="ml-4 mt-2 flex-1 h-2 w-1/2 bg-white/10 rounded"></div>
                        </div>
                    </div>


                    <div className="p-10 text-slate-200">
                        <h2 className="text-2xl font-semibold mb-2">
                           <div className="mt- flex-1 h-[20px] w-1/2 bg-white/10 rounded"></div>
                        </h2>
                        <p className="text-slate-400 max-w-xl">
                            <div className="mt- flex-1 h-[20px] w-1/2 bg-white/10 rounded"></div>
                        </p>

                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <div className="h-28 rounded-xl bg-white/5"></div>
                            <div className="h-28 rounded-xl bg-white/5"></div>
                            <div className="h-28 rounded-xl bg-white/5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}