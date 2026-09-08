import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import appIcon from '../../assets/icon.png'
import { NAV_ITEMS } from '../../constants/navigation'
import Container from '../ui/Container'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'text-sm font-medium px-1 py-0.5 rounded transition-colors',
      isActive
        ? 'text-brand'
        : 'text-ink-soft hover:text-brand',
    ].join(' ')

  return (
    <header
      className={[
        'sticky top-0 z-50 bg-surface border-b transition-shadow',
        scrolled ? 'border-border shadow-sm' : 'border-transparent',
      ].join(' ')}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
            aria-label="LifeCalc home"
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
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href} className={navLinkClass} end={item.href === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

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
          'md:hidden overflow-hidden transition-all duration-200 ease-in-out border-t border-border bg-surface',
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <Container>
          <ul className="flex flex-col py-3 gap-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    [
                      'block px-3 py-2.5 rounded-[8px] text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-brand-soft text-brand'
                        : 'text-ink-soft hover:bg-surface-secondary hover:text-brand',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  )
}
