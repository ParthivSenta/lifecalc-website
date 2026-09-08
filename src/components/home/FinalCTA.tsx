import appIcon from '../../assets/icon.png'
import AppStoreButtons from '../ui/AppStoreButtons'
import Container from '../ui/Container'

export default function FinalCTA() {
  return (
    <section
      className="bg-brand-soft py-16 sm:py-20"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Card */}
          <div className="bg-brand-deep rounded-[24px] px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-center gap-8 sm:gap-10">

            {/* App icon */}
            <div className="shrink-0">
              <img
                src={appIcon}
                alt="LifeCalc app icon"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] shadow-xl shadow-black/30 object-cover"
              />
            </div>

            {/* Copy + buttons */}
            <div className="text-center sm:text-left flex-1 min-w-0">
              <p className="text-xs font-semibold text-brand-tint uppercase tracking-widest mb-2">
                Available Now
              </p>
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl font-bold text-on-brand leading-tight tracking-tight"
              >
                Start planning with more clarity.
              </h2>
              <p className="mt-2 text-sm text-on-brand/65 leading-relaxed">
                Explore your financial possibilities with simple calculations
                and easy-to-understand projections.
              </p>
              <div className="mt-5 flex justify-center sm:justify-start">
                <AppStoreButtons />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
