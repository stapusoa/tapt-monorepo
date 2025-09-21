import { cn } from "@/lib/utils"
import { bentoGridVariants, bentoItemVariants } from "@/components/constants"
import type { BentoGridProps, BentoItemProps } from "@/components/types"

export function BentoGrid({ children, className, title, subtitle, variant, container }: BentoGridProps) {
  return (
    <section className={cn(bentoGridVariants({ variant, container }), className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        <div className="grid grid-cols-12 grid-rows-6 gap-4 auto-rows-fr min-h-[600px]">{children}</div>
      </div>
    </section>
  )
}

export function BentoItem({ children, className, size }: BentoItemProps) {
  return <div className={cn(bentoItemVariants({ size }), className)}>{children}</div>
}
