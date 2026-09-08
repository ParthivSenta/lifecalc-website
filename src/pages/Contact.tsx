import { useState } from 'react'
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import Container from '../components/ui/Container'
import { SITE } from '../constants/site'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!validateEmail(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required.'
  if (!form.message.trim()) errors.message = 'Message is required.'
  return errors
}

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // Build mailto link as the submit action — no fake backend
    const subject = encodeURIComponent(`[LifeCalc] ${form.subject}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${SITE.supportEmail}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <PageLayout title="Contact LifeCalc Support">
      {/* Hero */}
      <div className="bg-brand-deep">
        <Container>
          <div className="py-14 sm:py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-on-brand tracking-tight">
              We're here to help.
            </h1>
            <p className="mt-3 text-base sm:text-lg text-on-brand/70 max-w-lg mx-auto leading-relaxed">
              Have a question, feedback, or need help with LifeCalc? Get in
              touch with us.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-background">
        <Container>
          <div className="py-12 sm:py-16 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
            {/* Contact info cards */}
            <div className="space-y-4">
              <ContactCard
                icon={<Mail size={18} className="text-brand" />}
                title="Email Support"
                description="Send us an email and we'll get back to you."
                action={
                  <a
                    href={`mailto:${SITE.supportEmail}`}
                    className="text-sm font-medium text-brand hover:underline break-all"
                  >
                    {SITE.supportEmail}
                  </a>
                }
              />
              <ContactCard
                icon={<MessageSquare size={18} className="text-brand" />}
                title="Share Feedback"
                description="Help us improve LifeCalc. We read every message."
                action={
                  <p className="text-sm text-muted">
                    Use the form to send your feedback directly.
                  </p>
                }
              />
            </div>

            {/* Form */}
            <div className="bg-surface rounded-[20px] border border-border p-6 sm:p-8">
              {submitted ? (
                <SuccessState onReset={() => { setSubmitted(false); setForm(INITIAL) }} />
              ) : (
                <ContactForm
                  form={form}
                  errors={errors}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  )
}

function ContactCard({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode
  title: string
  description: string
  action: React.ReactNode
}) {
  return (
    <div className="bg-surface rounded-[16px] border border-border p-5">
      <div className="w-9 h-9 rounded-[8px] bg-brand-soft flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted mb-3 leading-relaxed">{description}</p>
      {action}
    </div>
  )
}

function ContactForm({
  form,
  errors,
  onChange,
  onSubmit,
}: {
  form: FormState
  errors: FormErrors
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onSubmit: (e: React.FormEvent) => void
}) {
  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact form">
      <h2 className="text-lg font-semibold text-foreground mb-6">Send us a message</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Field
          label="Name"
          id="name"
          name="name"
          type="text"
          value={form.name}
          error={errors.name}
          onChange={onChange}
          autoComplete="name"
          placeholder="Your name"
        />
        <Field
          label="Email"
          id="email"
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={onChange}
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-ink-soft mb-1.5"
        >
          Subject <span className="text-caution" aria-hidden="true">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={onChange}
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={[
            'w-full bg-field-bg border rounded-[12px] px-3.5 py-2.5 text-sm text-foreground appearance-none',
            'focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand',
            errors.subject ? 'border-caution' : 'border-border',
          ].join(' ')}
        >
          <option value="">Select a topic…</option>
          <option value="General Question">General Question</option>
          <option value="App Issue / Bug Report">App Issue / Bug Report</option>
          <option value="Feedback">Feedback</option>
          <option value="Account or Data">Account or Data</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-caution" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink-soft mb-1.5"
        >
          Message <span className="text-caution" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={onChange}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell us how we can help…"
          className={[
            'w-full bg-field-bg border rounded-[12px] px-3.5 py-2.5 text-sm text-foreground resize-y min-h-[120px]',
            'focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand',
            errors.message ? 'border-caution' : 'border-border',
          ].join(' ')}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-caution" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand text-on-brand font-semibold px-6 py-3 rounded-[12px] hover:bg-brand-deep transition-colors text-sm"
      >
        <Send size={15} />
        Send Message
      </button>

      <p className="mt-4 text-xs text-muted">
        Submitting this form will open your email client with your message
        pre-filled to{' '}
        <span className="text-brand">{SITE.supportEmail}</span>.
      </p>
    </form>
  )
}

function Field({
  label,
  id,
  name,
  type,
  value,
  error,
  onChange,
  autoComplete,
  placeholder,
}: {
  label: string
  id: string
  name: string
  type: string
  value: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-ink-soft mb-1.5"
      >
        {label} <span className="text-caution" aria-hidden="true">*</span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-required="true"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={[
          'w-full bg-field-bg border rounded-[12px] px-3.5 py-2.5 text-sm text-foreground',
          'focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand',
          error ? 'border-caution' : 'border-border',
        ].join(' ')}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-caution" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center text-center py-8">
      <div className="w-12 h-12 rounded-full bg-positive-soft flex items-center justify-center mb-4">
        <CheckCircle size={22} className="text-positive" />
      </div>
      <h2 className="text-lg font-semibold text-foreground mb-2">
        Your email client should open shortly.
      </h2>
      <p className="text-sm text-muted leading-relaxed max-w-sm mb-6">
        If nothing happened, please email us directly at{' '}
        <a
          href={`mailto:${SITE.supportEmail}`}
          className="text-brand hover:underline"
        >
          {SITE.supportEmail}
        </a>
        .
      </p>
      <button
        type="button"
        onClick={onReset}
        className="text-sm font-medium text-brand hover:underline"
      >
        Send another message
      </button>
    </div>
  )
}
