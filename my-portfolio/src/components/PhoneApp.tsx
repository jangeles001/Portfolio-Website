export function PhoneApp(){
    return (
        <div className="motion-safe:opacity-0 will-change-[opacity,transform] motion-safe:animate-fade-in-up delay-2">
            <div className="relative w-[200px] max-w-[95%] mt-5 mx-auto rounded-2xl border border-white/10 bg-white/20 shadow-md backdrop-blur-sm will-change-[opacity,transform] motion-safe:animate-float">
                <div className="flex flex-col gap-2 px-4 py-3 border-gray/40">

                <div className="p-5 w-full bg-white/90 rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-2">
                        <div className="flex-1 h-[20px] w-full bg-black/10 rounded"></div>
                    </h2>
                    <p className="text-slate-400 max-w-xl"></p>
                    <div className="mt- flex-1 h-[20px] w-1/2 bg-black/10 rounded"></div>
                    <div className="grid grid-cols-1 grid-rows-3 gap-4 mt-8">
                        <div className="h-9 rounded-xl bg-black/5"></div>
                        <div className="h-9 rounded-xl bg-black/5"></div>
                        <div className="h-9 rounded-xl bg-black/5"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}