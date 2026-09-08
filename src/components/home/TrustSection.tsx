import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import Container from '../ui/Container'

export default function TrustSection() {
  return (
    <section
      className="bg-brand-deep py-16 sm:py-20"
      aria-labelledby="trust-heading"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="w-12 h-12 rounded-[12px] bg-white/10 flex items-center justify-center mx-auto mb-6"
            aria-hidden="true"
          >
            <ShieldCheck size={22} className="text-brand-tint" />
          </div>

          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl font-bold text-on-brand leading-tight tracking-tight"
          >
            Built with clarity in mind
          </h2>

          <p className="mt-4 text-base sm:text-lg text-on-brand/70 leading-relaxed">
            LifeCalc is designed to make financial planning easier to understand
            while giving you clear information about how the application handles
            your data.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/privacy-policy"
              className="inline-flex items-center justify-center gap-2 bg-brand text-on-brand font-semibold px-6 py-3 rounded-[12px] hover:bg-brand/90 transition-colors text-sm"
            >
              Read Privacy Policy
            </Link>
            <Link
              to="/delete-account"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-on-brand font-medium px-6 py-3 rounded-[12px] hover:bg-white/15 transition-colors text-sm border border-white/10"
            >
              Learn About Data Controls
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
