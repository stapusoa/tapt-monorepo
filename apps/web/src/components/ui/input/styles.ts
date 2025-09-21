import { cva } from "class-variance-authority"

export const inputVariants = cva(
  "file:text-body placeholder:text-subtle selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:ring-primary focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      size: {
        sm: "h-8 px-2 py-1 text-sm file:h-6 file:text-xs rounded-md",
        md: "h-9 px-3 py-1 text-base file:h-7 file:text-sm md:text-sm rounded-lg",
        lg: "h-11 px-4 py-2 text-base file:h-8 file:text-sm rounded-xl",
      },
      variant: {
        filled: "border-1 border-solid border-neutral-300 bg-neutral-300 hover:border-neutral-500",
        outlined: "bg-transparent border-1 border-solid border-neutral-300 hover:border-neutral-500 shadow-none",
        ghost: "bg-transparent border-transparent shadow-none",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "filled",
    },
  },
)
