import { useState } from 'react'
import {
  TrendingUp,
  Landmark,
  Target,
  BarChart2,
  Percent,
  Flame,
} from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import type { ReactNode } from 'react'

type Category = 'all' | 'wealth' | 'retirement' | 'goals' | 'debt'

interface Feature {
  category: Category
  badge: string
  icon: ReactNode
  title: string
  description: string
  metric: string
}

const FEATURES: Feature[] = [
  {
    category: 'wealth',
    badge: 'Most Popular',
    icon: <TrendingUp size={20} className="text-brand" />,
    title: 'SIP & Compound Growth',
    description:
      'Simulate regular monthly investments, adjust annual step-ups, and see how compound interest turns small savings into life-changing wealth.',
    metric: 'Step-up SIP • Lumpsum • CAGR',
  },
  {
    category: 'retirement',
    badge: 'FIRE Ready',
    icon: <Landmark size={20} className="text-brand" />,
    title: 'Retirement Freedom Planner',
    description:
      'Estimate the exact corpus required to sustain your lifestyle after work, adjusted for realistic healthcare and lifestyle inflation.',
    metric: '4% Rule • Inflation Adjusted',
  },
  {
    category: 'goals',
    badge: 'Milestones',
    icon: <Target size={20} className="text-brand" />,
    title: 'Life Goal Calculators',
    description:
      'Plan for dream milestones — buying a house, children’s higher education, or starting a business. Work backward from your target.',
    metric: 'Target Corpus • Monthly Savings Required',
  },
  {
    category: 'debt',
    badge: 'Save Interest',
    icon: <Percent size={20} className="text-brand" />,
    title: 'Loan EMI & Prepayment',
    description:
      'Calculate home and car loan EMIs, and visualize how small extra prepayments can shave years off your loan and save lakhs in interest.',
    metric: 'Amortization • Interest vs Principal',
  },
  {
    category: 'wealth',
    badge: 'Visual Insights',
    icon: <BarChart2 size={20} className="text-brand" />,
    title: 'Interactive Graphs & Summaries',
    description:
      'Every calculator renders high-definition curves and milestone breakdowns, so you immediately comprehend the math without financial jargon.',
    metric: 'Year-by-year Breakdown • Asset Splits',
  },
  {
    category: 'retirement',
    badge: 'Financial Independence',
    icon: <Flame size={20} className="text-brand" />,
    title: 'FIRE Number & Coast FIRE',
    description:
      'Determine when work becomes optional. Calculate your Lean FIRE, Fat FIRE, or Coast FIRE numbers based on your personal savings rate.',
    metric: 'Savings Rate % • Freedom Timeline',
  },
]

export default function Features() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredFeatures =
    activeCategory === 'all'
      ? FEATURES
      : FEATURES.filter((f) => f.category === activeCategory)

  return (
    <section
      id="features"
      className="bg-surface py-16 sm:py-20 lg:py-24 border-t border-border scroll-mt-14"
      aria-labelledby="features-heading"
    >
      <Container>
        <SectionHeading
          as="h2"
          title="Tools built for real-life financial decisions"
          description="Every calculator in LifeCalc is purpose-built for the questions you actually ask — without complex spreadsheets or confusing terminology."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12">
          {[
            { id: 'all', label: 'All Calculators' },
            { id: 'wealth', label: 'Wealth & SIP' },
            { id: 'retirement', label: 'Retirement & FIRE' },
            { id: 'goals', label: 'Life Goals' },
            { id: 'debt', label: 'Loans & EMI' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand text-on-brand shadow-xs'
                  : 'bg-field-bg text-muted hover:text-foreground hover:bg-surface-secondary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function FeatureCard({ icon, title, description, badge, metric }: Feature) {
  return (
    <div className="group bg-field-bg/60 rounded-2xl p-6 border border-border hover:border-brand-tint hover:bg-surface hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-soft flex items-center justify-center group-hover:bg-brand-tint group-hover:scale-105 transition-all">
            {icon}
          </div>
          <span className="text-[10px] font-bold text-brand uppercase tracking-wider bg-surface px-2.5 py-1 rounded-full border border-border shadow-xs">
            {badge}
          </span>
        </div>
        <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
      </div>

      <div className="pt-3 border-t border-border/70 flex items-center justify-between text-[11px] text-brand font-medium">
        <span>{metric}</span>
      </div>
    </div>
  )
}
