export function CodeEditor() {
  return (
    <div className="motion-safe:opacity-0 will-change-[opacity,transform] motion-safe:animate-fade-in-up delay-2 ibm-plex-mono-regular">
      <div className="relative w-[600px] max-w-[95%] h-[400px] mt-5 mx-auto rounded-2xl bg-gray-700 shadow-lg backdrop-blur-sm will-change-[opacity,transform] motion-safe:animate-float">
        
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>

          <div className="ml-4 flex-1 h-6 text-center rounded-md bg-gray-500">
                <h3 className="text-black">Code.txt</h3>
          </div>
        </div>

        {/* Code editor body */}
        <div className="p-6 bg-white rounded-b-2xl space-y-4">
          {/* Example "code" lines with curly brackets */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-purple-600">export</h3>
            <h3 className="text-purple-600">function</h3>
            <h3 className="text-black">MyComponent</h3>
            <span className="text-gray-400 font-bold">{'{'}</span>
            <div className="flex flex-col w-full gap-1 ml-4">
                <h3 className="flex text-black">
                    <span className="text-purple-600">const</span>[
                    <span className="h-4 w-1/5 my-1.5 bg-gray-200 rounded"></span>
                    <span className="h-4 w-1/5 my-1.5 bg-gray-200 rounded"></span>] = useState(<span className="h-4 w-1/5 my-1.5 bg-gray-200 rounded"></span>);
                </h3>
                <h3 className="flex text-black"></h3>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
            </div>
          </div>

         <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-black">useEffect</h3>
            <h3 className="text-black">()</h3>
            <h3 className="text-purple-600">=</h3>
            <span className="text-gray-400 font-bold">{'{'}</span>
            <div className="flex flex-col w-full gap-1 ml-4">
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
            </div>
            <span className="text-gray-400 font-bold">{'}'}</span> 
          </div>

          {/* Optional code blocks */}
          <h3 className="text-black"><span className="text-purple-600">return</span> (</h3>
            <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center font-mono text-gray-400 text-2xl">
          </div>
        </div>
      </div>
    </div>
  );
}