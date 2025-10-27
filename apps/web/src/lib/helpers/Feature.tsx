import { useNavigate } from "react-router-dom"
import type { PageType } from "@/components/ui/navigation/types"
import type { FeatureProps } from "@/lib/types"
import { Card } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"

export function Feature({
  title,
  description,
  buttons,
  layout = "text", // 'text' | 'cards' | 'carousel'
  items = [],
  onNavigate,
  onCardClick,
  onAddToCart,
}: FeatureProps) {
  const navigate = useNavigate()

  const handleNavigate = (to: string) => {
    const pageFromTo = (to.startsWith("/") ? to.slice(1) : to) as PageType
    onNavigate(pageFromTo)
    navigate(to)
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 space-y-10 max-w-7xl">
        {/* Header */}
        {(title || description || buttons) && (
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              {title && (
                <h2 className="text-4xl font-bold font-merriweather mb-4">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-lg leading-relaxed text-gray-700">
                  {description}
                </p>
              )}
            </div>

            {/* Buttons */}
            {buttons?.length ? (
              <div className="flex flex-wrap gap-4">
                {buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-primary-dark transition"
                    onClick={() => handleNavigate(btn.to)}
                  >
                    {btn.text}
                  </button>
                ))}
              </div>
            ) : null}
          </header>
        )}

        {/* Content Area */}
        {layout === "cards" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="cursor-pointer"
                onClick={() => onCardClick?.(item)}
              >
                <Card {...item} onAddToCart={() => onAddToCart?.(item)} />
              </div>
            ))}
          </div>
        )}

        {layout === "carousel" && items.length > 0 && (
          <Carousel
            items={items}
            onCardClick={onCardClick}
            onAddToCart={onAddToCart}
          />
        )}

        {layout === "text" && (
          <div className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            {description}
          </div>
        )}
      </div>
    </section>
  )
}