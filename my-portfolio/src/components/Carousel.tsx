import { useEffect, useEffectEvent, useState, useRef, type ReactNode, Children } from 'react'

interface CarouselProps {
    interval?: number;
    children: ReactNode;
}

export default function Carousel({interval = 7000, children }: CarouselProps){

    const [ activeIndex, setActiveIndex ] = useState(1);
    const [ isTransitioning, setIsTransitioning ] = useState(false);
    const timerID = useRef<number |null>(null);

    const slides = Children.toArray(children);
    const totalSlides = slides.length;

    const clearTimer = () => {
        if(timerID.current) {
            clearInterval(timerID.current)
            timerID.current = null;
        }
    };

    const nextSlide = (reset = true) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => prev + 1);
        if (reset) {
            resetTimer()
        };
    }

    const resetTimer = () => {
        clearTimer();
        timerID.current = setInterval(() => {
            nextSlide(false);
        }, interval)
    }

     const reset = useEffectEvent(() => {
        resetTimer();
    })

    useEffect(() => {
        reset();
        
        return clearTimer;

    }, [interval]);

    const handleTransitionEnd = () => {
    if (activeIndex === totalSlides + 1) {
      setIsTransitioning(false);
      setActiveIndex(1);
      return;
    }
    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(totalSlides);
      return;
    }

    setIsTransitioning(false);
  };

    return (
  <div className="relative w-full max-w-4xl overflow-hidden">
    <div
      className={`flex ${isTransitioning ? "transition-transform duration-1500" : ""}`}
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      onTransitionEnd={handleTransitionEnd}
    >
      {/* Clone last slide at start */}
      <div className="flex w-full flex-shrink-0 justify-center items-center">
        <div className="carousel-slide">
          {slides[totalSlides - 1]}
        </div>
      </div>

      {/* Actual slides */}
      {slides.map((slide, i) => (
          <div
          key={i}
          className="w-full flex-shrink-0 flex justify-center items-center"
          >
            <div
            className={`carousel-slide ${
              isTransitioning && i + 1 === activeIndex
              ? "is-active carousel-next"
              : ""}`
            }
            >
              {slide}
            </div>
        </div>
      ))}

      {/* Clone first slide at end */}
      <div className="flex w-full flex-shrink-0 justify-center items-center">
        <div className="carousel-slide">
          {slides[0]}
        </div>
      </div>
    </div>
  </div>
);
}