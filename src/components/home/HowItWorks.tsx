import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const STEPS = [
  {
    number: '01',
    title: 'Choose a calculator',
    description:
      'Select from investment growth, retirement planning, goal tracking, and more.',
  },
  {
    number: '02',
    title: 'Enter your financial details',
    description:
      'Input values like your savings, contributions, timeline, and expected returns.',
  },
  {
    number: '03',
    title: 'Understand your projections',
    description:
      'Review clear results and charts that show your potential financial future.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="bg-surface py-16 sm:py-20 border-y border-border"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <SectionHeading
          as="h2"
          title="Simple inputs. Clear insights."
          description="LifeCalc is designed to be approachable — no financial expertise needed."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-border z-0"
            aria-hidden="true"
          />

          {STEPS.map((step, idx) => (
            <Step key={step.number} step={step} last={idx === STEPS.length - 1} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function Step({
  step,
  last,
}: {
  step: (typeof STEPS)[number]
  last: boolean
}) {
  return (
    <div className={`relative z-10 flex flex-col items-center text-center px-4 ${!last ? 'mb-8 md:mb-0' : ''}`}>
      {/* Step indicator */}
      <div className="w-16 h-16 rounded-full bg-brand-soft border-4 border-surface flex items-center justify-center mb-5 shrink-0">
        <span className="text-lg font-bold text-brand">{step.number}</span>
      </div>

      <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
      <p className="text-sm text-muted leading-relaxed max-w-[220px]">{step.description}</p>

      {/* Mobile connector */}
      {!last && (
        <div className="md:hidden mt-6 w-px h-8 bg-border" aria-hidden="true" />
      )}
    </div>
  )
}
