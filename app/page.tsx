import { Card, CardContent } from "@/components/ui/card"
import { Contact } from "@/components/ui/contact"
import { Badge } from "@/components/ui/badge"
import { Scale, Globe, Users, BookOpen, Award, FileText, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import handshake from "@/public/handshake.jpeg";
import headshot from "@/public/zamoff-headshot-full.jpeg"
import podium from "@/public/speaking-at-pod.jpeg"
import healthcare from "@/public/healthcare-professional.jpeg"

const experienceCards = [
  { icon: Scale, title: "200+ Cases", description: "Arbitrated and mediated over 200 cases across diverse practice areas and industries" },
  { icon: Award, title: "AAA Panelist", description: "Member of American Arbitration Association national, healthcare (featured panelist) and consumer arbitration panels" },
  { icon: Shield, title: "AHLA Panelist", description: "Member of American Health Law Association arbitration and mediation panels" },
  { icon: Globe, title: "Leadership", description: "Experience on AAA Board of Directors, Advisory Council, Healthcare Advisory Panel and Conflict Resolution Center of Minnesota Board of Directors" },
  { icon: BookOpen, title: "ADR Professor", description: "Chaired ADR professor and assistant dean at top-20 US law school" },
  { icon: FileText, title: "ADR Authority", description: "Frequent presenter and author on issues relating to arbitration law and practice" },
  { icon: Scale, title: "ADR Practitioner", description: "General Counsel of Fortune 10 company and ADR practitioner at major international law firm" },
  { icon: Users, title: "Healthcare Expert", description: "Trainer for former judges joining AAA healthcare panel" },
]

export default function ZamoffADRLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (LCP) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-4 -mt-18">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10" />
        {/* Use next/image as the background with absolute fill */}
        <div className="absolute inset-0">
          <Image
            src={handshake}
            alt="Professional legal setting"
            fill
            priority
            fetchPriority="high"
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
          {/* Intrinsic size to avoid CLS; 1:1 container keeps the circle */}
          <div className="w-80 h-80 overflow-hidden rounded-full mx-auto mb-6 border-4 border-white/20 mt-8">
            <Image
              src={headshot}
              alt="Mitch Zamoff"
              width={640}
              height={640}
              className="object-cover object-top" // moves crop focus up
              sizes="320px"
              placeholder="blur"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Deep ADR Expertise
            <br />
            <span className="text-blue-200">Proven Results</span>
          </h1>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 scroll-m-16 cv-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience That Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive experience as an arbitrator, mediator, leader of ADR organizations, ADR practitioner, corporate leader, and ADR educator
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

            {/* CV Card */}
            <Link href="/resume.pdf" prefetch={false} aria-label="Download CV">
              <Card className="border-0 shadow-lg sm:py-6 hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4">
                    <Image
                      src="/zamoffADR-transparent.png"
                      alt=""
                      width={256}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      sizes="256px"
                      className="mx-auto h-auto w-auto"
                    />
                  </div>
                  <span className="inline-block text-xl font-bold bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700">
                    Download CV
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-10 sm:py-20 overflow-x-hidden cv-auto">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4">
          <div>
            <div className="max-w-60 sm:max-w-full overflow-hidden rounded-lg shadow-lg mx-auto w-full">
              <Image
                src={podium}
                alt="Healthcare professionals in meeting"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                placeholder="blur"
                className="w-full h-auto"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 400px"
              />
            </div>
          </div>

          <div className="lg:col-span-2 px-6 w-full">
            <div className="text-center mb-8">
              <Link href="/expertise">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 underline hover:text-blue-600 hover:cursor-pointer">
                  Areas of Expertise
                </h2>
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
                "Major Tort Claims",
                "Consumer Protection",
              ].map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, "-")
                return (
                  <Link
                    key={index}
                    href={area === "Healthcare" ? "/healthcare" : `/expertise#${slug}`}
                    className="text-center"
                  >
                    <Badge
                      variant="outline"
                      className="p-4 text-center justify-center border-blue-200 text-blue-800 hover:bg-blue-50 md:text-lg"
                    >
                      {area}
                    </Badge>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section id="healthcare" className="py-20 bg-blue-50 cv-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/healthcare">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 underline hover:text-blue-600">
                  Health Law Specialist
                </h2>
              </Link>
              <p className="text-lg text-gray-700 mb-6">
                Deep experience and expertise in the resolution of healthcare disputes. Clients include healthcare entities across all sectors of the healthcare industry.
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
              <Image
                src={healthcare}
                alt="Healthcare professionals in meeting"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                placeholder="blur"
                className="rounded-lg shadow-lg w-full h-auto"
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  )
}
