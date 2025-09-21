import { cva } from "class-variance-authority"

export const bentoGridVariants = cva("py-16 sm:py-20 lg:py-24", {
  variants: {
    variant: {
      default: "bg-white",
      gray: "bg-gray-50",
      dark: "bg-gray-900",
    },
    container: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    container: true,
  },
})

export const bentoItemVariants = cva("rounded-lg border bg-card text-card-foreground shadow-sm", {
  variants: {
    size: {
      sm: "col-span-6 row-span-2",
      md: "col-span-8 row-span-3",
      lg: "col-span-12 row-span-4",
      tall: "col-span-6 row-span-4",
      wide: "col-span-8 row-span-2",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

export const ctaVariants = cva("py-16 sm:py-20 lg:py-24", {
  variants: {
    variant: {
      default: "bg-gray-50",
      primary: "bg-primary text-primary-foreground",
      dark: "bg-gray-900 text-white",
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
    },
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    container: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    alignment: "center",
    container: true,
  },
})

export const featureVariants = cva("py-16 sm:py-20 lg:py-24", {
  variants: {
    variant: {
      default: "bg-white",
      gray: "bg-gray-50",
      dark: "bg-gray-900 text-white",
    },
    layout: {
      "image-left": "lg:grid-cols-2 lg:gap-16",
      "image-right": "lg:grid-cols-2 lg:gap-16",
      "image-top": "grid-cols-1",
      "no-image": "grid-cols-1",
    },
    container: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    layout: "image-left",
    container: true,
  },
})

export const heroVariants = cva("relative flex items-center justify-center text-center", {
  variants: {
    size: {
      sm: "min-h-[50vh] py-16",
      md: "min-h-[70vh] py-20",
      lg: "min-h-screen py-24",
    },
    variant: {
      default: "bg-gradient-to-br from-blue-50 to-indigo-100",
      dark: "bg-gradient-to-br from-gray-900 to-gray-800 text-white",
      image: "text-white",
      minimal: "bg-white",
    },
    container: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "",
    },
  },
  defaultVariants: {
    size: "lg",
    variant: "default",
    container: true,
  },
})

export const statsVariants = cva("py-16 sm:py-20 lg:py-24", {
  variants: {
    variant: {
      default: "bg-white",
      gray: "bg-gray-50",
      dark: "bg-gray-900 text-white",
      primary: "bg-primary text-primary-foreground",
    },
    container: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    container: true,
  },
})

export const testimonialsVariants = cva("py-16 sm:py-20 lg:py-24", {
  variants: {
    variant: {
      default: "bg-white",
      gray: "bg-gray-50",
      dark: "bg-gray-900 text-white",
    },
    layout: {
      grid: "grid",
      carousel: "flex overflow-x-auto",
    },
    container: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    layout: "grid",
    container: true,
  },
})
