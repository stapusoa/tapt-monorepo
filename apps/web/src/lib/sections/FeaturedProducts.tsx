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
    <div className="relative shrink-0 -mt-1 pt-16 pb-32 px-6 md:px-12 w-full bg-white">
      <div className="flex flex-col relative size-full mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div className="typography">
            <h2 className="title-lg mb-2">
              Featured Products
            </h2>
            <p className="body-lg text-default">
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
            <Card
              key={product.id}
              product={product}                 // ✅ Pass the product
              size="md"
              color="primary"
              variant="filled"
              orientation="vertical"
              image={product.image}
              title={product.title}
              description={product.description}
              badge={product.badge}
              price={product.price}
              avatarTag={product.seller && {
                image: product.seller.avatar,
                name: product.seller.name
              }}
              onClick={() => onProductClick?.(product)} // opens product details
              onAddToCart={() => onAddToCart?.(product)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}