import { cn } from "@/lib/utils"
import { ctaVariants } from "@/components/constants"
import type { CTAProps } from "@/components/types"

export function CTA({ title, subtitle, children, className, variant, alignment, container }: CTAProps) {
  return (
    <section className={cn(ctaVariants({ variant, alignment, container }), className)}>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
          )}
          {children && <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">{children}</div>}
        </div>
      </div>
    </section>
  )
}
