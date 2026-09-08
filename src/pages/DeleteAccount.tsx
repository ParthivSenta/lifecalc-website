import { Mail, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import Container from '../components/ui/Container'
import { SITE } from '../constants/site'

const STEPS = [
  'Contact our support team using the email address below.',
  'Use the subject line: "Account Deletion Request".',
  'Include the email address associated with your LifeCalc account.',
  'Our team will review your request and process it in accordance with applicable requirements.',
]

export default function DeleteAccount() {
  const mailtoHref = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent('Account Deletion Request')}&body=${encodeURIComponent('Hello,\n\nI would like to request deletion of my LifeCalc account and all associated personal data.\n\nAccount email: [your account email here]\n\nThank you.')}`

  return (
    <PageLayout title="Account & Data Deletion — LifeCalc">
      {/* Page header */}
      <div className="bg-surface border-b border-border">
        <Container size="narrow">
          <div className="py-10 sm:py-14">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Account &amp; Data Deletion
            </h1>
            <p className="mt-3 text-base text-muted max-w-lg leading-relaxed">
              You can request deletion of your LifeCalc account and associated
              personal data at any time.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-background">
        <Container size="narrow">
          <div className="py-10 sm:py-14 space-y-8">

            {/* What gets deleted */}
            <div className="bg-surface rounded-[16px] border border-border p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-brand-soft flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-brand" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-foreground mb-2">
                    What does deletion include?
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    When you request account deletion, we will process the
                    removal of your personal account information and associated
                    data from our systems, subject to any legal retention
                    obligations.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Your account profile and credentials',
                      'Any saved preferences or settings',
                      'Personal data associated with your account',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-success mt-0.5 shrink-0" />
                        <span className="text-sm text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="bg-surface rounded-[16px] border border-border p-6 sm:p-8">
              <h2 className="text-base font-semibold text-foreground mb-6">
                How to request account deletion
              </h2>
              <ol className="space-y-4" role="list">
                {STEPS.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span
                      className="w-7 h-7 rounded-full bg-brand-soft text-brand text-sm font-bold flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm text-muted leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 pt-6 border-t border-separator">
                <p className="text-sm font-medium text-foreground mb-3">
                  Ready to request deletion?
                </p>
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 bg-brand text-on-brand font-semibold px-5 py-2.5 rounded-[12px] hover:bg-brand-deep transition-colors text-sm"
                >
                  <Mail size={15} />
                  Request Account Deletion
                </a>
                <p className="mt-3 text-xs text-muted">
                  Opens your email client with the request pre-filled.
                </p>
              </div>
            </div>

            {/* Important notice */}
            <div className="bg-surface rounded-[16px] border border-border p-6 flex gap-4">
              <div className="w-8 h-8 rounded-[8px] bg-caution-soft flex items-center justify-center shrink-0">
                <AlertCircle size={15} className="text-caution" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  Important to know
                </h3>
                <ul className="space-y-2">
                  {[
                    'Deletion is permanent and cannot be undone.',
                    'We may be required to retain certain information to comply with legal obligations.',
                    'If you simply want to stop using LifeCalc, you can uninstall the app without requesting account deletion.',
                  ].map((note) => (
                    <li key={note} className="text-sm text-muted leading-relaxed">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact link */}
            <div className="bg-brand-soft rounded-[16px] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-brand-deep mb-0.5">
                  Have other questions about your data?
                </p>
                <p className="text-sm text-brand-deep/70">
                  Review our Privacy Policy or contact support directly.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link
                  to="/privacy-policy"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline whitespace-nowrap"
                >
                  Privacy Policy →
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline whitespace-nowrap"
                >
                  Contact Us →
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </PageLayout>
  )
}
