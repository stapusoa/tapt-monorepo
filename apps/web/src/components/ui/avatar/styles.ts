import { cva } from "class-variance-authority"

export const avatarVariants = cva(
  "relative flex items-center justify-center font-medium overflow-hidden select-none",
  {
    variants: {
      size: {
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
      },
      color: {
        gray: "bg-gray-200 text-gray-700",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-green-500 text-white",
        warning: "bg-yellow-400 text-black",
        danger: "bg-red-500 text-white",
      },
      variant: {
        solid: "",
        subtle: "opacity-80",
        outline: "border border-current bg-transparent",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
      withPointer: {
        pointer: "cursor-pointer hover:opacity-90",
        none: "",
      },
    },
    defaultVariants: {
      size: "md",
      color: "gray",
      variant: "solid",
      shape: "circle",
      withPointer: "none",
    },
  }
)