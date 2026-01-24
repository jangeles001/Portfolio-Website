export function WebBrowser(){
  return (
    <div className="motion-safe:opacity-0 will-change-[opacity,transform] motion-safe:animate-fade-in-up delay-2 w-full px-4">
      <div
        className="
          relative
          w-full
          max-w-sm
          sm:max-w-md
          md:max-w-lg
          lg:max-w-xl
          xl:max-w-2xl
          mx-auto
          rounded-2xl
          border
          border-white/10
          bg-white/20
          shadow-md
          backdrop-blur-sm
          will-change-[opacity,transform]
          motion-safe:animate-float
        "
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray/40">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />

          <div className="ml-4 flex-1 h-5 sm:h-6 rounded-md bg-white/10">
            <div className="ml-4 mt-2 h-2 w-1/2 bg-black/10 rounded" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 bg-white/90">
          <div className="h-[18px] sm:h-[20px] w-1/2 bg-black/10 rounded mb-3" />

          <div className="h-[14px] sm:h-[16px] w-2/3 bg-black/10 rounded mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-20 sm:h-24 md:h-28 rounded-xl bg-black/5" />
            <div className="h-20 sm:h-24 md:h-28 rounded-xl bg-black/5" />
            <div className="h-20 sm:h-24 md:h-28 rounded-xl bg-black/5" />
          </div>
        </div>
      </div>
    </div>
  );
}