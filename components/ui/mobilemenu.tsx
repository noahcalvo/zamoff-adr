'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileMenu() {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const pathname = usePathname()

  // Close whenever the route changes (back/forward, programmatic nav, etc.)
  useEffect(() => {
    if (detailsRef.current?.open) detailsRef.current.open = false
  }, [pathname])

  // Helper to close after user clicks a link
  const close = () => {
    if (detailsRef.current?.open) detailsRef.current.open = false
  }

  const linkClass =
    "block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"

  return (
    <details ref={detailsRef} className="md:hidden relative group">
      <summary
        className="list-none cursor-pointer select-none p-2 -m-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 flex items-center"
        aria-label="Toggle menu"
      >
        <span className="sr-only">Toggle menu</span>
        <Menu className="h-6 w-6 group-open:hidden" aria-hidden />
        <X className="h-6 w-6 hidden group-open:block" aria-hidden />
      </summary>

      <div className="absolute right-0 mt-2 w-[calc(100vw-3rem)] max-w-xs rounded-lg bg-white text-gray-900 shadow-lg border p-4">
        <div className="flex flex-col gap-y-4 text-sm font-medium">
          {/* close() runs before navigation */}
          <Link href="/experience" className={linkClass} onClick={close}>Experience</Link>
          <Link href="/expertise" className={linkClass} onClick={close}>Expertise</Link>
          <Link href="/healthcare" className={linkClass} onClick={close}>Healthcare</Link>
          <Link href="/education" className={linkClass} onClick={close}>Education & Honors</Link>
          <Link href="/publications" className={linkClass} onClick={close}>Publications & Presentations</Link>
          <Link href="/contact" className={linkClass} onClick={close}>Contact</Link>
        </div>
      </div>
    </details>
  )
}
