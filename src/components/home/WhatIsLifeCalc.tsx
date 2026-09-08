import { Calculator, PiggyBank, BarChart2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function WhatIsLifeCalc() {
  return (
    <section className="bg-surface py-16 sm:py-20" aria-labelledby="what-is-heading">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <SectionHeading
              as="h2"
              title="Financial planning without unnecessary complexity."
              align="left"
              description="LifeCalc takes the guesswork out of personal finance. Enter your details, choose a calculator, and get clear projections — no financial background required."
            />

            <ul className="mt-8 space-y-4" role="list">
              {[
                'Explore investment growth over time',
                'Estimate your retirement corpus',
                'Understand how much you need for big life goals',
                'See projections in plain, understandable language',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-4 h-4 rounded-full bg-brand-soft flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  </span>
                  <span className="text-sm text-ink-soft leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: stacked feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-hidden="true">
            <FeatureTile
              icon={<Calculator size={20} className="text-brand" />}
              title="Simple calculators"
              desc="Clean inputs designed for anyone, not just finance professionals."
            />
            <FeatureTile
              icon={<PiggyBank size={20} className="text-brand" />}
              title="Goal-based planning"
              desc="Work backwards from your goals to understand what it takes to get there."
            />
            <FeatureTile
              icon={<BarChart2 size={20} className="text-brand" />}
              title="Visual projections"
              desc="Charts and summaries that make outcomes easy to understand."
              className="sm:col-span-2"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

function FeatureTile({
  icon,
  title,
  desc,
  className = '',
}: {
  icon: React.ReactNode
  title: string
  desc: string
  className?: string
}) {
  return (
    <div
      className={`bg-background rounded-[16px] p-5 border border-border ${className}`}
    >
      <div className="w-9 h-9 rounded-[8px] bg-brand-soft flex items-center justify-center mb-3">
        {icon}
      </div>
      <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  )
}
