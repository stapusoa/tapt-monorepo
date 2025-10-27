import type { OverlayVariant } from "@/lib/constants"

export const OVERLAY_STYLES: Record<OverlayVariant, string> = {
  gradient: "fixed inset-0 w-full h-screen bg-gradient-to-br from-[#5e4684]/80 via-[#7a5ba8]/70 to-[#45a9a7]/60 pointer-events-none z-0",
  dark: "fixed inset-0 w-full h-screen bg-black/20 pointer-events-none z-0",
  light: "fixed inset-0 w-full h-screen bg-white/40 pointer-events-none z-0",
  pattern: "fixed inset-0 w-full h-screen bg-[url('/patterns/dots.svg')] opacity-30 pointer-events-none z-0",
  home: "fixed inset-0 w-full h-screen bg-gradient-to-br from-[#5e4684]/80 via-[#7a5ba8]/70 to-[#45a9a7]/60 pointer-events-none z-0",
  none: "",
}

export const GALLERY_SIZE_STYLES: Record<"sm" | "md" | "lg", string> = {
  sm: "grid grid-cols-2 gap-2",
  md: "grid grid-cols-3 gap-3",
  lg: "grid grid-cols-4 gap-4",
}

export const HERO_CONTENT_STYLES = {
  container: "absolute z-12 w-full flex flex-col gap-4 p-8",

  title: "flex relative w-full shrink-0 animate-fade-in font-primary font-bold text-left not-italic text-8xl md:text-5xl sm:text-4xl",
  subheader: "flex relative w-full max-w-150 mb-8 text-left font-secondary font-regular text-secondary text-2xl leading-9 animate-fade-in",

  buttons: "flex gap-3 z-3",
  button:
    "backdrop-blur-sm rounded-2xl text-white font-semibold text-lg px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl",

  galleryWrapper: "mt-6",
  galleryImage: "w-full h-auto object-cover rounded-lg shadow",
}

export const HERO_VARIANT_STYLES: Record<string, string> = {
  fullscreen: "relative w-full h-screen overflow-hidden flex items-center justify-center",
  section: "relative w-full overflow-hidden flex items-center justify-center",
}

export const HERO_ALIGNMENT_STYLES: Record<string, string> = {
  center: "items-center justify-center text-center",
  left: "items-start justify-start text-left",
  right: "items-end justify-end text-right",
}

export const HERO_LAYOUT_STYLES: Record<string, string> = {
  default: "flex-col",
  columns: "grid grid-cols-2 gap-8",
}

export const workStyles = 
  {
     section: "max-w-7xl mx-auto px-6 pt-40 pb-32",
  header: "mb-12 text-center",
  title: "text-4xl font-bold tracking-tight font-primary",
  subtitle: "text-muted-foreground mt-2 font-secondary text-base",
  grid: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
  }



export const cardStyles =
  {
  base: "group cursor-pointer overflow-hidden hover:shadow-lg transition bg-white rounded-xl border border-gray-100",
  imageWrapper: "aspect-video overflow-hidden",
  image: "w-full h-full object-cover group-hover:scale-105 transition duration-500",
  content: "z-12 p-6 flex flex-col gap-2",
  badge: "inline-flex items-center justify-center rounded-md border w-fit whitespace-nowrap shrink-0 px-2 py-0.5 overflow-hidden border-transparent bg-secondary text-default mb-3 text-xs uppercase tracking-wide text-primary font-semibold",
  title: "text-md font-medium leading-tight text-gray-900",
  subtitle: "text-sm text-neutral-700 line-clamp-2 min-h-12",
  footer: "flex justify-between items-center mt-4 text-xs",
  tag: "text-sm font-medium text-neutral-600",
  button: "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
}


export const caseStudyStyles = {
  wrapper: "max-w-5xl mx-auto px-6 py-16",
  backButton: "mb-6 text-muted-foreground hover:text-primary transition",
  header: "mb-10 space-y-2",
  title: "text-4xl font-bold tracking-tight text-gray-900",
  subtitle: "text-lg text-muted-foreground",
  image: "rounded-xl mb-10 shadow-md object-cover w-full h-auto",
  section: "space-y-6 mt-10",
  sectionTitle: "text-2xl font-semibold text-gray-900",
  list: "list-disc pl-6 space-y-2 text-muted-foreground",
}