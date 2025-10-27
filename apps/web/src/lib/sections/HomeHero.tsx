import type { PageType } from "@/components/ui/navigation/types"
import { Hero } from '@/lib/helpers/Hero'
import { PaperSeparator } from '@/components/ui/separator/paperSeparator'
import { Icon } from '@/components/ui/Icon'

const bgImgSM = "/bg-home-hero_sm.webp"
const bgImgMD = "/bg-home-hero_md.webp"
const bgImgLG = "/bg-home-hero_lg.webp"

const heroImages = {
  sm: bgImgSM,
  md: bgImgMD,
  lg: bgImgLG

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
        alt: "Background image of a crochet lemon",
        semiTransparentWhiteBg: true,
        blur: true,
        className: "z-0"
      }}
      content={{
        title: (
          <div className="flex flex-col z-12">
            <span className="text-black">designing for users,</span>
            <span className="text-primary">not just pixels.</span>
          </div>
        ),
        subheader: (
          <>
            6+ years designing and developing user-centered solutions for inventory management, travel, real estate, healthcare, and enterprise software. Based in Utah, working with teams worldwide.
          </>
        ),
        buttons: [
          {
            text: [
              <div className="flex gap-2 items-center justify-center z-12">
              <span>View my work</span>
              <Icon name="arrowRight" className="w-4 h-auto" />
              </div>
            ],
            onClick: () => onNavigate("work"),
            className: "px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-700"
          },
          {
            text: "Let's work together",
            onClick: () => onNavigate("contact"),
            className: "px-6 py-3 z-12 bg-primary text-gray-800 rounded-lg hover:bg-gray-300"
          }
        ],
        badge: "UX ENGINEER"
      }}
    >
      <PaperSeparator />
    </Hero>
  )
}