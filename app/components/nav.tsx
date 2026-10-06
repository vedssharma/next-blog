'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'home',
  },
  '/resume': {
    name: 'resume',
  },
  '/blog': {
    name: 'blog',
  },
  'https://github.com/vedssharma': {
    name: 'my github',
  },
  '/contact': {
    name: 'contact me',
  },
}

function isActive(path: string, pathname: string) {
  if (!path.startsWith('/')) return false
  if (path === '/') return pathname === '/'
  return pathname === path || pathname.startsWith(`${path}/`)
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="mb-12 md:mb-16">
      <nav
        className="rule-bottom flex flex-row flex-wrap justify-between gap-x-4 gap-y-1 pb-3 text-[0.82rem] font-medium uppercase tracking-[0.07em]"
        id="nav"
      >
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            aria-current={isActive(path, pathname) ? 'page' : undefined}
            className="py-1 text-[var(--fg)] transition-colors hover:text-[var(--accent)] aria-[current=page]:text-[var(--accent)]"
          >
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
