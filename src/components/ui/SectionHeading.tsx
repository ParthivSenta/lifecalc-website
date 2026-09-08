import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  description?: ReactNode
  /** 'left' | 'center' (default) */
  align?: 'left' | 'center'
  /** Override heading element */
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  /** Smaller variant for sub-sections */
  size?: 'default' | 'sm'
}

export default function SectionHeading({
  title,
  description,
  align = 'center',
  as: Tag = 'h2',
  className = '',
  size = 'default',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleSize =
    size === 'sm'
      ? 'text-2xl sm:text-3xl'
      : 'text-3xl sm:text-4xl'

  return (
    <div className={`${alignClass} ${className}`}>
      <Tag
        className={`${titleSize} font-bold text-foreground leading-tight tracking-tight`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg text-muted leading-relaxed ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
