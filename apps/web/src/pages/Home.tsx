import { useState } from 'react'
import { useFlags } from 'launchdarkly-react-client-sdk'
import type { PageType } from "@/components/ui/navigation/types"
import {
  HomeHero,
  LogoCloud,
  ServiceAreas,
  IconsModule,
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

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Handmade Clay Earrings",
    description: "Colorful and unique handcrafted designs.",
    price: 25,
    image: "/images/products/earrings.jpg",
    category: "Jewelry",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Custom Art Print",
    description: "Original artwork on premium paper.",
    price: 40,
    image: "/images/products/art-print.jpg",
    category: "Art",
  },
  {
    id: "3",
    title: "Mini Planter Pot",
    description: "Cute handmade ceramic pot for small plants.",
    price: 18,
    image: "/images/products/planter.jpg",
    category: "Home",
  },
  {
    id: "4",
    title: "Koya Lemonade T-shirt",
    description: "Soft cotton shirt with playful stand design.",
    price: 28,
    image: "/images/products/tshirt.jpg",
    category: "Apparel",
  },
]

const sampleCategoryProducts: Product[] = [
  {
    id: "10",
    title: "Youth Hoodie",
    description: "Comfortable and stylish hoodie for young adults.",
    price: 35,
    image: "/images/products/youth-hoodie.jpg",
    category: "Youth",
    tags: ["hoodie", "youth", "clothing"]
  },
  {
    id: "11",
    title: "Community Tote Bag",
    description: "Eco-friendly tote bag to support local events.",
    price: 15,
    image: "/images/products/tote-bag.jpg",
    category: "Community",
    tags: ["bag", "eco-friendly", "community"]
  },
  {
    id: "12",
    title: "Decorative Wall Art",
    description: "Modern art print to brighten up your home.",
    price: 45,
    image: "/images/products/wall-art.jpg",
    category: "Home",
    tags: ["art", "home", "decor"]
  },
  {
    id: "13",
    title: "Abstract Canvas Painting",
    description: "Original abstract painting on canvas.",
    price: 120,
    image: "/images/products/canvas-painting.jpg",
    category: "Art",
    tags: ["painting", "canvas", "abstract"]
  },
  {
    id: "14",
    title: "Community Baseball Cap",
    description: "Adjustable cap with community logo.",
    price: 20,
    image: "/images/products/baseball-cap.jpg",
    category: "Community",
    tags: ["cap", "community", "accessory"]
  },
  {
    id: "15",
    title: "Youth Sneakers",
    description: "Durable sneakers designed for active youth.",
    price: 60,
    image: "/images/products/youth-sneakers.jpg",
    category: "Youth",
    tags: ["sneakers", "youth", "footwear"]
  },
  {
    id: "16",
    title: "Cozy Throw Blanket",
    description: "Soft throw blanket perfect for home comfort.",
    price: 50,
    image: "/images/products/throw-blanket.jpg",
    category: "Home",
    tags: ["blanket", "home", "comfort"]
  },
  {
    id: "17",
    title: "Graphic Tee",
    description: "Trendy graphic t-shirt for casual wear.",
    price: 22,
    image: "/images/products/graphic-tee.jpg",
    category: "Apparel",
    tags: ["t-shirt", "apparel", "graphic"]
  },
]

export function Home({ onNavigate }: HomePageProps) {
  const { enableHome001 = false } = useFlags()
  const [override, setOverride] = useState(false)

  const showNewHome = override || enableHome001

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
            {/* DO NOT render <Navigation /> here */}
            {/*<HomeHero onNavigate={onNavigate} /> */}
            <HomeHero onNavigate={onNavigate} />
            <LogoCloud />
            <ServiceAreas />
            <OurStorySection onNavigate={onNavigate} />
            <IconsModule />
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
            <FeaturedProducts onNavigate={onNavigate} products={sampleProducts} />
            <ShopByCategory products={sampleCategoryProducts} />
          </div>
        </div>
      )}
    </div>
  )
}
