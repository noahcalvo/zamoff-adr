import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Scale, Shield, Building, FileText, Users, Heart } from "lucide-react";
import type { ElementType } from "react";
import Link from "next/link";
import Image from "next/image";


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
        "Non-disclosure agreements", 
        "Partnership and joint venture agreements", 
        "Franchise contracts",
        "Loan agreements",
        "Software development and other technology agreements"
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
      "Employment Law & Whistleblower Actions",
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
      {/* Header / Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
  <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Areas of Expertise</h1>
      <p className="text-lg text-blue-100 max-w-2xl">
        Comprehensive ADR services across diverse practice areas, backed by decades of experience in complex commercial disputes.
      </p>
    </div>
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl max-w-md">
      <Image
        src="/podium-cropped.jpeg"
        alt="Mitch Zamoff presenting at a podium"
        fill
        priority
        sizes="(max-width: 1000px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  </div>
</section>


      {/* Expiremental Secondary Nav bar */}
      {/* <nav aria-label="Expertise sections" className="border-b bg-white/70 backdrop-blur sticky top-18 z-30">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex flex-wrap gap-2 py-3">
            {expertiseContent.map(([ title ]) => (
              <li key={title}>
                <Link
                  href={`#${slugify(title)}`}
                  className="inline-flex items-center rounded-md px-3.5 py-2 text-sm font-medium
                       border border-gray-200 hover:border-blue-400
                       hover:bg-blue-50 focus:outline-none focus-visible:ring-2
                       focus-visible:ring-blue-500/70"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav> */}

      {/* Expertise Content */}

      <section className="mt-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12">
            {expertiseContent.map(([title, IconComponent, points]) => {
              const id = slugify(title)
              const half = Math.ceil(points.length / 2);
              return (
                <section id={id} key={title} aria-labelledby={`${id}-title`} className="scroll-m-24">
                  <Card className="border-0 overflow-hidden rounded-lg shadow-xl">
                    <CardHeader className="bg-gray-100 border-b pt-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg" aria-hidden="true">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          {/* h2 for section heading improves a11y hierarchy */}
                          <h2
                            id={`${id}-title`}
                            className="text-2xl text-gray-900 font-semibold leading-none tracking-tight"
                          >
                            {title}
                          </h2>

                          {title === "Healthcare" && (
                            <Link
                              href="/healthcare"
                              className="text-blue-700 hover:text-blue-800 underline underline-offset-4"
                            >
                              Learn more about Healthcare →
                            </Link>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-700">
                        <ul className="list-none space-y-3">
                          {points.slice(0, half).map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" aria-hidden="true" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="list-none space-y-3">
                          {points.slice(half).map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" aria-hidden="true" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Expert ADR Services?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              With extensive experience across these practice areas, Zamoff ADR provides the specialized expertise needed
              to resolve your most complex disputes efficiently and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a
                href="mailto:mitch@zamoffadr.com"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white h-12 px-10 rounded-lg font-medium text-lg transition-colors"
              >
                Schedule
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center border border-blue-600 text-blue-600 hover:bg-blue-200 hover:text-black h-12 px-10 rounded-lg font-medium transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
