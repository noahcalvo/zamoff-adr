// Navvy (server component)
import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./mobilemenu" // <- new

export default function Navvy() {
  return (
    <nav className="bg-blue-900 text-white py-4 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/#experience" className="hover:text-blue-200 transition-colors flex items-center mr-2">
          <Image
            src="/zamoffADR-white-transparent.png"
            alt="Zamoff ADR"
            width={156} height={60} priority
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-x-8 text-md font-medium items-center">
          <NavLinks />
        </div>

        {/* Mobile menu: client-only, tiny */}
        <MobileMenu />
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
      <Link href="/contact" className={`${linkClass} text-lg font-bold`}>Contact</Link>
    </>
  )
}
