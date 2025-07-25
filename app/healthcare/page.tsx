import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navvy from "@/components/ui/navbar"
import Footy from "@/components/ui/footer"
import { Building2, Users, FileText, Scale, Shield, Pill, DollarSign, Gavel, Network } from "lucide-react"

export default function HealthcarePage() {
  const specificMatters = [
    {
      title: "Payor-Provider Disputes",
      icon: DollarSign,
      description: "Claims sampling",
    },
    { title: "Contract Disputes", icon: FileText, description: "Healthcare entity contract interpretation" },
    { title: "Regulatory Compliance", icon: Shield, description: "State and federal healthcare laws and regulations" },
    { title: "PBM Pricing & Reimbursement", icon: Pill, description: "Pharmacy benefit management disputes" },
    {
      title: "Medicare/Medicaid Bid Protests",
      icon: Gavel,
      description: "State contract bid disputes and related matters",
    },
    {
      title: "Health Plan-TPA Disputes",
      icon: Building2,
      description: "Third-party administrator relationship issues",
    },
    { title: "Coding & Reimbursement", icon: FileText, description: "Medical coding and payment disputes" },
    { title: "Vendor Disputes", icon: Network, description: "Health plan and provider vendor relationships" },
    { title: "Pharmaceutical Pricing", icon: Pill, description: "Drug pricing and reimbursement issues" },
    { title: "Revenue Cycle Management", icon: DollarSign, description: "RCM disputes and optimization" },
    { title: "Healthcare Joint Ventures", icon: Building2, description: "Joint venture partnership disputes" },
    { title: "Brand vs Generic Disputes", icon: Pill, description: "Pharmaceutical company conflicts" },
    { title: "Network Inclusion/Exclusion", icon: Network, description: "Provider and pharmacy network disputes" },
    { title: "Sales & Marketing Practices", icon: Users, description: "Pharmaceutical and medical device marketing" },
    { title: "Unlawful Inducements", icon: Shield, description: "Referral and inducement allegations" },
    { title: "Antitrust/IP Disputes", icon: Scale, description: "Healthcare antitrust and intellectual property" },
    { title: "Privacy Issues", icon: Shield, description: "HIPAA, HITECH and state laws" },
    { title: "340B Program Disputes", icon: Pill, description: "Drug pricing issues" }
  ]

  const disputantTypes = [
    "Health Insurers",
    "Hospitals & Hospital Systems",
    "Physicians & Physician Practices",
    "Revenue Cycle Management Organizations",
    "Medical Groups",
    "Pharmaceutical Companies",
    "Biotech Companies",
    "Medical Device Manufacturers",
    "Third-Party Administrators",
    "Treatment & Testing Facilities",
    "Pharmacy Benefit Managers (PBMs)",
    "Healthcare Service Providers",
  ]

  const keyIssues = [
    "Utilization Management",
    "Medical Necessity",
    "Coordination of Benefits",
    "Fee Schedule Interpretation",
    "Allowed Amounts",
    "Covered Services",
    "Eligible Expenses",
    "Negotiated Rates",
    "Clean Claim Issues",
    "Medical Coding",
    "Prior Authorization",
    "Experimental Treatments",
    "Network Terminations",
    "Usual & Customary Rates",
    "HIPAA Compliance",
    "False Claims Act (FCA)",
    "Affordable Care Act (ACA)",
    "ERISA",
    "Out-of-Network Claims",
    "340B Drug Pricing Program",
    "Non-Compete Agreements",
    "Software Contracts",
    "Outsourcing Agreements",
    "ASO Contracts",
    "Partnership Arrangements",
    "Unfair Competition",
  ]

  const bigPicture = [
    "AAA Healthcare Panel",
    "AAA Healthcare Panel (Featured Panelist)",
    "AHLA Panel (Neutral of the Month)",
    "Former UnitedHealth Group General Counsel",
    "Former Hogan Lovells Healthcare Litigator",
    "Original Member of AAA Healthcare Advisory Council"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navvy />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Healthcare Law Expertise</h1>
              <p className="text-md text-blue-100 mb-8">
                Substantial experience arbitrating, mediating, and litigating disputes involving healthcare entities and
                health law across all sectors of the industry.
              </p>
              <div className="">
                {bigPicture.map((item, index) => (
                  <li className="list-none my-2" key={index}>
                    <Badge className="bg-blue-600 text-white px-4 py-2 text-md">{item}</Badge>
                  </li>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/doctor-signing.jpg"
                alt="Doctor signing a paper"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specific Matters */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Specific Healthcare Matters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specificMatters.map((matter, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow py-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                      <matter.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{matter.title}</h3>
                      <p className="text-sm text-gray-600">{matter.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disputant Types */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>          
              <h2 className="text-3xl font-bold text-center mb-8">Representative Healthcare Clients</h2>
              <div className="flex flex-wrap justify-center">
                {disputantTypes.map((type, index) => (
                  <div key={index} className="w-32 h-24 bg-white p-2 rounded-lg shadow-lg text-center text-md flex justify-center items-center m-2">
                    <p className="font-medium text-gray-800 text-sm">{type}</p>
                  </div>
                ))}
              </div>

            </div>
            <img
              src="/clinic.jpg"
              alt="Physcician working on patient"
              className="rounded-lg shadow-xl md:block hidden"
            />

          </div>
        </div>
      </section>

      {/* Key Issues */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-12">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Law Issues Handled</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 items-center mx-auto">
            {keyIssues.map((issue, index) => (
              <Badge
                key={index}
                variant="outline"
                className="p-3 text-center justify-center border-blue-200 text-blue-800 hover:bg-blue-50 mx-auto"
              >
                {issue}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Healthcare Dispute Resolution Expertise</h2>
          <p className="text-xl text-blue-100 mb-8">
            With decades of experience in healthcare law and deep understanding of industry complexities, Zamoff ADR
            provides specialized expertise for your most challenging healthcare disputes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mitch@zamoffadr.com" target="_blank">
              <button className="bg-white text-blue-900 hover:bg-blue-200 hover:cursor-pointer px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule
              </button>
            </a>
            <a href="resume.pdf" download>
              <button className="border border-white text-white hover:bg-white hover:cursor-pointer hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
      <Footy />
    </div>
  )
}
