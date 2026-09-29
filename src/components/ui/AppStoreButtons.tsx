import appStoreSvg from '../../assets/app-store.svg'
import playStoreSvg from '../../assets/play-store.svg'
import { SITE } from '../../constants/site'

interface AppStoreButtonsProps {
  className?: string
  /** Stack vertically instead of side-by-side */
  stacked?: boolean
  /** Button height size variant */
  size?: 'sm' | 'md' | 'lg'
}

export default function AppStoreButtons({
  className = '',
  stacked = false,
  size = 'md',
}: AppStoreButtonsProps) {
  const hasIos = Boolean(SITE.appStoreUrl)
  const hasAndroid = Boolean(SITE.playStoreUrl)

  if (!hasIos && !hasAndroid) return null

  const sizeClasses = {
    sm: 'h-12 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-16 sm:h-20',
  }[size]

  return (
    <div
      className={[
        'flex gap-3.5',
        stacked ? 'flex-col items-start' : 'flex-row flex-wrap items-center',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {hasIos && (
        <a
          href={SITE.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download LifeCalc on the App Store"
          className={`inline-flex ${sizeClasses} items-center justify-center shrink-0 rounded-[12px] px-2 transition-all duration-200 hover:scale-[1.03] hover:opacity-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 overflow-hidden`}
        >
          <img
            src={appStoreSvg}
            alt="Download on the App Store"
            className={`h-full w-auto object-contain drop-shadow-md`}
            draggable={false}
          />
        </a>
      )}
      {hasAndroid && (
        <a
          href={SITE.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get LifeCalc on Google Play"
          className={`inline-flex ${sizeClasses} items-center justify-center shrink-0 rounded-[12px] px-2 transition-all duration-200 hover:scale-[1.03] hover:opacity-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 overflow-hidden`}
        >
          <img
            src={playStoreSvg}
            alt="Get it on Google Play"
            className={`h-full w-auto object-contain drop-shadow-md`}
            draggable={false}
          />
        </a>
      )}
    </div>
  )
}
