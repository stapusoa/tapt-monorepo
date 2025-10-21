import type { VariantProps } from "class-variance-authority"
import type { avatarVariants } from "./styles"
import type {
  AvatarColor,
  AvatarSize,
  AvatarVariant,
  AvatarShape,
  AvatarPointer,
} from "./constants"

type AvatarCvaProps = VariantProps<typeof avatarVariants>;

export interface AvatarProps
  extends Omit<AvatarCvaProps, "size" | "color" | "variant" | "shape"> {
  className?: string;
  asChild?: boolean;
  size?: AvatarSize;
  color?: AvatarColor;
  variant?: AvatarVariant;
  shape?: AvatarShape;
  withPointer?: AvatarPointer;
  image?: string;
  name?: string;
  initial?: string;
  placeholder?: string;
}
