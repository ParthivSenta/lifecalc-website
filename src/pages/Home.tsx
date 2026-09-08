import PageLayout from '../components/layout/PageLayout'
import Disclaimer from '../components/home/Disclaimer'
import Features from '../components/home/Features'
import FinalCTA from '../components/home/FinalCTA'
import Hero from '../components/home/Hero'
import HowItWorks from '../components/home/HowItWorks'
import TrustSection from '../components/home/TrustSection'
import WhatIsLifeCalc from '../components/home/WhatIsLifeCalc'

export default function Home() {
  return (
    <PageLayout title="LifeCalc — Understand Your Money. Plan Your Future.">
      <Hero />
      <WhatIsLifeCalc />
      <Features />
      <HowItWorks />
      <TrustSection />
      <FinalCTA />
      <Disclaimer />
    </PageLayout>
  )
}
