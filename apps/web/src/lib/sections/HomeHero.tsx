import type { PageType } from "@/components/ui/navigation/types"
import {Hero} from '@/lib/layout/Hero'
import { WaveSeparator } from "@/components/ui/separator/waveSeparator"

const heroImages = {
  sm: `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-sm.webp`,
  md: `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-md.webp`,
  lg: `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-lg.webp`,
}

export function HomeHero({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <Hero
      variant="fullscreen"
      fullHeight="screen"
      alignment="center"
      layout="default"
      parallax
      bg={{
        fixed: true,
        images: heroImages,
        alt: "Modern home with large windows",
      }}
      overlays={["home", "dark"]}
      content={{
        title: "Deep Roots, Lasting Homes",
        subheader: "Your trusted Utah County real estate expert with nearly 6 years of experience helping families find their perfect home.",
        buttons: [
          {
            text: "Find Your Home",
            onClick: () => onNavigate("listings"),
          }
        ],
       
      }}
    >
      <WaveSeparator />
    </Hero>
  )
}