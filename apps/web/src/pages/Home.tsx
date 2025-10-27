import { useState } from 'react'
import { useFlags } from 'launchdarkly-react-client-sdk'
import type { PageType } from "@/components/ui/navigation/types"
import {
  HomeHero,
  LogoCloud,
  TestimonialsSection,
  ResourcesSection,
  FAQSection,
  MarketStats
} from "@/lib/sections/index"
import { useNavigate } from "react-router-dom"

import { BookingForm } from "@/lib/sections/BookingForm"
import { Footer } from "@/components/ui/navigation/footer"
import { OurStorySection } from "@/lib/sections/OurStorySection"
import { FeaturedProducts } from '@/lib/sections/FeaturedProducts'
import { FeaturedProjects } from '@/lib/sections/FeaturedProjects'

import type { Product } from '@/lib/types' // adjust if you have a Product type
import { QuizSection } from '@/lib/sections/QuizSection'
import { CTASection } from '@/lib/sections/CTASection'
import img1 from "@/assets/images/sprint-proj1_lg.webp"

const allProducts: Product[] = [
  {
    id: 1,
    title: "Sample Oil",
    description: "A sample product description.",
    price: 19.99,
    image: img1,
    category: "Oils"
  },
  {
    id: 2,
    title: "Sample Cream",
    description: "Another product description.",
    price: 29.99,
    image: img1,
    category: "Creams"
  }
]

export interface HomeProps {
  onNavigate: (page: PageType) => void;
  onAddToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}


export function Home({ onNavigate, onProductClick }: HomeProps) {
  const { enableHome001 = false } = useFlags()
  const [override, setOverride] = useState(false)
  const showNewHome = override || enableHome001
  const navigate = useNavigate()


// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const internalProductClick = (_product: Product) => {
    onNavigate("product-details")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-white -mt-1 relative size-full">
      {/* Dev-only toggle button */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={() => setOverride(!override)}
          className="fixed top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded z-50"
          aria-label="Toggle home layout"
        >
          {override ? 'Showing: New Home' : 'Showing: Old Home'}
        </button>
      )}

      {showNewHome ? (
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-0 px-0 relative size-full">
            <HomeHero onNavigate={onNavigate} />
            <LogoCloud />
            <OurStorySection onNavigate={onNavigate} />
            <TestimonialsSection />
            <ResourcesSection onNavigate={onNavigate} />
            <BookingForm />
            <FAQSection />
            <Footer onNavigate={onNavigate} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-0 px-0 relative size-full">
            <HomeHero onNavigate={onNavigate} />
            <MarketStats />
             <FeaturedProjects
               onNavigate={onNavigate}
        onProjects={(id) => navigate(`/work/${id}`)}
            />
            <FeaturedProducts
              onNavigate={onNavigate}
              products={allProducts}
              onProductClick={onProductClick ?? internalProductClick}
            />
            <CTASection onNavigate={onNavigate} />
            <QuizSection />
                        <TestimonialsSection />
            <FAQSection />

          </div>
        </div>
      )}
    </div>
  )
}