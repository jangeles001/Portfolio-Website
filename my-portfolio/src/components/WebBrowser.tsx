export function WebBrowser(){
    return (
        <div className="motion-safe:opacity-0 will-change-[opacity,transform] motion-safe:animate-fade-in-up delay-2">
            <div className="relative w-[600px] max-w-[95%] mx-[180px] rounded-2xl border border-white/10 bg-white/20 shadow-md backdrop-blur-sm will-change-[opacity,transform] motion-safe:animate-float">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray/40">
                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    
                    <div className="ml-4 flex-1 h-6 rounded-md bg-white/10">
                        <div className="ml-4 mt-2 flex-1 h-2 w-1/2 bg-black/10 rounded"></div>
                    </div>
                </div>


                <div className="p-10 bg-white/90">
                    <h2 className="text-2xl font-semibold mb-2">
                    <div className="flex-1 h-[20px] w-1/2 bg-black/10 rounded"></div>
                    </h2>
                    <p className="text-slate-400 max-w-xl">
                        <div className="mt- flex-1 h-[20px] w-1/2 bg-black/10 rounded"></div>
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                        <div className="h-28 rounded-xl bg-black/5"></div>
                        <div className="h-28 rounded-xl bg-black/5"></div>
                        <div className="h-28 rounded-xl bg-black/5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}