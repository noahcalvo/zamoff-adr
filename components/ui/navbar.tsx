'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navvy() {
  const [isOpen, setIsOpen] = useState(false)

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
            height={40}   // equals Tailwind h-10
            priority
            className="object-contain"
          />
        </Link>

        {/* Hamburger toggle button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
        Education & Honors
      </Link>
      <Link href="/publications" className="hover:text-blue-200 transition-colors">
        Publications & Presentations
      </Link>
      <Link href="/contact" className="hover:text-blue-200 transition-colors">
        Contact
      </Link>
    </>
  )
}
