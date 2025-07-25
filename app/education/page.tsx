import { Card, CardContent } from "@/components/ui/card"
import Footy from "@/components/ui/footer"
import Navvy from "@/components/ui/navbar"
import { Badge } from "@/components/ui/badge"

import {
  Award,
  GraduationCap,
  Trophy,
  Star
} from "lucide-react"


export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navvy />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
      <img
          src="/speaking-at-pod.jpeg?height=1080&width=1920"
          alt="Professional legal setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
                <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Education & Awards</h1>
              <p className="text-md text-blue-100 mb-8">
              Distinguished academic achievements and professional recognition spanning decades of excellence in legal
              education and practice.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-50 scroll-m-16">
        <div className="max-w-6xl mx-auto px-16">
          <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {/* Law School */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg hidden sm:block">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">University of Virginia Law School</h3>
                    <p className="text-gray-600 mb-3">Charlottesville, VA</p>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                        J.D., 1992
                      </Badge>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>• Order of the Coif</p>
                        <p>• Virginia Law Review</p>
                        <p>• Champion, William Minor Lile Moot Court Competition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Undergraduate */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg hidden sm:block">
                    <GraduationCap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">University of Virginia</h3>
                    <p className="text-gray-600 mb-3">Charlottesville, VA</p>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-orange-50 text-orange-700">
                        B.A., 1989, with distinction
                      </Badge>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>• Double major: American Government, Rhetoric & Communications Studies</p>
                        <p>• Thomas Jefferson Scholar (full merit scholarship)</p>
                        <p>• Phi Beta Kappa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="publications" className="py-10 bg-gray-50">
        
      {/* Awards Section */}
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Awards & Recognition</h2>
          </div>

          <div className="grid gap-6">
            {/* Recent Awards */}
            <Card className="shadow-lg border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-yellow-500 mt-1 hidden md:block" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      University of Minnesota Award for Outstanding Contributions to Graduate and Professional Education
                      (2025)
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 mt-1 hidden md:block" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Inductee, Academy of Distinguished Teachers (2025)
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-green-500 mt-1 hidden md:block" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Best ADR Scholarly Article of the Year, Association of American Law Schools, ADR Section (2023)
                    </h3>
                    <p className="text-sm text-gray-600">
                      Honoring &quot;Proposed Guidelines for Arbitral Disclosure of Social Media Activity&quot;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-orange-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-orange-500 mt-1 hidden md:block" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Stanley V. Kinyon Teacher of the Year Award, University of Minnesota Law School (2016 & 2021)
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Recognition */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Professional Recognition</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      NOMINATION
                    </Badge>
                    <span className="text-sm text-gray-700">
                      Trial Lawyer of the Year, Trial Lawyers for Public Justice
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      RECOGNITION
                    </Badge>
                    <span className="text-sm text-gray-700">Washington, D.C. Super Lawyers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      GUIDE
                    </Badge>
                    <span className="text-sm text-gray-700">Guide to the Leading U.S. Litigation Lawyers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      MAGAZINE
                    </Badge>
                    <span className="text-sm text-gray-700">Washingtonian Magazine, Top 40 Lawyers Under 40</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Law Enforcement Recognition:</strong> Awards from Federal Bureau of Investigation, Bureau of
                    Alcohol, Tobacco & Firearms and Philadelphia Police Department for prosecutorial excellence
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Notable Case */}
            <Card className="shadow-lg bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-900 mb-2">Notable Pro Bono Work</h3>
                <p className="text-sm text-blue-800">
                  Lead pro bono trial counsel for pardoned defendants in Tulia, Texas civil rights litigation, earning
                  nomination for Trial Lawyer of the Year from Trial Lawyers for Public Justice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footy />
    </div>
  )
}