import type {
  CardSize,
  CardColor,
  CardVariant,
  CardOrientation,
  CardAlignH,
  CardAlignV,
  CardImagePosition,
} from "./constants"
import type { Product } from "@/lib/types"

export interface AvatarTag {
  image?: string
  name?: string
  initial?: string
}

export interface CardProps {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  size?: CardSize
  color?: CardColor
  variant?: CardVariant
  orientation?: CardOrientation
  alignH?: CardAlignH
  alignV?: CardAlignV
  image?: string | { url?: string }
  imagePosition?: CardImagePosition
  badge?: string
  title?: string
  description?: string
  location?: string
  tags?: string[]
  price?: number
  avatarTag?: AvatarTag
  buttonLabel?: string
  product: Product | undefined;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  onButtonClick?: () => void
  onAddToCart?: (product?: Product) => void
}