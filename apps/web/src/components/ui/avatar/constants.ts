export const avatarSizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const
export type AvatarSize = keyof typeof avatarSizes;

export const avatarColors = {
  gray: "gray",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  danger: "danger",
} as const
export type AvatarColor = keyof typeof avatarColors;

export const avatarVariantKeys = {
  solid: "solid",
  outline: "outline",
  subtle: "subtle",
} as const
export type AvatarVariant = keyof typeof avatarVariantKeys;

export const avatarShapes = {
  circle: "circle",
  square: "square",
} as const
export type AvatarShape = keyof typeof avatarShapes;

export const avatarPointers = {
  none: "none",
  pointer: "pointer",
} as const
export type AvatarPointer = keyof typeof avatarPointers;