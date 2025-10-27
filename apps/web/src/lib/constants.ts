export type OverlayVariant = "gradient" | "dark" | "light" | "pattern" | "home" | "none"
export type CaseStudyCategory = "fintech" | "healthcare" | "ecommerce" | "education" | "saas" | "entertainment" | "productivity" | "real estate"
export type CaseStudyPhase = "research" | "design" | "development" | "testing" | "deployment" | "maintenance"

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

export const KeyCode = Object.freeze({
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  ENTER: 'Enter',
  SPACE: ' ',
  ESC: 'Escape',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
  HOME: 'Home',
  END: 'End',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  RIGHT: 'ArrowRight',
  LEFT: 'ArrowLeft',
})
