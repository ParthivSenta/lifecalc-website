import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

interface ButtonAsButton extends BaseProps {
  as?: 'button'
  href?: undefined
  to?: undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

interface ButtonAsLink extends BaseProps {
  as: 'a'
  href: string
  to?: undefined
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  target?: string
  rel?: string
}

interface ButtonAsRouterLink extends BaseProps {
  as: 'link'
  to: string
  href?: undefined
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-on-brand hover:bg-brand-deep focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
  secondary:
    'bg-brand-soft text-brand hover:bg-brand-tint focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
  ghost:
    'bg-transparent text-brand hover:bg-brand-soft focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
  outline:
    'bg-transparent border border-border text-ink hover:bg-surface-secondary focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm:  'px-4 py-2 text-sm rounded-[8px]',
  md:  'px-5 py-2.5 text-sm rounded-[12px]',
  lg:  'px-6 py-3 text-base rounded-[12px]',
}

function buildClasses(variant: ButtonVariant, size: ButtonSize, className: string) {
  return [
    'inline-flex items-center justify-center gap-2 font-medium leading-none',
    'cursor-pointer select-none',
    'disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props
  const classes = buildClasses(variant, size, className)

  if (props.as === 'a') {
    return (
      <a
        href={props.href}
        className={classes}
        onClick={props.onClick}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </a>
    )
  }

  if (props.as === 'link') {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
    </button>
  )
}
