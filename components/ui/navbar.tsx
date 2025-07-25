'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navvy() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-900 text-white py-4 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <Link href="/#experience" className="hover:text-blue-200 transition-colors">
        <img src="/zamoffADR-white-transparent.png" alt="Zamoff ADR" className="h-10 object-cover object-center hover:bg-blue-800" />
      </Link>
        {/* Hamburger toggle button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links for medium and up */}
        <div className="hidden md:flex gap-x-8 text-sm font-medium items-center">
          <NavLinks />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 flex flex-col gap-y-4 text-sm font-medium">
          <NavLinks />
        </div>
      )}
    </nav>
  )
}

function NavLinks() {
  return (
    <>
      <Link href="/experience" className="hover:text-blue-200 transition-colors">
        Experience
      </Link>
      <Link href="/expertise" className="hover:text-blue-200 transition-colors">
        Expertise
      </Link>
      <Link href="/healthcare" className="hover:text-blue-200 transition-colors">
        Healthcare
      </Link>
      <Link href="/education" className="hover:text-blue-200 transition-colors">
        Education & Awards
      </Link>
      <Link href="/publications" className="hover:text-blue-200 transition-colors">
        Publications & Speaking
      </Link>
      <Link href="/#contact" className="hover:text-blue-200 transition-colors">
        Contact
      </Link>
    </>
  )
}
