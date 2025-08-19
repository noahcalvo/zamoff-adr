// app/education/page.tsx (or pages/education.tsx)
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Contact } from "@/components/ui/contact"
import { Award, GraduationCap, Trophy, Star } from "lucide-react"

export const metadata = {
  title: "Education & Honors | Zamoff ADR",
  description:
    "Education and academic honors for Mitch Zamoff, Professor of Law and ADR practitioner.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white w-full">
      {/* Education */}
      <section id="education" className="py-16 bg-gray-50 scroll-m-16">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16 flex items-center justify-center gap-4">
            <h1 className="text-4xl font-bold text-gray-900">Education</h1>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-stretch [grid-auto-rows:1fr]">
            {/* Law School */}
            <article>
              <Card className="shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg hidden sm:block">
                      <GraduationCap className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-2 min-w-0">
                      <h2 className="text-xl font-bold text-gray-900">
                        University of Virginia School of Law
                      </h2>
                      <span className="text-gray-600">Charlottesville, VA</span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4 mx-16">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      J.D., 1992
                    </Badge>
                    <ul className="space-y-1 text-sm text-gray-700 list-disc pl-5">
                      <li>Order of the Coif</li>
                      <li>Virginia Law Review</li>
                      <li>Champion, William Minor Lile Moot Court Competition</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Undergraduate */}
            <article>
              <Card className="shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg hidden sm:block">
                      <GraduationCap className="w-6 h-6 text-orange-600" aria-hidden="true" />
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-2 min-w-0">
                      <h2 className="text-xl font-bold text-gray-900">
                        University of Virginia
                      </h2>
                      <span className="text-gray-600">Charlottesville, VA</span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4 mx-16">
                    <Badge variant="secondary" className="bg-orange-50 text-orange-700">
                      B.A., 1989, with distinction
                    </Badge>
                    <ul className="space-y-1 text-sm text-gray-700 list-disc pl-5">
                      <li>Thomas Jefferson Scholar</li>
                      <li>Phi Beta Kappa</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </section >

      {/* Honors */}
      < section id="honors" className="py-10 bg-gray-50 lg:px-16 cv-auto" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 flex items-center justify-center gap-3">
            <h2 className="text-4xl font-bold text-gray-900">Honors</h2>
          </div>

          {/* Use a semantic list; each Card is a list item */}
          <ul role="list" className="grid gap-6 mx-auto">
            <li>
              <Card className="shadow-lg border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Trophy className="w-6 h-6 text-yellow-500 hidden md:block" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        University of Minnesota Award for Outstanding Contributions to Graduate and Professional Education
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>

            <li>
              <Card className="shadow-lg border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-yellow-500 hidden md:block" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Inductee, Academy of Distinguished Teachers</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>

            <li>
              <Card className="shadow-lg border-l-4 border-l-green-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-green-500 hidden md:block" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Best ADR Scholarly Article of the Year, Association of American Law Schools, ADR Section
                      </h3>
                      <p className="text-sm text-gray-600">
                        Honoring &quot;Proposed Guidelines for Arbitral Disclosure of Social Media Activity&quot;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>

            <li>
              <Card className="shadow-lg border-l-4 border-l-orange-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Trophy className="w-6 h-6 text-orange-500 hidden md:block" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Stanley V. Kinyon Teacher of the Year Award, University of Minnesota Law School
                      </h3>
                      <p className="text-sm text-gray-600">Two-time recipient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>
          </ul>
        </div>
      </section >

      <Contact />

      {/* Minimal, truthful schema to help SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mitch Zamoff",
            affiliation: { "@type": "Organization", name: "Zamoff ADR" },
            alumniOf: [
              { "@type": "CollegeOrUniversity", name: "University of Virginia School of Law" },
              { "@type": "CollegeOrUniversity", name: "University of Virginia" }
            ],
            award: [
              "University of Minnesota Award for Outstanding Contributions to Graduate and Professional Education",
              "Academy of Distinguished Teachers (Inductee)",
              "Best ADR Scholarly Article of the Year (AALS, ADR Section)",
              "Stanley V. Kinyon Teacher of the Year Award (two-time recipient)"
            ],
            url: "https://zamoffadr.com/education"
          }),
        }}
      />
    </div >
  )
}
