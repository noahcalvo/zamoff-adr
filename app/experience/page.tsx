import { Card, CardContent } from "@/components/ui/card"
import { Contact } from "@/components/ui/contact"
import { Building2, Briefcase, Scale, Users, Gavel, GraduationCap } from "lucide-react"
import Link from "next/link"


export default function Expertise() {
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


  return (
    <div className="min-h-screen bg-white">
      {/* Professional Roles */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Extensive Experience as a Neutral in High-Stakes Disputes
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalRoles.slice(0, 2).map((role, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow sm:py-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                      <role.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{role.title}</h3>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <img className="flex-1 rounded-lg shadow-lg row-span-2 self-center mx-auto" src="/speaking-at-mic-tall.jpeg" />
            {professionalRoles.slice(2).map((role, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow sm:py-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                      <role.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
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

      <section className="mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center justify-items-center mb-12">
            <img className="rounded-md shadow-lg self-center sm:max-h-64 w-full mb-4 sm:mb-0 h-auto sm:w-auto" src="/speaking-in-class-crop.png" alt="Mitch speaking in class at the University of Minnesota" />
            <div className="flex flex-wrap gap-4 col-span-2">
              {[
                ['Contract Disputes', 'contract-disputes'],
                ['Healthcare', 'healthcare'],
                ['Insurance Law', 'insurance-law'],
                ['Antitrust & Competition', 'antitrust'],
                ['Employment Law & Whistleblower Actions', 'employment'],
                ['Complex Business Disputes', 'complex-business'],
                ['Major Tort Claims', 'tort'],
                ['Consumer Protection', 'consumer-protection']
              ].map(([name, id]) => {
                const slug = name.toLowerCase().replace(/\s+/g, '-'); // e.g. "Contract Disputes" → "contract-disputes"
                return (
                  <Link href={id == 'healthcare' ? '/healthcare' : `/expertise#${slug}`} className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full hover:bg-blue-200 transition"
                    key={id}>
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
