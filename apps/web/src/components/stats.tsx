import { cn } from "@/lib/utils"
import { statsVariants } from "@/components/constants"
import type { StatsProps } from "@/components/types"

export function Stats({ title, subtitle, stats, className, variant, container }: StatsProps) {
  return (
    <section className={cn(statsVariants({ variant, container }), className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              {stat.description && <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
