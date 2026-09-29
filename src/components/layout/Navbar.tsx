import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Smartphone, ArrowRight } from 'lucide-react'
import appIcon from '../../assets/icon.png'
import { NAV_ITEMS } from '../../constants/navigation'
import Container from '../ui/Container'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Close menu on route change during render
  const [prevLocationKey, setPrevLocationKey] = useState(location.key)
  if (prevLocationKey !== location.key) {
    setPrevLocationKey(location.key)
    setMenuOpen(false)
  }

  // Scroll shadow / glassmorphism enhancement
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  // Trap focus / close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Smooth scroll to hash anchor on route changes or hash click
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)
      }
    }
  }, [location.hash, location.pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/#', '')
      if (location.pathname === '/') {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          window.history.pushState(null, '', href)
        }
      } else {
        navigate(href)
      }
      setMenuOpen(false)
    }
  }

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-xs'
          : 'bg-surface/80 backdrop-blur-sm border-b border-border/60',
      ].join(' ')}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg group"
            aria-label="LifeCalc home"
          >
            <img
              src={appIcon}
              alt=""
              aria-hidden="true"
              className="w-8 h-8 rounded-[8px] object-cover shrink-0 shadow-xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold text-foreground tracking-tight leading-none">
                LifeCalc
              </span>
              <span className="text-[10px] text-muted font-medium tracking-wide">
                Financial Planning
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            <ul className="flex items-center gap-6" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm font-medium text-ink-soft hover:text-brand transition-colors py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Header CTA */}
            <a
              href="#download"
              onClick={(e) => handleNavClick(e, '/#download')}
              className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-deep text-on-brand text-xs font-semibold px-4 py-2 rounded-full shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Smartphone size={13} />
              <span>Get App</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-[8px] text-ink-soft hover:text-brand hover:bg-brand-soft transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={[
          'md:hidden overflow-hidden transition-all duration-200 ease-in-out border-t border-border bg-surface/95 backdrop-blur-md',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <Container>
          <ul className="flex flex-col py-3 gap-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2.5 rounded-[8px] text-sm font-medium text-ink-soft hover:bg-surface-secondary hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#download"
                onClick={(e) => handleNavClick(e, '/#download')}
                className="flex items-center justify-center gap-2 bg-brand text-on-brand text-sm font-semibold px-4 py-2.5 rounded-[10px] w-full shadow-xs"
              >
                <span>Download LifeCalc App</span>
                <ArrowRight size={14} />
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  )
}
