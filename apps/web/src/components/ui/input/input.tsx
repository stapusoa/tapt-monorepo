import * as React from "react"
import { cn } from "@/lib/utils"
import { inputVariants } from "./styles"
import type { EnhancedInputProps } from "./types"

export const Input = React.forwardRef<HTMLInputElement, EnhancedInputProps>(
  (
    {
      size,
      variant,
      label,
      error,
      helperText,
      placeholder,
      leftIcon,
      rightIcon,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && <label className="text-sm font-medium">{label}</label>}
        <div className="relative">
          {leftIcon && <span className="text-subtle absolute inset-y-0 left-3 flex items-center">{leftIcon}</span>}
          <input
            ref={ref}
            aria-invalid={error}
            placeholder={placeholder}
            className={cn(
              inputVariants({ size, variant }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/50",
              className
            )}
            {...props}
          />
          {rightIcon && <span className="text-subtle absolute inset-y-0 right-3 flex items-center">{rightIcon}</span>}
        </div>
        {helperText && (
          <p className={cn("mt-1 text-sm", error ? "text-destructive" : "text-muted-foreground")}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"