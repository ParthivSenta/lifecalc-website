import { Link } from 'react-router-dom'
import appIcon from '../../assets/icon.png'
import { FOOTER_LINKS } from '../../constants/navigation'
import { SITE } from '../../constants/site'
import AppStoreButtons from '../ui/AppStoreButtons'
import Container from '../ui/Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <Container>
        {/* Top grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
            >
              <img
                src={appIcon}
                alt=""
                aria-hidden="true"
                className="w-8 h-8 rounded-[8px] object-cover shrink-0"
              />
              <span className="text-base font-bold text-foreground tracking-tight">
                LifeCalc
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs mb-5">
              {SITE.tagline}
            </p>
            <AppStoreButtons stacked />
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold text-ink uppercase tracking-widest mb-4">
              Product
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.product.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-ink uppercase tracking-widest mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold text-ink uppercase tracking-widest mb-4">
              Support
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.support.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-separator py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted text-center sm:text-left">
            © {year} LifeCalc. All rights reserved.
          </p>
          <p className="text-xs text-muted text-center sm:text-right max-w-md leading-relaxed">
            LifeCalc provides financial calculation and educational tools.
            Results are estimates and should not be considered financial advice.
          </p>
        </div>
      </Container>
    </footer>
  )
}
