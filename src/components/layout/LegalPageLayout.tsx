import { useEffect, useRef, useState } from 'react'
import Container from '../ui/Container'

export interface TocItem {
  id: string
  label: string
}

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  toc: TocItem[]
  children: React.ReactNode
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  toc,
  children,
}: LegalPageLayoutProps) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const headings = toc.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 },
    )

    headings.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [toc])

  const formattedDate = new Date(lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <div className="bg-surface border-b border-border">
        <Container size="narrow">
          <div className="py-10 sm:py-14">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted">
              Last updated: {formattedDate}
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-10 lg:py-14 lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:gap-16">
          {/* Sidebar ToC — desktop only */}
          <aside className="hidden lg:block">
            <nav
              aria-label="Table of contents"
              className="sticky top-24"
            >
              <p className="text-xs font-semibold text-ink uppercase tracking-widest mb-4">
                Contents
              </p>
              <ul className="space-y-1" role="list">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={[
                        'block text-sm py-1 px-2 rounded-[6px] transition-colors leading-snug',
                        activeId === item.id
                          ? 'text-brand bg-brand-soft font-medium'
                          : 'text-muted hover:text-brand hover:bg-surface-secondary',
                      ].join(' ')}
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="legal-content min-w-0 max-w-prose">
            {children}
          </div>
        </div>
      </Container>
    </div>
  )
}
