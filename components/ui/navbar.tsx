export default function Navvy() {
  return (
  <nav className="bg-blue-900 text-white py-4 sticky top-0 z-30">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
      <a href="/#experience" className="hover:text-blue-200 transition-colors">
        Experience
      </a>
      <a href="/expertise" className="hover:text-blue-200 transition-colors">
        Expertise
      </a>
      <a href="/healthcare" className="hover:text-blue-200 transition-colors">
        Healthcare
      </a>
      <a href="/#education" className="hover:text-blue-200 transition-colors">
        Education & Publications
      </a>
      <a href="/#contact" className="hover:text-blue-200 transition-colors">
        Contact
      </a>
    </div>
  </div>
</nav>)
}