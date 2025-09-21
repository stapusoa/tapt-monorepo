import type * as React from "react"
import type { VariantProps } from "class-variance-authority"
import type { inputVariants } from "./styles"
import type { InputSize, InputVariant } from "./constants"

export interface EnhancedInputProps
  extends Omit<React.ComponentProps<"input">, "size" | "placeholder">,
    Omit<VariantProps<typeof inputVariants>, "size" | "variant"> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  label?: boolean
  error?: boolean
  helperText?: string
  placeholder?: string
  size?: InputSize
  variant?: InputVariant
  children?: React.ReactNode
  className?: string
}
