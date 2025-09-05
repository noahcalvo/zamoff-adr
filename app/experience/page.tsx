import { Card, CardContent } from "@/components/ui/card"
import { Contact } from "@/components/ui/contact"
import { Building2, Briefcase, Scale, Users, Gavel, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const professionalRoles = [
  {
    title: "Neutral",
    icon: Scale,
    description: "Arbitrated and mediated over 200 disputes. Member of AAA and AHLA panels."
  },
  {
    title: "ADR Expert",
    icon: GraduationCap,
    description: "Chaired ADR professor at University of Minnesota Law School. Former co-director of UM Community Mediation Clinic."
  },
  {
    title: "ADR Leader",
    icon: Users,
    description: "Served on AAA Board of Directors, Advisory Council and Healthcare Advisory Panel. Served as Co-Chair of Board of Directors of Conflict Resolution Center of Minnesota.",
  },
  {
    title: "Law Firm Partner",
    icon: Briefcase,
    description: "Litigation and dispute resolution partner at Hogan Lovells US LLP."
  },
  {
    title: "General Counsel",
    icon: Building2,
    description: "General counsel of UnitedHealth Group – a Fortune 10 health services and benefits company"
  },
  {
    title: "Federal Prosecutor",
    icon: Gavel,
    description: "Assistant United States Attorney (DOJ) for the Eastern District of Pennsylvania"
  }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Professional Roles */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Extensive Experience as a Neutral in{" "}
            <span className="whitespace-nowrap">High-Stakes</span> Disputes
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalRoles.slice(0, 2).map((role, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow sm:py-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 h-full">
                    <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                      <role.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-semibold text-gray-900 mb-2">{role.title}</h2>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Tall photo in the grid, spans two rows on md+ */}
            <div className="row-span-2 self-center mx-auto w-full max-w-md p-8">
              <Image
                src="/speaking-at-mic-tall.jpeg"
                alt="Mitch Zamoff speaking at a microphone"
                width={357}     // portrait-ish source; adjust if you know exact dims
                height={426}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-lg w-full h-auto md:[transform:rotateY(180deg)] lg:[transform:rotateY(0deg)]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {professionalRoles.slice(2).map((role, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow sm:py-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 h-full">
                    <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                      <role.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{role.title}</h3>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise (off-screen on first paint → defer work) */}
      <section className="mb-12 cv-auto">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Areas of Expertise</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center justify-items-center mb-12">
            {/* Class photo */}
            <div className="w-full sm:w-auto">
              <Image
                src="/speaking-in-class-crop.png"
                alt="Mitch speaking in a classroom at the University of Minnesota"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="rounded-md shadow-lg self-center w-full h-auto sm:max-h-64"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 col-span-2 justify-center sm:justify-start">
              {[
                ['Contract Disputes', 'contract-disputes'],
                ['Healthcare', 'healthcare'],
                ['Insurance Law', 'insurance-law'],
                ['Antitrust & Competition', 'antitrust'],
                ['Employment Law & Whistleblower Actions', 'employment'],
                ['Complex Business Disputes', 'complex-business'],
                ['Major Tort Claims', 'tort'],
                ['Consumer Protection', 'consumer-protection'],
              ].map(([name, id]) => {
                const slug = (name as string).toLowerCase().replace(/\s+/g, '-')
                return (
                  <Link
                    key={id}
                    href={id === 'healthcare' ? '/healthcare' : `/expertise#${slug}`}
                    prefetch={false}
                    className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full hover:bg-blue-200 transition"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}



