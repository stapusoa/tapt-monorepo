import React from "react"
import { avatarVariants } from "./styles"
import { cn } from "@/lib/utils"
import type { AvatarProps } from "./types"

export const Avatar: React.FC<AvatarProps> = ({
  size = "md",
  color = "gray",
  variant = "solid",
  shape = "circle",
  withPointer = "none",
  image,
  name,
  initial,
  placeholder = "?",
  className,
}) => {
  const getInitials = () => {
    if (initial) return initial
    if (name) {
      const names = name.trim().split(" ")
      if (names.length === 1) return names[0][0].toUpperCase()
      return (names[0][0] + names[1][0]).toUpperCase()
    }
    return placeholder
  }

  return (
    <div
      className={cn(
        avatarVariants({ size, color, variant, shape, withPointer }),
        className
      )}
      aria-label={name || placeholder}
      role="img"
    >
      {image ? (
        <img
          src={image}
          alt={name || placeholder}
          className="w-full h-full object-cover"
        />
      ) : (
        <span>{getInitials()}</span>
      )}
    </div>
  )
}