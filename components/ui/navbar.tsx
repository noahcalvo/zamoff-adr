import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navvy() {
  return (
    <nav className="bg-blue-900 text-white py-4 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/#experience"
          className="hover:text-blue-200 transition-colors flex items-center mr-2"
        >
          <Image
            src="/zamoffADR-white-transparent.png"
            alt="Zamoff ADR"
            width={104}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-x-8 text-sm font-medium items-center">
          <NavLinks />
        </div>

        {/* Mobile menu */}
        <details className="md:hidden relative group">
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
              <NavLinks mobile />
            </div>
          </div>
        </details>
      </div>
    </nav>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
    : "hover:text-blue-200 transition-colors"

  return (
    <>
      <Link href="/experience" className={linkClass}>Experience</Link>
      <Link href="/expertise" className={linkClass}>Expertise</Link>
      <Link href="/healthcare" className={linkClass}>Healthcare</Link>
      <Link href="/education" className={linkClass}>Education & Honors</Link>
      <Link href="/publications" className={linkClass}>Publications & Presentations</Link>
      <Link href="/contact" className={linkClass}>Contact</Link>
    </>
  )
}
