import Link from "next/link";

export default function Navvy() {
  return (
  <nav className="bg-blue-900 text-white py-4 sticky top-0 z-30">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
      <Link href="/#experience" className="hover:text-blue-200 transition-colors">
        Experience
      </Link>
      <Link href="/expertise" className="hover:text-blue-200 transition-colors">
        Expertise
      </Link>
      <Link href="/healthcare" className="hover:text-blue-200 transition-colors">
        Healthcare
      </Link>
      <Link href="/#education" className="hover:text-blue-200 transition-colors">
        Education & Publications
      </Link>
      <Link href="/#contact" className="hover:text-blue-200 transition-colors">
        Contact
      </Link>
    </div>
  </div>
</nav>)
}