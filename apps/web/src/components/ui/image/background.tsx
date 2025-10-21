import { bgStyles } from "./styles"
import { DEFAULT_BACKGROUND_ALT } from "./constants"
import type { BGProps, Breakpoint } from "./types"

export function BGImage({
  images,
  fallback,
  alt = DEFAULT_BACKGROUND_ALT,
  className,
  fixed,
}: BGProps) {
  // If no responsive images are provided, use fallback
  const finalImages: Record<Breakpoint, string> = images ?? {
    sm: fallback ?? "",
    md: fallback ?? "",
    lg: fallback ?? "",
  }

  return (
    <>
      {/* Large screens */}
      <img
        alt={alt}
        src={finalImages.lg}
        loading="lazy"
        className={`${bgStyles.lg} ${className ?? ""}`}
        style={fixed ? { position: "fixed" } : undefined}
      />

      {/* Tablets */}
      <img
        alt={alt}
        src={finalImages.md}
        loading="lazy"
        className={`${bgStyles.md} ${className ?? ""}`}
        style={fixed ? { position: "fixed" } : undefined}
      />

      {/* Mobile — eager load */}
      <img
        alt={alt}
        src={finalImages.sm}
        loading="eager"
        className={`${bgStyles.sm} ${className ?? ""}`}
        style={fixed ? { position: "fixed" } : undefined}
      />
    </>
  )
}