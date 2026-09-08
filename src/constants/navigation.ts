export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-and-conditions' },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_LINKS = {
  product: [
    { label: 'Home', href: '/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Delete Account', href: '/delete-account' },
  ],
} as const
