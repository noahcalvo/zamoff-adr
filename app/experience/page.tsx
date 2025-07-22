import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footy from "@/components/ui/footer"
import Navvy from "@/components/ui/navbar"
import { Building2, Briefcase, Scale, FileText, Shield, DollarSign, Users, Award, Building, Gavel, GraduationCap, Globe } from "lucide-react"
import Link from "next/link"


export default function Expertise() {
  const professionalRoles = [
    {
      title: "Professor of Law & Assistant Dean",
      icon: Users,
      description: "McClendon Professor in Law & ADR, Assistant Dean of Experiential Education, University of Minnesota Law School (2022–Present)",
    },
    {
      title: "Arbitrator & Mediator",
      icon: Scale,
      description: "Zamoff ADR (2020–Present), resolved over 200 cases as neutral",
    },
    {
      title: "Professor & Program Director",
      icon: Users,
      description: "ADR Professor, Litigation Program Director, Law in Practice Director, UMN Law School (2017–2022)",
    },
    {
      title: "Law Firm Partner",
      icon: Briefcase,
      description: "Partner at Hogan Lovells US LLP (2013–2017) and Hogan & Hartson LLP (2001–2008)",
    },
    {
      title: "Co-Director, Mediation Clinic",
      icon: FileText,
      description: "University of Minnesota Law School (2012–2013)",
    },
    {
      title: "General Counsel, UnitedHealth Group",
      icon: Building2,
      description: "EVP & General Counsel (2009–2012); GC of UnitedHealthcare (2008–2009)",
    },
    {
      title: "Federal Prosecutor",
      icon: Gavel,
      description: "Assistant U.S. Attorney, DOJ (Philadelphia, PA), 1996–2000",
    },
    {
      title: "Early Legal Career",
      icon: FileText,
      description: "Associate at Hogan & Hartson LLP (1993–1996); Clerk to Hon. Richard L. Williams (1992–1993)",
    },
  ]

  const healthcareDisputes = [
    {
      icon: DollarSign,
      title: "Payor-Provider Disputes",
      description: "Claims from $500,000 to $14.4M",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: FileText,
      title: "Healthcare Contract Disputes",
      description: "Claims from $2.2M to $215M",
      color: "bg-blue-50 text-blue-600",
      hasLink: true,
    },
    {
      icon: Shield,
      title: "Antitrust & Competition Claims",
      description: "Disputes involving $10M to $200M+",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Scale,
      title: "Contract Interpretation",
      description: "Federal/state health law disputes among diverse healthcare entities",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Users,
      title: "Claims Sampling & Analysis",
      description: "Extensive experience in complex healthcare contractual interpretation",
      color: "bg-teal-50 text-teal-600",
    },
  ]

  const adrExperience = [
    {
      icon: Gavel,
      title: "200+ Cases",
      description: "Seasoned neutral with experience as arbitrator and mediator",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: GraduationCap,
      title: "ADR Professor",
      description: "University of Minnesota Law School & Mediation Clinic co-founder",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Users,
      title: "ADR Leadership",
      description: "Leader of ADR organizations, frequent speaker, author, and panelist",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Building,
      title: "Corporate Experience",
      description: "ADR practitioner at Hogan Lovells and General Counsel at UnitedHealth Group",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Globe,
      title: "Fortune 10 Leadership",
      description: "Oversaw all ADR proceedings for Fortune 10 corporation",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Award,
      title: "AAA Leadership",
      description: "Former AAA Board Member, Council Member, and Healthcare Advisory Committee member",
      color: "bg-teal-50 text-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navvy />
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Extensive ADR Leadership & Practice</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Substantial experience arbitrating, mediating, and litigating disputes involving
            <a href="/healthcare" className="hover:text-blue-300 underline"> healthcare entities and health law</a>. Extensive experience in
            arbitration and mediation of commercial disputes as a neutral, advocate, and general counsel.
          </p>
        </div>
      </section>
      {/* Professional Roles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalRoles.map((role, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
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

      <section>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-4 mb-12">
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
                <Link href={`/expertise#${slug}`} className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full hover:bg-blue-200 transition">
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Healthcare Dispute Resolution Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Healthcare Dispute Resolution</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Extensive experience in complex healthcare disputes across diverse practice areas and claim values
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {healthcareDisputes.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-3`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                  {item.hasLink && (
                    <>
                      {" – see "}
                      <Link href="/healthcare#specific-healthcare-matters" className="text-blue-600 hover:underline">
                        specific matters
                      </Link>
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Alternative Dispute Resolution Section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Alternative Dispute Resolution Experience</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive ADR background spanning academia, corporate leadership, and neutral services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {adrExperience.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-3`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recognition Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Professional Recognition</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Recognized by Lawyers for Public Justice and Guide to the Leading U.S. Litigation Lawyers. Former nominee
              for Trial Lawyer of the Year.
            </p>
          </CardContent>
        </Card>
        </div>
      </section>
      <Footy />
    </div>
  )
}
