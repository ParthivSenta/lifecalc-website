import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import Container from '../components/ui/Container'

export default function NotFound() {
  return (
    <PageLayout title="Page Not Found — LifeCalc">
      <div className="bg-background flex-1 flex items-center">
        <Container>
          <div className="py-20 sm:py-28 flex flex-col items-center text-center">
            {/* 404 number */}
            <div className="relative mb-8 select-none" aria-hidden="true">
              <span className="text-[7rem] sm:text-[9rem] font-bold text-brand-soft leading-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[7rem] sm:text-[9rem] font-bold text-brand/10 leading-none blur-[2px]">
                  404
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
              This page doesn't exist.
            </h1>
            <p className="text-base text-muted max-w-sm leading-relaxed mb-10">
              The page you're looking for may have moved or is no longer
              available.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-brand text-on-brand font-semibold px-6 py-3 rounded-[12px] hover:bg-brand-deep transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            {/* Quick links */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {[
                { label: 'Privacy Policy', to: '/privacy-policy' },
                { label: 'Terms & Conditions', to: '/terms-and-conditions' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted hover:text-brand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  )
}
