export const cardSizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const
export type CardSize = keyof typeof cardSizes

export const cardColors = {
  primary: "primary",
  secondary: "secondary",
  neutral: "neutral",
} as const
export type CardColor = keyof typeof cardColors

export const cardVariants = {
  filled: "filled",
  outlined: "outlined",
  ghost: "ghost",
} as const
export type CardVariant = keyof typeof cardVariants

export const cardOrientations = {
  vertical: "vertical",
  horizontal: "horizontal",
} as const
export type CardOrientation = keyof typeof cardOrientations

export const cardAlignments = {
  left: "left",
  center: "center",
  right: "right",
} as const
export type CardAlignH = keyof typeof cardAlignments

export const cardVerticalAlignments = {
  top: "top",
  center: "center",
  bottom: "bottom",
} as const
export type CardAlignV = keyof typeof cardVerticalAlignments

export const cardImagePositions = {
  inline: "inline",
  background: "background",
} as const
export type CardImagePosition = keyof typeof cardImagePositions