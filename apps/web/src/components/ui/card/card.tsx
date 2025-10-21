"use client"

import { cn } from "@/lib/utils"
import { Image } from "@/components/ui/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import type { CardProps } from "./types"
import { getCardClasses, getBadgeClasses, getImageClasses } from "./styles"

export function Card({
  className,
  size = "md",
  color = "primary",
  variant = "filled",
  orientation = "vertical",
  alignH = "left",
  alignV = "top",
  image,
  imagePosition = "inline",
  badge,
  title,
  product,
  description,
  location,
  tags = [],
  price,
  avatarTag,
  buttonLabel = "Add to Cart",
  onClick,
  onButtonClick,
  onAddToCart,
}: CardProps) {
  const imageUrl = typeof image === "string" ? image : image?.url || "/placeholder.svg"
  const displayBadge = badge

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value)

  return (
    <div
      data-slot="card"
      onClick={onClick}
      className={getCardClasses(size, color, variant, orientation, alignH, alignV, className)}
    >
      {/* --- Image --- */}
      {image && (
        <div className={cn("relative self-stretch", orientation === "horizontal" && "w-2/3", imagePosition === "background" && "h-full")}>
          <Image
            src={imageUrl}
            alt={title || "Card image"}
            rounded={size !== "sm" ? "rounded-lg" : ""}
            className={getImageClasses(imagePosition, orientation)}
          />
          {displayBadge && (
            <Badge className={getBadgeClasses(size)}>{displayBadge}</Badge>
          )}
          {imagePosition === "background" && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          )}
        </div>
      )}

      {/* --- Content --- */}
      <div
        className={cn(
          "flex flex-col w-full gap-3 relative z-20",
          imagePosition === "background" && "absolute bottom-0 text-white",
          size === "sm" && "px-4 pb-4"
        )}
      >
        {title && <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>}

        {avatarTag && (
          <div className="flex items-center gap-2">
            <Avatar
              size="sm"
              image={avatarTag.image}
              name={avatarTag.name}
              initial={avatarTag.initial}
              shape="circle"
            />
            {avatarTag.name && <span className="text-sm">{avatarTag.name}</span>}
          </div>
        )}

        {location && <p className="text-sm opacity-80">📍 {location}</p>}

        {description && (
          <p className="text-sm opacity-90 line-clamp-2 leading-relaxed">{description}</p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, i) => (
              <Badge key={i} variant="outlined" color="neutral" className="capitalize text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outlined" color="neutral" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
        )}

        {(price !== undefined || onAddToCart || onButtonClick) && (
          <div className="flex items-center justify-between pt-3 mt-auto">
            {typeof price === "number" && (
              <p className="text-lg font-semibold text-primary">
                {formatPrice(price)}
              </p>
            )}
            {product && onAddToCart && (
              <Button
                size="sm"
                variant="filled"
                className="rounded-lg px-4 py-2 text-sm font-semibold"
                onClick={(e) => {
                  e.stopPropagation()
                  if (product) onAddToCart?.(product) // ✅ only call if product exists
                }}
              >
                {buttonLabel || "Add to Cart"}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}