import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navvy from "@/components/ui/navbar"
import { Building2, Users, FileText, Scale, Shield, Pill, Hospital, DollarSign, Gavel, Network } from "lucide-react"

export default function HealthcarePage() {
  const experienceBreakdown = [
    { category: "Managed Care/Commercial Payors", percentage: 35, color: "bg-blue-600" },
    { category: "Other Healthcare", percentage: 35, color: "bg-blue-500" },
    { category: "Other Non-Healthcare", percentage: 20, color: "bg-blue-400" },
    { category: "Hospitals", percentage: 15, color: "bg-blue-300" },
  ]

  const specificMatters = [
    {
      title: "Payor-Provider Payment Disputes",
      icon: DollarSign,
      description: "Including claims sampling methodologies",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Healthcare Law Expertise</h1>
              <p className="text-xl text-blue-100 mb-8">
                Substantial experience arbitrating, mediating, and litigating disputes involving healthcare entities and
                health law across all sectors of the industry.
              </p>
              <div className="flex gap-4">
                <Badge className="bg-blue-600 text-white px-4 py-2">AAA Healthcare Panel</Badge>
                <Badge className="bg-blue-600 text-white px-4 py-2">Health Law Association</Badge>
              </div>
            </div>
            <div>
              <img
                src="/healthcare-professional.jpg"
                alt="Healthcare professionals in meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Navvy />

      {/* Experience Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Practice Time Allocation</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                {experienceBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{item.category}</span>
                      <span className="font-bold text-blue-600">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`${item.color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Healthcare Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                With <strong>70% of practice time</strong> devoted to healthcare-related matters—including managed care, hospitals, and other healthcare entities—the firm demonstrates deep specialization in this complex regulatory environment.
              </p>
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
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
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
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Entities Represented</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {disputantTypes.map((type, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Hospital className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800 text-sm">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Issues */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Law Issues Handled</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {keyIssues.map((issue, index) => (
              <Badge
                key={index}
                variant="outline"
                className="p-3 text-center justify-center border-blue-200 text-blue-800 hover:bg-blue-50"
              >
                {issue}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Contract Disputes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                  Contract Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Health Plan - PBM Contracts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Health Plan - TPA Contracts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Healthcare Entity Employment Contracts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Healthcare Joint Venture Agreements</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Provider - Vendor Contracts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-blue-600" />
                  Specialized Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Medicare/Medicaid State Contracts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>PBM - Pharmacy Network Agreements</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Healthcare Antitrust Claims</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Competition Law Disputes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Consumer Protection Claims</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Healthcare Dispute Resolution Expertise</h2>
          <p className="text-xl text-blue-100 mb-8">
            With decades of experience in healthcare law and deep understanding of industry complexities, ZamoffADR
            provides specialized expertise for your most challenging healthcare disputes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mitch@zamoffadr.com" target="_blank">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule Healthcare Consultation
              </button>
            </a>
            <a href="resume.pdf" download>
              <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
