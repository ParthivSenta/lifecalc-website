import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  /** Use "narrow" for legal/reading content (~750px), default is wide (~1152px) */
  size?: 'default' | 'narrow'
}

export default function Container({ children, className = '', size = 'default' }: ContainerProps) {
  const maxWidth = size === 'narrow' ? 'max-w-3xl' : 'max-w-6xl'
  return (
    <div className={`${maxWidth} mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
