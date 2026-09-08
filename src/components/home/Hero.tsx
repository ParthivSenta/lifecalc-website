import { TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import appIcon from '../../assets/icon.png'
import AppStoreButtons from '../ui/AppStoreButtons'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section className="bg-brand-deep overflow-hidden" aria-label="Hero">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="text-center lg:text-left">
            {/* App identity badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 text-brand-tint text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <img
                src={appIcon}
                alt=""
                aria-hidden="true"
                className="w-4 h-4 rounded-[4px] object-cover shrink-0"
              />
              Simple financial planning
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-on-brand leading-tight tracking-tight">
              Understand your money.{' '}
              <span className="text-brand-tint">Plan your future.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-on-brand/75 leading-relaxed max-w-lg mx-auto lg:mx-0">
              LifeCalc helps you explore financial goals, investments, retirement
              planning, and future projections through simple and
              easy-to-understand calculators.
            </p>

            {/* Store buttons */}
            <div className="mt-8 flex flex-col items-center lg:items-start gap-4">
              <AppStoreButtons />
              <Link
                to="/privacy-policy"
                className="text-xs text-on-brand/50 hover:text-on-brand/80 transition-colors"
              >
                Privacy Policy →
              </Link>
            </div>
          </div>

          {/* Right: abstract financial card */}
          <div className="flex justify-center lg:justify-end" aria-hidden="true">
            <HeroCard />
          </div>
        </div>
      </Container>
    </section>
  )
}

function HeroCard() {
  return (
    <div className="w-full max-w-sm">
      {/* Main card */}
      <div className="bg-surface rounded-[24px] p-6 shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-muted font-medium uppercase tracking-wide">Projected Portfolio</p>
            <p className="text-3xl font-bold text-foreground mt-1">₹1.25 Cr</p>
          </div>
          <div className="w-10 h-10 rounded-[10px] bg-brand-soft flex items-center justify-center shrink-0">
            <TrendingUp size={18} className="text-brand" />
          </div>
        </div>

        {/* Chart illustration */}
        <div className="relative h-24 mb-5 overflow-hidden">
          <svg
            viewBox="0 0 280 96"
            fill="none"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00786C" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#00786C" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 80 C40 80 50 68 80 60 C110 52 120 44 150 32 C180 20 200 18 230 10 C250 5 265 4 280 2"
              stroke="#00786C"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M0 80 C40 80 50 68 80 60 C110 52 120 44 150 32 C180 20 200 18 230 10 C250 5 265 4 280 2 L280 96 L0 96 Z"
              fill="url(#chartGrad)"
            />
            <circle cx="280" cy="2" r="4" fill="#00786C" />
            <circle cx="280" cy="2" r="7" fill="#00786C" fillOpacity="0.2" />
          </svg>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          <StatPill label="Return" value="+14.2%" positive />
          <StatPill label="Duration" value="15 yrs" />
          <StatPill label="Monthly" value="₹8,500" />
        </div>
      </div>

      {/* Secondary card: Goal tracker */}
      <div className="mt-3 bg-brand-deep/60 backdrop-blur rounded-[20px] p-5 border border-white/10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-on-brand/70 font-medium">Retirement Goal</p>
          <span className="text-xs text-brand-tint font-semibold bg-white/10 px-2 py-0.5 rounded-full">On track</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5">
          <div className="bg-brand-tint h-1.5 rounded-full" style={{ width: '68%' }} />
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-xs text-on-brand/50">68% of goal</p>
          <p className="text-xs text-on-brand/50">₹2 Cr target</p>
        </div>
      </div>
    </div>
  )
}

function StatPill({
  label,
  value,
  positive = false,
}: {
  label: string
  value: string
  positive?: boolean
}) {
  return (
    <div className="bg-background rounded-[10px] px-3 py-2.5 text-center">
      <p className="text-xs text-muted mb-0.5">{label}</p>
      <p className={`text-sm font-semibold ${positive ? 'text-success' : 'text-foreground'}`}>{value}</p>
    </div>
  )
}
