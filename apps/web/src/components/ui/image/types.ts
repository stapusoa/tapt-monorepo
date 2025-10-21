import React from "react"
import type { CardImagePosition } from "@/components/ui/card/constants"
import type { ImgHTMLAttributes } from "react"
import { BREAKPOINTS } from "@/lib/constants"

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | { url?: string; imagePosition?: CardImagePosition }
  alt: string
  fallbackSrc?: string
  className?: string
  width?: number | string
  height?: number | string
  style?: React.CSSProperties
  loading?: "lazy" | "eager"
  skeletonClassName?: string
}

export type Breakpoint = keyof typeof BREAKPOINTS

export interface BGProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src?: string
  alt?: string;
  fixed?: boolean;
  images?: Record<Breakpoint, string>;
  fallback?: string; // fallback for single image
  semiTransparentWhiteBg?: boolean;
  blur?: boolean;
  className?: string;
}