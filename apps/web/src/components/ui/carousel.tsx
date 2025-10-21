import React, { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import clsx from "clsx"

interface CarouselItem {
  src: string
  alt?: string
  title?: string
  description?: string
}

interface CarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  className?: string
  onCardClick?: (item: CarouselItem) => void
  onAddToCart?: (item: CarouselItem) => void
}

/**
 * A responsive, reusable carousel component.
 * Example:
 * <Carousel items={[{ src: '/img1.jpg', alt: '...' }]} autoPlay />
 */
export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 4000,
  showControls = true,
  className,
}) => {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<number | null>(null)

  const next = () => setCurrent((prev) => (prev + 1) % items.length)
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length)

  useEffect(() => {
    if (autoPlay) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(next, interval)
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, autoPlay, interval])

  if (!items || items.length === 0) return null

  return (
    <div className={clsx("relative w-full overflow-hidden", className)}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="min-w-full flex-shrink-0 relative">
            <img
              src={item.src}
              alt={item.alt || `Slide ${idx + 1}`}
              className="w-full h-[500px] object-cover object-center"
            />
            {(item.title || item.description) && (
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white">
                {item.title && <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>}
                {item.description && <p className="text-sm text-gray-200">{item.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      {showControls && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/30 hover:bg-black/50 p-2 rounded-full transition"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/30 hover:bg-black/50 p-2 rounded-full transition"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={clsx(
              "w-3 h-3 rounded-full transition",
              current === idx ? "bg-white" : "bg-white/40 hover:bg-white/60"
            )}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}