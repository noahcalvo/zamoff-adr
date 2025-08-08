import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  BookOpen, Award
} from "lucide-react"
import { Contact } from "@/components/ui/contact"


const publications = [
  {
    title: "The FAA's Silence on Arbitral Disclosures: A Pressing Problem in the Social Media Age",
    publication: "THE FEDERAL ARBITRATION ACT: SUCCESSES, FAILURES, AND A ROADMAP FOR REFORM (Cambridge University Press)",
    year: 2025,
    icon: BookOpen,
  },
  {
    title: "The Seven Essential Law School Simulation Courses",
    publication: "2024 Utah Law Review 997",
    year: 2024,
    icon: BookOpen,
  },
  {
    title: "“Criminalizing” Depositions in Arbitration",
    publication: "108 Minnesota Law Review 2437",
    year: 2024,
    icon: BookOpen,
  },
  {
    title: "Safeguarding Confidential Arbitration Awards in Uncontested Confirmation Actions",
    publication: "59 American Business Law Journal 505",
    year: 2022,
    icon: BookOpen,
  },
  {
    title: "Proposed Guidelines for Arbitral Disclosure of Social Media Activity",
    publication: "23 Cardozo Journal of Conflict Resolution 1",
    year: 2022,
    icon: Award,
    highlight: "Selected as Best ADR Scholarly Article of the Year by AALS ADR Section",
  },
  {
    title: "Co-Authored Transparent Connections: Arbitrators, Attorneys, Parties and Social Media Disclosures",
    publication: "AAA-ICDR Blog & News",
    year: 2024,
    icon: FileText,
  },
]

const speaking = [
  {
    talk: "AI in Action: Enhancing Healthcare Dispute Resolution, American Arbitration Association 2025 Annual Conference",
  },
  {
    talk: "Navigating Managed Care for the Judiciary, American Arbitration Association",
  },
  {
    talk: "Healthcare Arbitrator Roundtable: Master Session on Effective Strategies, American Arbitration Association 2024 Healthcare ADR Conference",
  },
  {
    talk: "Disclosures Are An Arbitrator’s Best Friend, American Arbitration Association Healthcare Panel Roundtable",
  },
  {
    talk: "Sanctioning Attorneys in Arbitration, American Bar Association Dispute Resolution Section Spring Conference",
  },
  {
    talk: "Transparent Connections: A Framework for Arbitrator Disclosure in the Era of Social Media, American Arbitration Association",
  },
  {
    talk: "Proposed Guidelines for Arbitral Disclosure of Social Media Activity, University of Minnesota Law School",
  },
  {
    talk: "Arbitrators, Social Media and Disclosure Ethics, University of Nevada Las Vegas Law School",
  },
  {
    talk: "Sanctioning Attorney Misconduct in Arbitration, AALS ADR Works-in-Progress Conference, Yale & Quinnipiac Law",
  },
  {
    talk: "Understanding and Maximizing the Benefits of Arbitration, ABA National Managed Care Institute",
  },
  {
    talk: "Do Arbitrators Have the Authority to Sanction Lawyer Misconduct?, American Arbitration Association",
  },
  {
    talk: "Protecting Confidential Arbitration Awards, American Arbitration Association",
  },
  {
    talk: "Reforming the FAA: Forging a Path Forward, ABA DR Section Spring Conference",
  },
  {
    talk: "“Criminalizing” Depositions in Arbitration, AALS ADR Works-in-Progress, University of Oregon Law School",
  },
  {
    talk: "Peering Into the Arbitrator’s Brain: Healthcare Case Evaluation, AAA Healthcare DR Conference",
  },
  {
    talk: "Proposed Guidelines for Arbitral Disclosure of Social Media Activity, ABA DR Section Spring Conference",
  },
  {
    talk: "Safeguarding Confidential Arbitration Awards in Uncontested Confirmation Actions, AALS, University of Maryland Law School",
  },
  {
    talk: "Proposed Guidelines for Arbitral Disclosure of Social Media Activity, AALS, Straus Institute",
  },
  {
    talk: "Say What? Arbitrator Disclosures and Why They Matter, ABA DR Conference",
  },
  {
    talk: "AAA Healthcare DR Innovation & Strategy Conference, ACI Managed Care Disputes ADR Panel",
  },
  {
    talk: "AAA Rx for Healthcare Disputes: Exploring ADR Solutions",
  },
]

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white w-full">
            <section id="publications" className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ADR Publications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {publications.map(({ title, publication, year, highlight }, index) =>
            (<Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 justify-between py-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{title}</CardTitle>
                <p className="text-md">{publication}</p>
              </CardHeader>
              <CardContent className="">
                {highlight && <div className="mb-2 flex items-center text-md bg-blue-100 rounded-lg p-2 italic pl-1"><span><Award className="w-8 h-8 mr-2 text-amber-500" /></span><p className="">{highlight}</p></div>}
                <p className="text-gray-600 text-sm leading-relaxed">{year}</p>
              </CardContent>
            </Card>
            ))}

          </div>
        </div>
      </section>
      <section id="speaking" className="py-20 bg-gray-50 scroll-m-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Speaking</h2>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> */}
          <div className="mb-8 bg-white rounded-xl border shadow-sm py-8 px-8 xl:p-16">
            {speaking.map((speach, index) =>
            (
              <li className="text-lg font-semibold mb-6" key={index}>{speach.talk}</li>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}