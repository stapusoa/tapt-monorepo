import { cn } from "@/lib/utils"
import type {
  CardSize,
  CardColor,
  CardVariant,
  CardOrientation,
  CardAlignH,
  CardAlignV,
  CardImagePosition,
} from "./constants"

export function getCardClasses(
  size: CardSize,
  color: CardColor,
  variant: CardVariant,
  orientation: CardOrientation,
  alignH: CardAlignH,
  alignV: CardAlignV,
  className?: string
) {
  const base = "relative flex rounded-xl overflow-hidden transition-all cursor-pointer"

  const orientationStyles =
  orientation === "horizontal"
    ? "flex-row items-stretch" // ← instead of items-center
    : "flex-col"

  const sizeStyles =
    size === "sm"
      ? "p-0 text-sm gap-3"
      : size === "lg"
      ? "p-6 text-lg gap-6"
      : "p-4 text-base gap-4"

  const variantStyles =
    variant === "outlined"
      ? "border border-neutral-300 bg-transparent"
      : variant === "ghost"
      ? "bg-transparent border-none shadow-none"
      : "bg-white shadow-sm hover:shadow-md"

  const colorStyles =
    color === "primary"
      ? "hover:border-primary/50"
      : color === "secondary"
      ? "hover:border-secondary/50"
      : "hover:border-neutral-300"

  const alignHStyles =
    alignH === "center"
      ? "items-center text-center"
      : alignH === "right"
      ? "items-end text-right"
      : "items-start text-left"

  const alignVStyles =
    alignV === "center"
      ? "justify-center"
      : alignV === "bottom"
      ? "justify-end"
      : "justify-start"

  return cn(
    base,
    sizeStyles,
    variantStyles,
    colorStyles,
    orientationStyles,
    alignHStyles,
    alignVStyles,
    className
  )
}

export function getImageClasses(
  position: CardImagePosition,
  orientation: CardOrientation
) {
  if (position === "background") {
    return "absolute inset-0 size-full object-cover z-0"
  }
  return orientation === "horizontal"
    ? "size-full object-cover"
    : "w-full h-56 object-cover"
}

export function getBadgeClasses(size: CardSize) {
  return cn(
    "absolute z-20 top-3 left-3 font-medium bg-white/80 text-neutral-800 backdrop-blur-sm shadow-sm",
    size === "sm" && "text-xs px-2 py-0.5",
    size === "lg" && "text-sm px-3 py-1"
  )
}