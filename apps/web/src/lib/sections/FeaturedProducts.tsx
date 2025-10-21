import { ArrowRight } from "lucide-react"
import type { PageType } from "@/components/ui/navigation/types"
import type { Product } from "@/lib/types" // adjust if you have a Product type
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeaturedProductsProps {
  products: Product[]
  onNavigate: (page: PageType) => void
  onProductClick?: (product: Product) => void
  onAddToCart?: (product: Product) => void
}

export function FeaturedProducts({
  products,
  onNavigate,
  onProductClick,
  onAddToCart,
}: FeaturedProductsProps) {
  return (
    <div className="relative shrink-0 -mt-1 pt-32 px-6 md:px-12 w-full bg-white">
      <div className="flex flex-col relative size-full mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-merriweather mb-2">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Discover amazing creations from young entrepreneurs
            </p>
          </div>

          <button
            onClick={() => onNavigate("shop")}
            className={cn(
              "flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            )}
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              onClick={() => onProductClick?.(product)}
              className="cursor-pointer"
            >
              <Card
                {...product}
                id={String(product.id)}
                onAddToCart={() => onAddToCart?.(product)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}