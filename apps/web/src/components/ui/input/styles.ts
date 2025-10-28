import { cva } from "class-variance-authority"

export const inputWrapper = cva(
  "relative flex items-center rounded-md border transition-all duration-200",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-neutral-300 bg-transparent shadow-xs",
        outlined: "border-neutral-300 bg-transparent shadow-xs",
        filled: "bg-neutral-100 border-transparent focus-within:ring-2 focus-within:ring-secondary",
        ghost: "border-transparent bg-transparent hover:bg-neutral-50",
      },
      color: {
        default: "focus-within:border-neutral-700 focus-within:ring-2",
        primary: "focus-within:border-primary",
        secondary: "focus-within:border-secondary",
        success: "",
        neutral: "focus-within:border-neutral-700 focus-within:ring-2",
        danger: "focus-within:border-cherry-400",
      },
      size: {
        sm: "text-sm px-2 py-1.5",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-3",
      },
      fullWidth: {
        true: "w-full",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
      invalid: {
        true: "border-cherry-500",
      },
    },
    defaultVariants: {
      variant: "outlined",
      color: "default",
      size: "md",
      fullWidth: true,
      disabled: false,
      invalid: false,
    },
  }
)

export const helperTextStyle = cva("text-sm mt-1", {
  variants: {
    invalid: {
      true: "text-cherry-500",
      false: "text-neutral-500",
    },
  },
})