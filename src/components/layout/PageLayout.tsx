import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

interface PageLayoutProps {
  children: ReactNode
  /** Update document title per page */
  title?: string
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  // Update title
  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
