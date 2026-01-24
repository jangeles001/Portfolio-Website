import { useEffect, useCallback, useState, useRef, type ReactNode, Children } from 'react'
import { usePageVisibility } from '../hooks/usePageVisibility';

interface CarouselProps {
    interval?: number;
    children: ReactNode;
}

export default function Carousel({interval = 7000, children }: CarouselProps){

  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const slides = Children.toArray(children);
  const totalSlides = slides.length;

  // Clear any existing timer
  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Move to the next slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);

    window.setTimeout(() => {
      setIsTransitioning(false);
    }, 1600);
  }, [isTransitioning]);

  // Schedule the next slide transition
  const scheduleNext = useCallback(() => {
    clearTimer();

    timeoutRef.current = window.setTimeout(() => {
      nextSlide();
    }, interval);
  }, [interval, clearTimer, nextSlide]);

  usePageVisibility({
    onHide: clearTimer,
    onShow: () => {
      setIsTransitioning(false);
      scheduleNext();
    },
  });

  // Start the carousel
  useEffect(() => {
    scheduleNext();
    return clearTimer;
  }, [scheduleNext, clearTimer]);

  // Handle the end of CSS transition
  const handleTransitionEnd = () => {
    if (activeIndex === totalSlides + 1) {
      setIsTransitioning(false);
      setActiveIndex(1);
      scheduleNext();
      return;
    }

    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(totalSlides);
      scheduleNext();
      return;
    }

    setIsTransitioning(false);
    scheduleNext();
  };

  return (
    <div className="relative w-full max-w-6xl overflow-hidden">
      <div
        className={`flex w-full ${isTransitioning ? "transition-transform duration-1500" : ""}`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Clone last slide at start */}
        <div className="w-full flex flex-shrink-0 items-center justify-center">
          <div className="carousel-slide w-full">
            {slides[totalSlides - 1]}
          </div>
        </div>

        {/* Actual slides */}
        {slides.map((slide, i) => (
            <div
            key={i}
            className="w-full flex flex-shrink-0 justify-center items-center"
            >
              <div
              className={`carousel-slide w-full ${
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
        <div className= "w-full flex flex-shrink-0 justify-center items-center">
          <div className="carousel-slide w-full">
            {slides[0]}
          </div>
        </div>
      </div>
    </div>
  );
}