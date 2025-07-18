import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Globe, Users, BookOpen, Award, Phone, Mail, FileText, AlignJustify } from "lucide-react"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Navvy from "@/components/ui/navbar";

export default function ZamoffADRLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
        <img
          src="/signing.jpg?height=1080&width=1920"
          alt="Professional legal setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-8">
            <img
              src="/zamoff-headshot.png"
              alt="Mitch Zamoff"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white/20 object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Deep ADR Expertise.
            <br />
            <span className="text-blue-200">Proven Results.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Respected ADR Authority • Law Professor • Former Fortune 10 GC • Big Law Partner
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-200">200+</div>
              <div className="text-sm">Cases Resolved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-200">AAA</div>
              <div className="text-sm">Panel Member</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-200">Trainer</div>
              <div className="text-sm">ADR Education</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-200">Author</div>
              <div className="text-sm">Published Expert</div>
            </div>
          </div>
          <a href="mailto:mitch@zamoffadr.com" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
            Schedule Consultation
          </a>
        </div>
      </section>

      {/* Navigation Strip */}
      <Navvy />

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unparalleled Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of legal excellence across academia, corporate leadership, and private practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Scale className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">200+ Cases</h3>
                <p className="text-gray-600">
                  Arbitrated and mediated over 200 cases across diverse practice areas and industries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">AAA Panel Member</h3>
                <p className="text-gray-600">
                  Member of American Arbitration Association national, healthcare and consumer arbitration panels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Health Law Panel</h3>
                <p className="text-gray-600">
                  Member of American Health Law Association arbitration and mediation panel.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">AAA Leadership</h3>
                <p className="text-gray-600">
                  Former member of AAA Board of Directors, Advisory Council and Healthcare Advisory Panel.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">ADR Professor</h3>
                <p className="text-gray-600">Chaired ADR professor and assistant dean at top-20 US law school.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Author & Speaker</h3>
                <p className="text-gray-600">
                  Frequent presenter and author on issues relating to arbitration law and practice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Healthcare Trainer</h3>
                <p className="text-gray-600">
                  AAA healthcare trainer for former judges, sharing expertise in specialized dispute resolution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Scale className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fortune 10 Experience</h3>
                <p className="text-gray-600">
                  Prior experience as General Counsel of Fortune 10 company and ADR practitioner at major law firm.
                </p>
              </CardContent>
            </Card>
            <a href="resume.pdf" download>
              <Card className="border-0 shadow-lg hover:scale-110 transition">
                <CardContent className="p-8 text-center">
                  <AlignJustify className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">See full experience</h3>
                  <p className="text-gray-600">
                    Download CV to view more of Mitch Zamoff&apos;s experience
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-10  sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Link href="/expertise">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 underline hover:text-blue-600">Areas of Expertise</h2>
            </Link>
            <p className="text-xl text-gray-600">Comprehensive ADR services across diverse practice areas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Consumer Protection",
              "Contract Disputes",
              "Healthcare Disputes",
              "Employment Issues",
              "Pharmaceutical Law",
              "Insurance Disputes",
              "Antitrust & Competition",
              "Complex Disputes"
            ].map((area, index) => {
              const slug = area.toLowerCase().replace(/\s+/g, '-'); // e.g. "Contract Disputes" → "contract-disputes"
              return (
                <Link key={index} href={`/expertise#${slug}`} className="text-center">
                  <Badge
                    key={index}
                    variant="outline"
                    className="p-4 text-center justify-center border-blue-200 text-blue-800 hover:bg-blue-50"
                  >
                    {area}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section id="healthcare" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/healthcare" >
                <h2 className="text-4xl font-bold text-gray-900 mb-6 underline hover:text-blue-600">Healthcare Law Specialist</h2>
              </Link>
              <p className="text-lg text-gray-700 mb-6">
                Deep expertise in healthcare disputes, regulatory compliance, and medical malpractice arbitration.
                Trusted by hospitals, physicians, and healthcare organizations nationwide.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-3" />
                  Health Law Panel Member
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-3" />
                  Medical Malpractice Arbitrator
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-3" />
                  Healthcare Compliance Expert
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/healthcare-professional.jpg"
                alt="Healthcare professionals in meeting"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Publications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Education */}
            <div id="education">
              <a href="/education">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Education & Training</h2>
              </a>
              <div className="space-y-4">
                <div className="py-3">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold">J.D., Harvard Law School</h3>
                    <p className="text-gray-600">Magna Cum Laude, Law Review</p>
                  </div>
                </div>
                <div className="py-3">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold">ADR Certification</h3>
                    <p className="text-gray-600">American Arbitration Association</p>
                  </div>
                </div>
                <div className="py-3">

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold">Mediation Training</h3>
                    <p className="text-gray-600">Harvard Negotiation Project</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div id="publications">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications & Speaking</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">&quot;Modern Arbitration Practice&quot;</h4>
                  <p className="text-sm text-gray-600">American Bar Journal, 2024</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">&quot;Healthcare Dispute Resolution&quot;</h4>
                  <p className="text-sm text-gray-600">Health Law Review, 2023</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">&quot;Consumer Protection in ADR&quot;</h4>
                  <p className="text-sm text-gray-600">Consumer Law Quarterly, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Resolve Your Dispute?</h2>
            <p className="text-xl text-gray-300">Contact Mitch Zamoff for expert arbitration and mediation services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">(202) 641-2437</p>
            </div>
            <div>
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">mitch@zamoffadr.com</p>
            </div>
            <div>
              <Globe className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Minneapolis, MN</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="mailto:mitch@zamoffadr.com" target="_blank">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
                Schedule Consultation
              </Button>
            </a>
            <a href="resume.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-center space-x-3 items-center">
          <p>&copy; 2025 Mitch Zamoff ADR</p>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </div>
  )
}
