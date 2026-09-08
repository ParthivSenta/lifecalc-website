import {
  TrendingUp,
  Landmark,
  Target,
  BarChart2,
  Calculator,
  ShieldCheck,
} from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import type { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: <TrendingUp size={20} className="text-brand" />,
    title: 'Investment Planning',
    description:
      'Explore how your investments could grow over time with different rates of return and contribution schedules.',
  },
  {
    icon: <Landmark size={20} className="text-brand" />,
    title: 'Retirement Planning',
    description:
      'Estimate your retirement needs and understand how to plan for the future you want.',
  },
  {
    icon: <Target size={20} className="text-brand" />,
    title: 'Financial Goals',
    description:
      'Understand how much you may need to reach important life goals — a home, education, or a major purchase.',
  },
  {
    icon: <BarChart2 size={20} className="text-brand" />,
    title: 'Clear Projections',
    description:
      'Visualize financial outcomes with simple charts and projections that make results easy to interpret.',
  },
  {
    icon: <Calculator size={20} className="text-brand" />,
    title: 'Simple Calculations',
    description:
      'Use straightforward calculators without unnecessary complexity or financial jargon.',
  },
  {
    icon: <ShieldCheck size={20} className="text-brand" />,
    title: 'Privacy Focused',
    description:
      'Your privacy matters. Learn clearly how LifeCalc handles your information.',
  },
]

export default function Features() {
  return (
    <section
      className="bg-background py-16 sm:py-20"
      aria-labelledby="features-heading"
    >
      <Container>
        <SectionHeading
          as="h2"
          title="Tools designed for real-life financial planning"
          description="Every calculator in LifeCalc is built around genuine financial decisions people face — not abstract scenarios."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="group bg-surface rounded-[16px] p-6 border border-border hover:border-brand-tint hover:shadow-sm transition-all">
      <div className="w-10 h-10 rounded-[10px] bg-brand-soft flex items-center justify-center mb-4 group-hover:bg-brand-tint transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  )
}
