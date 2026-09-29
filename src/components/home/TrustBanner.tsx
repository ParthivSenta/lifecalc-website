import { ShieldCheck, Lock, WifiOff, Sparkles } from 'lucide-react'
import Container from '../ui/Container'

const TRUST_PILLARS = [
  {
    icon: <Lock className="w-5 h-5 text-brand" />,
    title: '100% On-Device Privacy',
    description:
      'All calculations run locally on your phone. No tracking, zero telemetry, and your data never leaves your device.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-brand" />,
    title: 'No Bank Login Needed',
    description:
      'Run realistic scenarios safely without ever linking bank accounts, sharing credentials, or giving third-party access.',
  },
  {
    icon: <WifiOff className="w-5 h-5 text-brand" />,
    title: 'Works Completely Offline',
    description:
      'No internet connection required. Plan your investments, retirement, and loan scenarios anywhere, anytime.',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-brand" />,
    title: 'Jargon-Free & Visual',
    description:
      'No complicated financial degrees required. Get instant visual clarity through interactive graphs and plain-language summaries.',
  },
]

export default function TrustBanner() {
  return (
    <section className="bg-surface border-y border-border py-12 sm:py-14" aria-label="Trust and Privacy">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-start p-5 rounded-2xl bg-background/60 border border-border/80 hover:border-brand-tint hover:bg-background transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-soft flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-brand-tint transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1.5">{pillar.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
