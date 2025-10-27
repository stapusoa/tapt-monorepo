import type { OverlayVariant } from "./constants"
import type { PageType } from "@/components/ui/navigation/types"
import type { BGProps } from "@/components/ui/image/types"
// import type { CaseStudyCategory, CaseStudyPhase } from "./constants"

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
  text: string | React.ReactNode;
  onClick: () => void;
  className?: string | React.ReactNode;
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
  imageUrl?: string
  name?: string
  badge?: string
  seller?: {
    avatar?: string;
    name?: string;
  };
  categories?: string[];
}

export type ProductWithQuantity = Product & {
  quantity: number;
};

export interface WorkProps {
  onNavigate: (page: PageType) => void;
  case: CaseStudy;
}

// lib/types.ts

export interface CaseStudyDesignSystem {
  colors: { name: string; hex: string; usage: string }[];
  typography: { name: string; size: string; weight: string; lineHeight: string; usage: string }[];
  spacing?: { name: string; value: string; usage: string }[];
  components: {
    name: string;
    description: string;
    variants: string[];
    states?: string[];
    sizes?: string[];
    features?: string[];
    props: { name: string; type: string; description: string }[];
    code?: string;
  }[];
}

export interface CaseStudyProcess {
  phase: string;
  description: string;
  deliverables: string[];
  pages?: {
    page: string;
    sections: {
      section: string;
      details: string[];
    }[];
  }[];
  children?: React.ReactNode;
}

export interface PhaseCardProps {
  phaseNumber: number;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  team: string[] | React.ReactNode;
  role: string[] | React.ReactNode;
  duration: string;
  challenge: string;
  solution: string;
  impact: string[];
  image: string;
  process: CaseStudyProcess[];
  designSystem?: CaseStudyDesignSystem;
}

// ✅ React component props (separate)
export interface CaseStudyProps {
  onNavigate: (page: PageType) => void;
  caseStudy?: CaseStudy;
}

export interface ProjectCardProps {
  project: CaseStudy;
  onNavigate?: (id: string) => void;
}