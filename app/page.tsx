import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Globe, Users, BookOpen, Award, Mail, FileText } from "lucide-react"
import Link from 'next/link';
import Navvy from "@/components/ui/navbar";
import Footy from "@/components/ui/footer";

const experienceCards = [
  {
    icon: Scale,
    title: "200+ Cases",
    description:
      "Arbitrated and mediated over 200 cases across diverse practice areas and industries.",
  },
  {
    icon: Globe,
    title: "AAA Leadership",
    description:
      "Former member of AAA Board of Directors, Advisory Council and Healthcare Advisory Panel.",
  },
  {
    icon: Award,
    title: "AAA Panel Member",
    description:
      "Member of American Arbitration Association national, healthcare (featured panelist) and consumer arbitration panels.",
  },
  {
    icon: Users,
    title: "Health Law Panel",
    description:
      "Member of American Health Law Association arbitration and mediation panel.",
  },
  {
    icon: BookOpen,
    title: "ADR Professor",
    description:
      "Chaired ADR professor and assistant dean at top-20 US law school.",
  },
  {
    icon: FileText,
    title: "Author & Speaker",
    description:
      "Frequent presenter and author on issues relating to arbitration law and practice.",
  },
  {
    icon: Users,
    title: "Healthcare Trainer",
    description:
      "AAA healthcare trainer for former judges, sharing expertise in specialized dispute resolution.",
  },
  {
    icon: Scale,
    title: "Fortune 10 Experience",
    description:
      "Prior experience as General Counsel of Fortune 10 company and ADR practitioner at major law firm.",
  },
  {
    icon: Users,
    title: "Law Firm Partner",
    description:
      "Former dispute resolution partner at leading international law firm.",
  },
]

export default function ZamoffADRLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
        <img
          src="/signing.jpg?height=1080&width=1920"
          alt="Professional legal setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="w-48 h-48 overflow-hidden rounded-full mx-auto mb-6 border-4 border-white/20 mt-8">
            <img
              src="/zamoff-headshot-full.jpeg"
              alt="Mitch Zamoff"
              className="w-full -mt-4 object-cover"
            />
          </div>          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Deep ADR Expertise.
            <br />
            <span className="text-blue-200">Proven Results.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Respected ADR Authority • Leader of ADR Organizations • General Counsel • Law Firm Dispute Resolution Partner • Assistant Dean &amp; Distinguished ADR Professor
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-200">200+</div>
              <div className="text-sm">Arbitrations and Mediations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-200">Trainer</div>
              <div className="text-sm">ADR Education</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-200">Panelist</div>
              <div className="text-sm">AAA</div>
              <div className="text-sm">AHLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-200">Leader</div>
              <div className="text-sm">Board Member</div>
              <div className="text-sm">Advisory Councilmember</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 col-span-full justify-self-center w-full max-w-[calc(100%/2-1rem)] lg:max-w-[calc(100%/4-1rem)]">
              <div className="text-3xl font-bold text-blue-200">Author</div>
              <div className="text-sm">Published Expert</div>
            </div>
          </div>
          <a href="mailto:mitch@zamoffadr.com" target="_blank" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg rounded-md mb-4">
            Schedule
          </a>
        </div>
      </section>

      {/* Navigation Strip */}
      <Navvy />

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 scroll-m-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience That Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Robust experience as an arbitrator, mediator, leader of ADR organizations, ADR practitioner, corporate leader, and ADR educator
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experienceCards.map(({ icon: Icon, title, description }, i) => (
              <Card key={i} className="border-0 shadow-lg sm:py-6">
                <CardContent className="p-8 text-center">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </CardContent>
              </Card>
            ))}
            <a href="resume.pdf" download>
              <Card className="border-0 shadow-lg sm:py-6">
                <CardContent className="p-8 text-center">
                  <img src="/zamoffADR-transparent.png" className="w-full h-full text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700">Download CV</h3>
                  <p className="text-gray-600">
                    to view more of Mitch Zamoff&apos;s experience
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-10 sm:py-20 overflow-x-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 px-6 w-full">
            <div className="text-center mb-8">
              <Link href="/expertise">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 underline hover:text-blue-600 hover:cursor-pointer">Areas of Expertise</h2>
              </Link>
              <p className="text-xl text-gray-600">Substantial ADR Experience Across Diverse Practice Areas</p>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              {[
                "Contract Disputes",
                "Healthcare",
                "Insurance Law",
                "Antitrust & Competition",
                "Employment Law and Whistleblower Actions",
                "Complex Business Disputes",
                "Major Tort Actions",
                "Consumer Protection",
              ].map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-'); // e.g. "Contract Disputes" → "contract-disputes"
                return (
                  <Link key={index} href={`/expertise#${slug}`} className="text-center">
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-4 text-center justify-center border-blue-200 text-blue-800 hover:bg-blue-50 md:text-lg"
                    >
                      {area}
                    </Badge>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <div className="max-w-60 sm:max-w-full overflow-hidden rounded-lg shadow-lg mx-auto w-full">
              <img
                src="/speaking-at-pod.jpeg"
                alt="Healthcare professionals in meeting"
                className="w-full max-w-full h-auto"
              /></div>
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
                Deep experience and expertise in the resolution of healthcare disputes. Clients include
                healthcare entities across all sectors of the healthcare industry.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-amber-500 mr-3" />
                  Member of AAA Healthcare and AHLA Panels
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-amber-500 mr-3" />
                  Former GC of Leading Health Benefits and Services Company
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-amber-500 mr-3" />
                  Original Member of AAA Healthcare Advisory Council
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
              <Link href="/education" >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 underline hover:text-blue-600">Education & Training</h2>
              </Link>
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
              <Link href="/publications" >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 underline hover:text-blue-600">Publications & Speaking</h2>
              </Link>
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

          <div className="flex text-center justify-center gap-x-8">
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
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 mr-4 mb-4">
                Schedule
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
      <Footy />
    </div>
  )
}
