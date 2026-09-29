import { useState } from 'react'
import { ChevronDown, HelpCircle, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

interface FAQItem {
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    question: 'Is LifeCalc really free to use?',
    answer:
      'Yes, LifeCalc is free to download and use. We believe everyone deserves access to clear, transparent financial planning tools without predatory paywalls or aggressive advertising.',
  },
  {
    question: 'Do I need to link my bank account or sign up?',
    answer:
      'No. Unlike typical finance apps that require linking bank credentials or granting access to SMS records, LifeCalc requires zero bank logins. You enter your scenarios freely without exposing sensitive financial accounts.',
  },
  {
    question: 'Where is my financial data stored?',
    answer:
      'LifeCalc is built on a 100% on-device privacy model. Your inputs and saved projections are stored locally on your device. We do not transmit, analyze, or sell your personal financial numbers to any remote servers or third parties.',
  },
  {
    question: 'How accurate are the calculations and formulas?',
    answer:
      'Our calculators use standard mathematical financial models (such as compound annuity formulas, CAGR, XIRR principles, and inflation adjustments). Results are mathematically exact based on the parameters and rates you select.',
  },
  {
    question: 'Can I use LifeCalc when I am offline?',
    answer:
      'Yes! Since all calculation engines run natively on your phone, LifeCalc works seamlessly without an internet connection, cellular data, or Wi-Fi.',
  },
  {
    question: 'Is LifeCalc available for both iOS and Android?',
    answer:
      'Yes, LifeCalc is natively optimized for both Apple iPhone (iOS) and Android smartphones, downloadable directly from the App Store and Google Play Store.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx))
  }

  return (
    <section
      id="faq"
      className="bg-surface py-16 sm:py-20 lg:py-24 border-t border-border scroll-mt-14"
      aria-labelledby="faq-heading"
    >
      <Container size="narrow">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-brand-soft text-brand text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <HelpCircle size={13} />
            Common Questions
          </div>
          <SectionHeading
            as="h2"
            title="Frequently Asked Questions"
            description="Clear answers about how LifeCalc works, our privacy commitment, and our calculation models."
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-field-bg/70 border-brand-tint shadow-xs'
                    : 'bg-surface border-border hover:border-brand-tint/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
                >
                  <span className="text-sm sm:text-base font-bold text-foreground pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-brand text-on-brand rotate-180'
                        : 'bg-brand-soft text-brand'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/50 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-10 p-5 rounded-2xl bg-background border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-soft flex items-center justify-center text-brand shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Still have questions?</p>
              <p className="text-xs text-muted">We respond to every user message.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center text-xs font-semibold bg-brand text-on-brand px-4 py-2 rounded-xl hover:bg-brand-deep transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </Container>
    </section>
  )
}
