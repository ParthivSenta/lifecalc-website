import appIcon from '../../assets/icon.png'
import AppStoreButtons from '../ui/AppStoreButtons'
import Container from '../ui/Container'

export default function FinalCTA() {
  return (
    <section
      id="download"
      className="bg-background py-16 sm:py-20 lg:py-24 scroll-mt-14"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-[#004B45] to-[#002D29] rounded-[32px] px-8 py-12 sm:px-14 sm:py-16 flex flex-col md:flex-row items-center gap-8 sm:gap-12 shadow-2xl shadow-black/20 border border-white/10">

            {/* Ambient inner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-brand-tint/15 rounded-full blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 bg-brand/30 rounded-full blur-3xl"
            />

            {/* App icon with ring */}
            <div className="shrink-0 relative z-10">
              <div className="p-1 rounded-[28px] bg-gradient-to-b from-white/30 to-white/5 shadow-2xl">
                <img
                  src={appIcon}
                  alt="LifeCalc app icon"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-[24px] shadow-lg object-cover"
                />
              </div>
            </div>

            {/* Copy + buttons */}
            <div className="text-center md:text-left flex-1 min-w-0 z-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-tint uppercase tracking-widest mb-2 bg-white/10 px-3 py-1 rounded-full">
                <span>Free on iOS &amp; Android</span>
              </div>
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-brand leading-tight tracking-tight"
              >
                Take control of your financial destiny today.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-on-brand/75 leading-relaxed max-w-xl">
                Join thousands of disciplined savers who use LifeCalc to calculate compound growth, plan early retirement, and stay financially confident.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center md:items-start gap-4">
                <AppStoreButtons size="md" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
