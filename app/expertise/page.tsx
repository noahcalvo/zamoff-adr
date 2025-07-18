import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navvy from "@/components/ui/navbar"
import { Badge } from "@/components/ui/badge"
import { Scale, Shield, Heart, Building, FileText, Users } from "lucide-react"
import type { ElementType } from "react";

export default function Expertise() {
  const expertiseContent: [string, string, ElementType, string[]][] = [
    [
      "Consumer Protection",
      "CONSUMER LAW",
      Shield,
      [
        "Breach of contract disputes",
        "False advertising claims",
        "Unfair pricing practices",
        "Antitrust violations",
        "Privacy law violations",
        "Fraud and misleading conduct",
        "Lending and debt collection claims",
        "Statutory and common law unfair competition claims",
      ],
    ],
    [
      "Contract Disputes",
      "CONTRACT LAW",
      FileText,
      [
        "Payment disputes",
        "Service agreements",
        "Exclusivity deals",
        "Employment and non-compete agreements",
        "Shareholder agreements",
        "Vendor and supplier contracts",
        "Insurance contracts",
      ],
    ],
    [
      "Healthcare Disputes",
      "HEALTHCARE",
      Heart,
      [
        "Contract interpretation and federal/state health laws",
        "Disputes between health insurers, hospitals, physicians, and medical groups",
        "Third-party administrators and treatment facilities",
        "PBMs and healthcare service providers",
        "Utilization management and medical necessity",
        "Coordination of benefits and fee schedule interpretation",
        "Allowed amounts, covered services, and eligible expenses",
        "Negotiated rates and clean claim issues",
        "Coding, prior authorization, and experimental treatments",
        "Network terminations and 'usual and customary' rates",
        "HIPAA, FCA, ACA, and ERISA compliance",
        "Out-of-network claims and 340B drug pricing program",
        "Software contracts and outsourcing agreements",
        "ASO contracts and partnership arrangements",
        "Claims sampling in payor-provider disputes",
      ],
    ],
    [
      "Employment Law",
      "EMPLOYMENT LAW",
      Users,
      [
        "Alleged employment discrimination cases",
        "Alleged sexual harassment disputes",
        "Alleged violations of employment agreements",
        "Enforcement of non-competition provisions",
        "Enforcement of non-solicitation provisions",
        "Alleged violations of employment law statutes",
        "Employment law regulatory compliance",
      ],
    ],
    [
      "Pharmaceutical Law",
      "PHARMACEUTICAL/BIOTECHNOLOGY",
      Building,
      [
        "Antitrust and intellectual property disputes",
        "Contract disputes in pharma/biotech sector",
        "Federal and state law compliance issues",
        "False Claims Act violations",
        "Anti-Kickback Act violations",
        "Coding and reimbursement issues",
        "Healthcare provider-pharmaceutical company relationships",
        "Medical device company disputes",
      ],
    ],
    [
      "Insurance Disputes",
      "INSURANCE",
      Shield,
      [
        "Health insurance policy disputes",
        "General Commercial Liability (GCL) claims",
        "Directors & Officers (D&O) insurance",
        "Employment Practices Liability Insurance",
        "Errors & Omissions (E&O) insurance",
        "Other commercial insurance policies",
        "Insurer-insured relationship disputes",
        "Health insurance law specialization",
      ],
    ],
    [
      "Antitrust & Competition",
      "ANTITRUST AND COMPETITION",
      Scale,
      [
        "Alleged price fixing violations",
        "Sherman Act violation claims",
        "Pharmaceutical pricing disputes",
        "False advertising claims",
        "Competition law violations",
        "Market manipulation allegations",
      ],
    ],
    [
      "Complex Disputes",
      "COMPLEX DISPUTES",
      Building,
      [
        "Multi-jurisdictional healthcare law matters",
        "Complex contract law disputes",
        "Antitrust and competition law violations",
        "Insurance law complications",
        "Employment law disputes",
        "Alleged fraud and deceptive practices",
        "Statutory and regulatory violations",
        "Compliance issues and government investigations",
      ],
    ],
  ]

  // Slugify function to match the anchor links
  const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Areas of Expertise</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive ADR services across diverse practice areas, backed by decades of experience in complex
            commercial disputes and specialized industry knowledge.
          </p>
        </div>
      </section>

      <Navvy />
      {/* Expertise Content */}
      <section className="mt-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12">
            {expertiseContent.map(([title, subtitle, IconComponent, points], index) => {
              const id = slugify(title)
              return (
                <Card key={index} id={id} className="border-0 shadow-xl overflow-hidden">
                  <CardHeader className="bg-gray-100 border-b pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{title}</CardTitle>
                        <Badge variant="outline" className="mt-2 border-blue-200 text-blue-800">
                          {subtitle}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Expert ADR Services?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              With extensive experience across these practice areas, ZamoffADR provides the specialized expertise needed
              to resolve your most complex disputes efficiently and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:mitch@zamoffadr.com" target="_blank">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Schedule Consultation
                </button>
              </a>
              <a href="resume.pdf" download>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
