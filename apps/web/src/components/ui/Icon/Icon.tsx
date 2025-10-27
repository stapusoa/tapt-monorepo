import React from 'react'
import { cn } from '@/lib/utils'
import { IconMapping } from './mapping'
import type { IconProps } from './types'

const iconCss = (size: string | number) =>
  cn('[&>svg]:h-inherit [&>svg]:w-inherit', {
  'h-8 w-8': size === 'lg',
  'h-6 w-6': size === 'md',
  'h-4 w-4': size === 'sm',
})

export const Icon = ({ name, size = 'md', className }: IconProps): React.ReactElement | null => {
  // safely cast and check if the name exists in the mapping
  const iconKey = name as keyof typeof IconMapping
  const IconComponent = IconMapping[iconKey]

  if (!IconComponent) {
    // optionally handle unknown icon names gracefully
    console.warn(`⚠️ Unknown icon name: "${name}"`)
    return null
  }

  return (
    <i aria-hidden="true" className={cn(iconCss(size), className)}>
      {IconComponent}
    </i>
  )
}
