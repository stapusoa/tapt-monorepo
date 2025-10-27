import { useState } from "react"
import { Card } from "@/components/ui/card/card-shad"
import type { PhaseCardProps } from "@/lib/types"

export function PhaseCard({
  phaseNumber,
  title,
  description,
  children, }: PhaseCardProps) {

  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      className="p-6 cursor-pointer transition-all hover:shadow-lg"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex items-start justify-between space-x-4">
        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
          {phaseNumber}
        </div>
        <div className="flex-1">
          <h4 className="mb-2 font-semibold">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center">
          {/* Arrow rotates when expanded */}
          <svg
            className={`w-5 h-5 text-gray-600 transition-transform ${expanded ? "rotate-180" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Expandable content */}
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ${expanded ? "max-h-[2000px]" : "max-h-0"
          }`}
      >
        {children}
      </div>
    </Card>
  )
}