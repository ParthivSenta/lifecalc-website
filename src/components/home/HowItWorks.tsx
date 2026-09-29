import { Compass, SlidersHorizontal, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const STEPS = [
  {
    number: '01',
    icon: <Compass size={22} className="text-brand" />,
    title: 'Choose your scenario',
    description:
      'Select what you want to solve: wealth compounding, retirement readiness, house purchase down payment, or loan prepayment.',
  },
  {
    number: '02',
    icon: <SlidersHorizontal size={22} className="text-brand" />,
    title: 'Adjust your numbers',
    description:
      'Slide your monthly investment, current savings, expected returns, and target timeline with instant real-time calculation.',
  },
  {
    number: '03',
    icon: <CheckCircle2 size={22} className="text-brand" />,
    title: 'Act on clear insights',
    description:
      'Review your exact milestones, inflation-adjusted wealth splits, and understand how small habit tweaks change your outcome.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-background py-16 sm:py-20 lg:py-24 border-y border-border scroll-mt-14"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <SectionHeading
          as="h2"
          title="Simple inputs. Life-changing clarity."
          description="LifeCalc turns financial anxiety into a clear, actionable plan in three easy steps."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Desktop connector line */}
          <div
            className="hidden md:block absolute top-10 left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-brand-soft via-brand-tint to-brand-soft z-0"
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-border hover:border-brand-tint shadow-xs transition-all duration-200"
            >
              {/* Step Icon Badge */}
              <div className="w-14 h-14 rounded-2xl bg-brand-soft border-4 border-surface shadow-xs flex items-center justify-center mb-5 shrink-0 relative">
                {step.icon}
                <span className="absolute -top-2 -right-2 bg-brand text-on-brand text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-surface">
                  {step.number}
                </span>
              </div>

              <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
