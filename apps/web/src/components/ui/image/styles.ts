export const baseImageClass =
  "block size-full object-cover transition-opacity ease-in-out duration-300"

export const loadingClass = "opacity-50 blur-sm"

export const fallbackClass = baseImageClass

export const wrapperClass = "relative flex items-center justify-center w-full h-full"

export const bgStyles = {
  sm: "fixed z-0 inset-0 size-full object-cover bg-center block md:hidden",
  md: "fixed z-0 inset-0 size-full object-cover bg-center hidden md:block lg:hidden",
  lg: "fixed z-0 inset-0 size-full object-cover object-top-right hidden lg:block",
}