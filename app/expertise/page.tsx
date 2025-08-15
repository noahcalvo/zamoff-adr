import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Shield, Building, FileText, Users, Heart } from "lucide-react"
import type { ElementType } from "react";
import Link from "next/link"

export default function Expertise() {
  const expertiseContent: [string, ElementType, string[]][] = [
    [
      "Contract Disputes",
      FileText,
      [
        "Payment disputes",
        "Sales and service agreements",
        "Exclusivity deals",
        "Employment and non-compete agreements",
        "Shareholder agreements",
        "Vendor and supplier contracts",
        "Insurance contracts",
        "Healthcare agreements",
        "Non-disclosure agreements", "Partnership and joint venture agreements", "Franchise contracts",
        "Loan agreements"
      ],
    ],
    [
      "Healthcare",
      Heart,
      [
        "Payor-provider disputes",
        "Healthcare contracts",
        "Health regulatory issues",
        "PBM pricing and reimbursement",
        "Medicare/Medicaid bid protests",
        "Health plan-TPA disputes",
        "Coding and reimbursement",
        "Health plan and provider vendor agreements",
        "Revenue cycle management",
        "Pharmaceutical pricing",
        "Brand/generic competition issues",
        "Disputes about healthcare transactions",
        "Health plan and PBM networks",
        "Healthcare antitrust and competition",
        "Health law privacy and data breaches",
        "340B program"
      ],
    ],
    [
      "Insurance Law",
      Shield,
      [
        "Health insurance policy disputes",
        "General Commercial Liability claims",
        "Directors & Officers insurance",
        "Employment Practices Liability insurance",
        "Errors & Omissions insurance",
        "Other commercial insurance policies",
        "Insurer-insured relationship disputes",
        "Claims handling practices",
      ],
    ],
    [
      "Antitrust & Competition",
      Scale,
      [
        "Alleged price fixing violations",
        "Sherman Act",
        "Pharmaceutical pricing disputes",
        "False advertising claims",
        "Competition law violations",
        "Market manipulation allegations",
        "Brand-generic competition",
        "FIFRA pesticide compensation disputes"
      ],
    ],
    [
      "Employment Law and Whistleblower Actions",
      Users,
      [
        "Employment discrimination",
        "Sexual harassment",
        "Alleged violations of employment agreements",
        "Enforcement of non-competition provisions",
        "Enforcement of non-solicitation provisions",
        "Alleged violations of employment law statutes",
        "Retaliation claims",
        "False Claims Act and other whistleblower actions"
      ],
    ],
    [
      "Complex Business Disputes",
      Building,
      [
        "Breach of contract",
        "Fraud and misrepresentation",
        "Business torts",
        "Fiduciary duty claims",
        "Shareholder and partnership disputes",
        "Unfair competition",
        "Tortious interference actions",
        "Employment law and non-compete claims",
        "Insurance coverage",
        "Real estate disputes"
      ],
    ],
    [
      "Major Tort Claims",
      Scale,
      [
        "Products liability",
        "Pharmaceuticals", 
        "Medical devices", 
        "Environmental", 
        "Toxic torts",
        "Serious personal injury claims"
      ]
    ],
    [
      "Consumer Protection",
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
  ]

  // Slugify function to match the anchor links
  const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 flex px-8 items-center">
        <div className="max-w-6xl mx-auto px-6 ">
          <h1 className="text-5xl font-bold mb-6">Areas of Expertise</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive ADR services across diverse practice areas, backed by decades of experience in complex
            commercial disputes and specialized industry knowledge.
          </p>
        </div>
        <img src="podium-cropped.jpeg" className="max-h-72 rounded-lg shadow-xl"/>
      </section>
      {/* Expertise Content */}
      <section className="mt-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12">
            {expertiseContent.map(([title, IconComponent, points], index) => {
              const id = slugify(title)
              return (
                <section id={id} key={index} className="scroll-m-24 shadow-xl rounded-lg">
                <Card key={index} id={id} className="border-0 overflow-hidden -border-8 rounded-lg">
                  <CardHeader className="bg-gray-100 border-b pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{title}
                        </CardTitle>
                        {title == "Healthcare" && 
                          <Link href="/healthcare" className="text-blue-600 transition-colors hover:text-blue-200">
                            Learn more about Mitch Zamoff&apos;s healthcare expertise →
                          </Link>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-600">
                      <ul className="list-none space-y-3">
                        {points.slice(0, Math.ceil(points.length / 2)).map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="list-none space-y-3">
                        {points.slice(Math.ceil(points.length / 2)).map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                </section>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Expert ADR Services?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              With extensive experience across these practice areas, Zamoff ADR provides the specialized expertise needed
              to resolve your most complex disputes efficiently and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:mitch@zamoffadr.com" target="_blank">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Schedule
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
