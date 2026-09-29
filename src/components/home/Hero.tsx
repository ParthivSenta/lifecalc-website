import { TrendingUp, ShieldCheck, Sparkles, Wifi, BatteryMedium, PieChart, Target, SlidersHorizontal } from 'lucide-react'
import appIcon from '../../assets/icon.png'
import AppStoreButtons from '../ui/AppStoreButtons'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section className="relative bg-brand-deep overflow-hidden pt-6 pb-20 sm:pb-24 lg:pb-28" aria-label="Hero">
      {/* Background ambient lighting effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-brand/25 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-[400px] h-[400px] bg-brand-tint/10 rounded-full blur-2xl"
      />

      <Container>
        <div className="py-8 sm:py-12 lg:py-16 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left copy column */}
          <div className="lg:col-span-7 text-center lg:text-left z-10">
            {/* Trust rating badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-xs text-brand-tint text-xs font-medium px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
              <span className="flex text-amber-300 text-xs">★★★★★</span>
              <span className="text-white/40">|</span>
              <span className="text-on-brand/90 font-medium">4.9 App Store Rating</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline text-brand-tint font-semibold">100% Private</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-on-brand leading-[1.12] tracking-tight">
              Understand your money.{' '}
              <span className="bg-gradient-to-r from-brand-tint via-[#B0F2E8] to-emerald-300 bg-clip-text text-transparent">
                Plan your future.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-on-brand/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              LifeCalc turns confusing financial formulas into clear, visual decisions.
              Explore SIP compound growth, plan your retirement freedom, and reach life goals
              with total privacy on your iPhone and Android.
            </p>

            {/* Store buttons */}
            <div className="mt-8 flex flex-col items-center lg:items-start gap-4">
              <AppStoreButtons size="md" />

              {/* Trust checklist */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mt-2 text-xs text-on-brand/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-brand-tint shrink-0" />
                  100% On-Device &amp; Private
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-brand-tint shrink-0" />
                  No Bank Login Required
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Works Fully Offline
                </span>
              </div>
            </div>
          </div>

          {/* Right device mockup column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10" aria-hidden="true">
            <div className="relative">
              {/* Subtle background glow around phone */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand to-brand-tint/30 rounded-[50px] blur-xl opacity-30" />

              {/* Floating micro-badge: returns */}
              <div className="hidden sm:flex absolute -left-12 top-20 z-20 items-center gap-2 bg-surface/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-border">
                <div className="w-8 h-8 rounded-xl bg-positive-soft flex items-center justify-center text-positive">
                  <TrendingUp size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted uppercase font-semibold">Compound Growth</p>
                  <p className="text-xs font-bold text-positive">+₹97.8 Lakhs gained</p>
                </div>
              </div>

              {/* Floating micro-badge: milestone */}
              <div className="hidden sm:flex absolute -right-6 bottom-24 z-20 items-center gap-2 bg-brand-deep/90 text-on-brand backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white/15">
                <div className="w-8 h-8 rounded-xl bg-brand flex items-center justify-center text-brand-tint">
                  <Target size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-brand-tint uppercase font-semibold">Retirement Goal</p>
                  <p className="text-xs font-bold text-white">Target: Age 50</p>
                </div>
              </div>

              {/* Smartphone Frame */}
              <div className="w-[300px] sm:w-[320px] rounded-[46px] p-3 bg-neutral-900 ring-1 ring-white/20 shadow-2xl shadow-black/80 relative">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700" />
                </div>

                {/* Inner Screen */}
                <div className="rounded-[36px] overflow-hidden bg-field-bg border border-neutral-800 text-foreground flex flex-col select-none">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-3 pb-1 text-[11px] font-semibold text-neutral-400">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <Wifi size={12} />
                      <BatteryMedium size={14} />
                    </div>
                  </div>

                  {/* App Screen Header */}
                  <div className="px-5 pt-3 pb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={appIcon} alt="" className="w-6 h-6 rounded-[6px]" />
                      <span className="text-xs font-bold tracking-tight text-foreground">LifeCalc</span>
                    </div>
                    <span className="text-[10px] font-semibold bg-brand-soft text-brand px-2 py-0.5 rounded-full">
                      SIP Planner
                    </span>
                  </div>

                  {/* App Screen Content */}
                  <div className="p-4 space-y-3">
                    {/* Portfolio Card */}
                    <div className="bg-surface rounded-2xl p-4 shadow-sm border border-border">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase font-bold text-muted tracking-wider">
                          Projected Wealth
                        </span>
                        <span className="text-[10px] font-bold text-positive bg-positive-soft px-1.5 py-0.5 rounded">
                          +262% Return
                        </span>
                      </div>
                      <div className="text-2xl font-extrabold text-foreground">
                        ₹1,24,80,950
                      </div>

                      {/* Mini Chart */}
                      <div className="relative h-20 mt-2 mb-1">
                        <svg viewBox="0 0 240 70" fill="none" className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="phoneChartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#00786C" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#00786C" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0 65 C40 64 70 56 100 48 C140 38 170 24 200 12 C215 7 230 3 240 1"
                            stroke="#00786C"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M0 65 C40 64 70 56 100 48 C140 38 170 24 200 12 C215 7 230 3 240 1 L240 70 L0 70 Z"
                            fill="url(#phoneChartGrad)"
                          />
                          <circle cx="240" cy="1" r="3.5" fill="#00786C" />
                        </svg>
                      </div>

                      {/* Invested vs Wealth pill breakdown */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/70 text-[10px]">
                        <div>
                          <p className="text-muted">Invested</p>
                          <p className="font-bold text-foreground">₹27.0 Lakhs</p>
                        </div>
                        <div>
                          <p className="text-muted">Est. Growth</p>
                          <p className="font-bold text-positive">+₹97.8 Lakhs</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Slider Mock */}
                    <div className="bg-surface rounded-2xl p-3 border border-border text-[11px] space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-muted">Monthly SIP</span>
                        <span className="font-bold text-foreground">₹15,000</span>
                      </div>
                      <div className="w-full bg-field-bg rounded-full h-1.5 overflow-hidden">
                        <div className="bg-brand h-full rounded-full" style={{ width: '45%' }} />
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-muted">
                        <span>Horizon: 15 Years</span>
                        <span>Exp. Return: 13.5%</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulated App Tab Bar */}
                  <div className="mt-auto bg-surface border-t border-border py-2 px-6 flex justify-around items-center text-muted">
                    <div className="flex flex-col items-center gap-0.5 text-brand">
                      <TrendingUp size={14} />
                      <span className="text-[9px] font-bold">Growth</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Target size={14} />
                      <span className="text-[9px]">Goals</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <PieChart size={14} />
                      <span className="text-[9px]">Corpus</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <SlidersHorizontal size={14} />
                      <span className="text-[9px]">Tools</span>
                    </div>
                  </div>

                  {/* Home Bar */}
                  <div className="w-28 h-1 bg-neutral-400 rounded-full mx-auto my-1.5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
