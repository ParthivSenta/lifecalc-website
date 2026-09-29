import PageLayout from '../components/layout/PageLayout'
import Disclaimer from '../components/home/Disclaimer'
import Features from '../components/home/Features'
import FinalCTA from '../components/home/FinalCTA'
import Hero from '../components/home/Hero'
import HowItWorks from '../components/home/HowItWorks'
import TrustSection from '../components/home/TrustSection'
import WhatIsLifeCalc from '../components/home/WhatIsLifeCalc'
import TrustBanner from '../components/home/TrustBanner'
import InteractiveCalculator from '../components/home/InteractiveCalculator'
import FAQ from '../components/home/FAQ'

export default function Home() {
  return (
    <PageLayout title="LifeCalc — Understand Your Money. Plan Your Future.">
      <Hero />
      <TrustBanner />
      <InteractiveCalculator />
      <WhatIsLifeCalc />
      <Features />
      <HowItWorks />
      <FAQ />
      <TrustSection />
      <FinalCTA />
      <Disclaimer />
    </PageLayout>
  )
}
