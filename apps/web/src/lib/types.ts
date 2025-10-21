import type { OverlayVariant } from "./constants"
import type { PageType } from "@/components/ui/navigation/types"
import type { BGProps } from "@/components/ui/image/types"

export interface FeatureProps {
  title?: string
  description?: string
  buttons?: { text: string; to: string }[]
  layout?: "text" | "cards" | "carousel"
  items?: any[] // for cards or carousel
  onNavigate: (page: PageType) => void
  onCardClick?: (item: any) => void
  onAddToCart?: (item: any) => void
}

export interface OverlayProps {
  variants?: OverlayVariant | OverlayVariant[];
  className?: string;
}

export interface HeroButton {
  text: string;
  onClick: () => void;
}

export interface GalleryProps {
  images: {
    src: string
    alt?: string
    type?: "image" | "video"
  }[]
  className?: string;
  size?: "sm" | "md" | "lg";
}

export interface HeroContent {
  title: string | React.ReactNode;
  subheader?: string | React.ReactNode;
  badge?: string;
  buttons?: HeroButton[];
  gallery?: GalleryProps;
  children?: React.ReactNode;
  className?: string;
}

export type HeroHeight = "screen" | "md" | "sm"; // for fullHeight prop
export type HeroAlignment = "center" | "left" | "right";
export type HeroLayout = "default" | "columns";

export interface HeroProps {
  variant?: "fullscreen" | "section";
  fullHeight?: HeroHeight;
  bg?: BGProps;
  overlays?: OverlayVariant[];
  alignment?: HeroAlignment;
  layout?: HeroLayout;
  content?: HeroContent;
  parallax?: boolean;
  children?: React.ReactNode;
}

export type Breakpoint = "sm" | "md" | "lg" | "xl";

export interface Product {
  id: string | number
  title: string
  description?: string
  price: number
  image: string
  slug?: string
  category?: string
  tags?: string[]
  inStock?: boolean
  rating?: number
}