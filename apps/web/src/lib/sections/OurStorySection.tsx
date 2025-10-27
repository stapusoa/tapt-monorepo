import React, { useState } from 'react'
import type { PageType } from "@/components/ui/navigation/types"
import { Feature } from "@/lib/helpers/Feature"

const images = [
  { src: `${import.meta.env.VITE_API_URL}/assets/images/product-proj1.webp`, alt: 'Team working with clients' },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/product-proj2.webp`, alt: 'Open house event' },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/product-proj3.webp`, alt: 'Client consultation' },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/product-proj4.webp`, alt: 'Property showing' },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/product-proj4.webp`, alt: 'Team meeting' },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/product-proj4.webp`, alt: 'Office workspace' },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/product-proj4.webp`, alt: 'Networking event' },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/product-proj4.webp`, alt: 'Client closing' },
]

function ModernCarousel({ children, currentSlide, totalSlides, onNext, onPrev, onSlideSelect }: {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSlideSelect: (index: number) => void;
}) {
  return (
    <div className="relative h-[560px] rounded-[24px] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl group">
      <div className="relative h-full">
        {children}
      </div>
      <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={onPrev}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group/btn"
        >
          <svg className="w-5 h-5 text-gray-700 transform group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          onClick={onNext}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group/btn"
        >
          <svg className="w-5 h-5 text-gray-700 transform group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideSelect(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
              ? 'w-8 h-3 bg-white shadow-lg'
              : 'w-3 h-3 bg-white/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

interface OurStorySectionProps {
  buttons?: { text: string; to: string }[];
  onNavigate: (page: PageType) => void;
}

export function OurStorySection({ buttons, onNavigate }: OurStorySectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const totalSlides = images.length

  // If no buttons passed, fall back to a sensible default
  const sectionButtons = buttons && buttons.length > 0
    ? buttons
    : [{ text: "Be a part of our story", to: "/contact" }]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="relative w-full bg-white py-16 px-4 md:px-12 -mt-1">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Feature
          title="Learn Our Story"
          description="At the heart of our work is a commitment to putting families first. With nearly six years of experience in real estate, I strive to offer more than just transactions—I aim to provide genuine care, guidance, and support to every client. From starting in the front office to becoming an agent and now running my own practice, my journey has given me a deep understanding of the industry. I am dedicated to upholding kindness, compassion, service, and honesty in every interaction, ensuring my clients feel valued and empowered as they navigate buying, building, or selling their homes."
          buttons={sectionButtons}
          onNavigate={onNavigate}
        />
        <ModernCarousel
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNext={nextSlide}
          onPrev={prevSlide}
          onSlideSelect={setCurrentSlide}
        >
          <img
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
            className="object-cover w-full h-full"
          />
        </ModernCarousel>
      </div>
    </div>
  )
}