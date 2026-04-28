'use client'

import { cn } from '@/lib/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  glow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-fbu-yellow/50',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        // sizes
        size === 'sm' && 'px-4 py-2 text-sm rounded-lg',
        size === 'md' && 'px-6 py-3 text-base rounded-xl',
        size === 'lg' && 'px-8 py-4 text-lg rounded-xl',
        // variants
        variant === 'primary' && [
          'bg-fbu-yellow text-black font-semibold',
          'hover:bg-fbu-yellow-warm hover:scale-[1.02]',
          'active:scale-[0.98]',
          glow && 'shadow-glow-yellow',
        ],
        variant === 'secondary' && [
          'bg-transparent border border-fbu-yellow/40 text-fbu-yellow',
          'hover:border-fbu-yellow/80 hover:bg-fbu-yellow/5',
        ],
        variant === 'ghost' && [
          'bg-transparent text-[var(--text-secondary)]',
          'hover:text-white hover:bg-white/5',
        ],
        variant === 'danger' && [
          'bg-[var(--error)] text-white',
          'hover:opacity-90',
        ],
        className
      )}
    >
      {children}
    </button>
  )
}
