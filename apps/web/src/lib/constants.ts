export type OverlayVariant = "gradient" | "dark" | "light" | "pattern" | "home" | "none"

export const HERO_VARIANTS = {
  fullscreen: "h-screen relative w-full overflow-hidden",
  section: "relative w-full overflow-hidden",
}

export const BREAKPOINTS: Record<string, number> = {
  xs: 0,
  sm: 480,
  md: 640,
  lg: 768,
  xl: 896,
  "2xl": 1024,
  "3xl": 1280
}