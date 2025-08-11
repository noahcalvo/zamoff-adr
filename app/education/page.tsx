import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Contact } from "@/components/ui/contact"

import {
  Award,
  GraduationCap,
  Trophy,
  Star,
} from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-white w-full">
      <section id="education" className="py-16 bg-gray-50 scroll-m-16">
        <div className="max-w-6xl mx-auto px-16">
          <div className="text-center mb-16 flex items-center justify-center gap-4">
            <h2 className="text-4xl font-bold text-gray-900">Education</h2>
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

      <section id="honors" className="py-10 bg-gray-50 lg:px-16">

        {/* Honors Section */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 flex items-center justify-center gap-3">
            <h2 className="text-4xl font-bold text-gray-900">Honors</h2>
          </div>
          <div className="grid gap-6 mx-auto">
            {/* Recent Awards */}
            <Card className="shadow-lg border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-yellow-500 hidden md:block" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      University of Minnesota Award for Outstanding Contributions to Graduate and Professional Education
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 hidden md:block" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Inductee, Academy of Distinguished Teachers
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-green-500 hidden md:block" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Best ADR Scholarly Article of the Year, Association of American Law Schools, ADR Section
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
                  <Trophy className="w-6 h-6 text-orange-500 hidden md:block" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Stanley V. Kinyon Teacher of the Year Award, University of Minnesota Law School
                    </h3>
                    <p className="text-sm text-gray-600">
                    Two-time recipient
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}