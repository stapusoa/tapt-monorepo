import { useState } from 'react'
import { useFlags } from 'launchdarkly-react-client-sdk'
import type { PageType } from "@/components/ui/navigation/types"
import {
  HomeHero,
  LogoCloud,
  TestimonialsSection,
  ResourcesSection,
  FAQSection
} from "@/lib/sections/index"
import { BookingForm } from "@/lib/sections/BookingForm"
import { Footer } from "@/components/ui/navigation/footer"
import { OurStorySection } from "@/lib/sections/OurStorySection"
import { FeaturedProducts } from '@/lib/sections/FeaturedProducts'
import type { Product } from '@/lib/types' // adjust if you have a Product type
import { ShopByCategory } from '@/lib/sections/ShopByCategory'
import oilBottle from "@/assets/images/img_oilBottles.jpg"

const allProducts: Product[] = [
  {
    id: 1,
    title: "Sample Oil",
    description: "A sample product description.",
    price: 19.99,
    image: oilBottle,
    category: "Oils"
  },
  {
    id: 2,
    title: "Sample Cream",
    description: "Another product description.",
    price: 29.99,
    image: oilBottle,
    category: "Creams"
  }
]

export interface HomeProps {
  onNavigate: (page: PageType) => void;
  onAddToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}

interface CartItem extends Product {
  quantity: number;
}

export function Home({ onNavigate, onAddToCart, onProductClick }: HomeProps) {
  const { enableHome001 = false } = useFlags()
  const [override, setOverride] = useState(false)
  const showNewHome = override || enableHome001
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Internal handlers (fallback if props not provided)
  const internalAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const internalProductClick = (product: Product) => {
    onNavigate("product-details")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

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
            <FeaturedProducts
              onNavigate={onNavigate}
              products={allProducts}
              onAddToCart={onAddToCart ?? internalAddToCart}
              onProductClick={onProductClick ?? internalProductClick}
            />
            <ShopByCategory products={allProducts} />
          </div>
        </div>
      )}
    </div>
  )
}