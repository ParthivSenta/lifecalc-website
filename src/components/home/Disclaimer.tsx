import { Link } from 'react-router-dom'
import { Info } from 'lucide-react'
import Container from '../ui/Container'

export default function Disclaimer() {
  return (
    <section
      className="bg-background py-12 sm:py-14"
      aria-labelledby="disclaimer-heading"
    >
      <Container size="narrow">
        <div className="bg-surface rounded-[16px] border border-border p-6 sm:p-8 flex gap-5">
          <div
            className="w-9 h-9 rounded-[8px] bg-caution-soft flex items-center justify-center shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <Info size={16} className="text-caution" />
          </div>
          <div>
            <h2
              id="disclaimer-heading"
              className="text-base font-semibold text-foreground mb-2"
            >
              A note about financial calculations
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              LifeCalc provides calculators and financial projections for
              educational and informational purposes. Results are estimates
              based on assumptions and the information provided. They should
              not be considered financial, investment, tax, or legal advice.
              Always consult a qualified professional before making financial
              decisions.
            </p>
            <Link
              to="/terms-and-conditions"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-brand hover:underline"
            >
              Read Terms &amp; Conditions
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
