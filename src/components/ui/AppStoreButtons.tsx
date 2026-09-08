import appStoreSvg from '../../assets/app-store.svg'
import playStoreSvg from '../../assets/play-store.svg'
import { SITE } from '../../constants/site'

interface AppStoreButtonsProps {
  className?: string
  /** Stack vertically instead of side-by-side */
  stacked?: boolean
}

export default function AppStoreButtons({
  className = '',
  stacked = false,
}: AppStoreButtonsProps) {
  const hasIos = Boolean(SITE.appStoreUrl)
  const hasAndroid = Boolean(SITE.playStoreUrl)

  if (!hasIos && !hasAndroid) return null

  return (
    <div
      className={[
        'flex gap-3',
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
          className="inline-flex shrink-0 rounded-[10px] transition-opacity hover:opacity-80 active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <img
            src={appStoreSvg}
            alt="Download on the App Store"
            className="h-[120px] w-auto"
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
          className="inline-flex shrink-0 rounded-[10px] transition-opacity hover:opacity-80 active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <img
            src={playStoreSvg}
            alt="Get it on Google Play"
            className="h-[120px] w-auto"
            draggable={false}
          />
        </a>
      )}
    </div>
  )
}
