import type { PageType } from "@/components/ui/navigation/types"
import { Hero } from '@/lib/layout/Hero'
import { PaperSeparator } from '@/components/ui/separator/paperSeparator'

const bgImgSM = "/bg-homeHero.webp"
const bgImgMD = "/bg-homeHero.webp"
const bgImgLG = "/bg-homeHero.webp"


{/*
const heroImages = {
  sm: `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-sm.webp`,
  md: `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-md.webp`,
  lg: `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-lg.webp`,
}
*/}

const heroImages = {
  sm: bgImgSM,
    md: bgImgMD,
  lg: bgImgLG

}

{/*
const galleryImages = [
  { src: `${import.meta.env.VITE_API_URL}/assets/images/img_oceanVibes.jpg`, type: "image" as const, alt: "Waxing" },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/img_oceanYoga.jpg`, type: "image" as const, alt: "Film still" },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/img_oilDrops.jpg`, type: "image" as const, alt: "Nails" },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/img_stones.jpg`, type: "image" as const, alt: "stones" },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/img_waterRipple.jpg`, type: "image" as const, alt: "Shower" },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/img_yoga.jpg`, type: "image" as const, alt: "Neck Pillow" },
  { src: `${import.meta.env.VITE_API_URL}/assets/images/img_room.jpg`, type: "image" as const, alt: "Massage Table" },
]
*/}

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
          <>
            Dream it.<br />
            Make it.<br />
            Sell it.
          </>
        ),
        subheader: (
          <>
            Because every big dream<br />
            starts with a small stand.
          </>
        ),
        buttons: [
          {
            text: "Create your stand",
            onClick: () => onNavigate("home"),
          }
        ],
        badge: "Koya Lemonade Stands"
      }}
    >
      <PaperSeparator />
    </Hero>
  )
}