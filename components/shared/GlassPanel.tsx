'use client'

import { cn } from '@/lib/utils/cn'

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  strong?: boolean
  onClick?: () => void
}

export function GlassPanel({ children, className, strong, onClick }: GlassPanelProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        strong ? 'glass-strong' : 'glass',
        'rounded-xl',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
