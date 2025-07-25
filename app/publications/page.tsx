import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footy from "@/components/ui/footer"
import Navvy from "@/components/ui/navbar"
import {
  Mic,
  Presentation,
  Users,
  FileText,
  Gavel,
  BookOpen, Award
} from "lucide-react"

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
]

const speaking = [
  {
    role: "Panelist",
    talk: "AI in Action: Enhancing Healthcare Dispute Resolution, American Arbitration Association 2025 Annual Conference",
    date: "March 2025",
    icon: Users,
  },
  {
    role: "Co-Presenter",
    talk: "Navigating Managed Care for the Judiciary, American Arbitration Association",
    date: "September and December 2024",
    icon: Presentation,
  },
  {
    role: "Panelist",
    talk: "Healthcare Arbitrator Roundtable: Master Session on Effective Strategies, American Arbitration Association 2024 Healthcare ADR Conference",
    date: "October 2024",
    icon: Users,
  },
  {
    role: "Co-Author",
    talk: "Transparent Connections: Arbitrators, Attorneys, Parties and Social Media Disclosures, AAA-ICDR Blog & News",
    date: "July 2024",
    icon: FileText,
  },
  {
    role: "Co-Presenter",
    talk: "Disclosures Are An Arbitrator’s Best Friend, American Arbitration Association Healthcare Panel Roundtable",
    date: "June 2024",
    icon: Presentation,
  },
  {
    role: "Co-Presenter",
    talk: "Sanctioning Attorneys in Arbitration, American Bar Association Dispute Resolution Section Spring Conference",
    date: "April 2024",
    icon: Gavel,
  },
  {
    role: "Presenter",
    talk: "Transparent Connections: A Framework for Arbitrator Disclosure in the Era of Social Media, American Arbitration Association",
    date: "April 2024",
    icon: Presentation,
  },
  {
    role: "Presenter",
    talk: "Proposed Guidelines for Arbitral Disclosure of Social Media Activity, University of Minnesota Law School",
    date: "February 2024",
    icon: Mic,
  },
  {
    role: "Presenter",
    talk: "Arbitrators, Social Media and Disclosure Ethics, University of Nevada Las Vegas Law School",
    date: "February 2024",
    icon: Mic,
  },
  {
    role: "Presenter",
    talk: "Sanctioning Attorney Misconduct in Arbitration, AALS ADR Works-in-Progress Conference, Yale & Quinnipiac Law",
    date: "October 2023",
    icon: Gavel,
  },
  {
    role: "Co-Presenter",
    talk: "Understanding and Maximizing the Benefits of Arbitration, ABA National Managed Care Institute",
    date: "October 2023",
    icon: Presentation,
  },
  {
    role: "Presenter",
    talk: "Do Arbitrators Have the Authority to Sanction Lawyer Misconduct?, American Arbitration Association",
    date: "August 2023",
    icon: Gavel,
  },
  {
    role: "Presenter",
    talk: "Protecting Confidential Arbitration Awards, American Arbitration Association",
    date: "July 2023",
    icon: FileText,
  },
  {
    role: "Co-Presenter",
    talk: "Reforming the FAA: Forging a Path Forward, ABA DR Section Spring Conference",
    date: "May 2023",
    icon: Gavel,
  },
  {
    role: "Presenter",
    talk: "“Criminalizing” Depositions in Arbitration, AALS ADR Works-in-Progress, University of Oregon Law",
    date: "October 2022",
    icon: Mic,
  },
  {
    role: "Presenter",
    talk: "Peering Into the Arbitrator’s Brain: Healthcare Case Evaluation, AAA Healthcare DR Conference",
    date: "September 2022",
    icon: Mic,
  },
  {
    role: "Presenter",
    talk: "Proposed Guidelines for Arbitral Disclosure of Social Media Activity, ABA DR Section Spring Conference",
    date: "April 2022",
    icon: FileText,
  },
  {
    role: "Presenter",
    talk: "Safeguarding Confidential Arbitration Awards in Uncontested Confirmations, AALS, University of Maryland Law",
    date: "February 2022",
    icon: FileText,
  },
  {
    role: "Presenter",
    talk: "Proposed Guidelines for Arbitral Disclosure of Social Media Activity, AALS, Straus Institute",
    date: "October 2021",
    icon: Mic,
  },
  {
    role: "Presenter",
    talk: "Say What? Arbitrator Disclosures and Why They Matter, ABA DR Conference",
    date: "April 2019",
    icon: Mic,
  },
  {
    role: "Faculty",
    talk: "AAA Healthcare DR Innovation & Strategy Conference, ACI Managed Care Disputes ADR Panel",
    icon: Presentation,
  },
  {
    role: "Faculty",
    talk: "AAA Rx for Healthcare Disputes: Exploring ADR Solutions",
    icon: Presentation,
  },
]

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navvy />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10 sm:hidden"></div>
      <img
          src="/speaking-in-class-crop.png?height=1080&width=1920"
          alt="Professional legal setting"
          className="absolute inset-0 w-full h-full object-cover sm:hidden"
        />
                <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8 items-center">
            <img
                src="/speaking-in-class-crop.png"
                alt="Mitch Zamoff speaking at a University of Minnesota Law Ceremony"
                className="rounded-lg shadow-xl max-w-80 hidden sm:block"
              />
              <div className="text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-24">Speaking Engagements and Publications</h1>
              <p className="text-md text-blue-100 mb-8">
                Substantial experience arbitrating, mediating, and litigating disputes involving healthcare entities and
                health law across all sectors of the industry.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="speaking" className="py-20 bg-gray-50 scroll-m-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Speaking</h2>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> */}
          <div className="mb-8">
          {speaking.map(( speach, index) =>               
          (
            <li className="text-lg font-semibold mb-6 list-none" key={index}>
              <div className="flex gap-4"><speach.icon className="w-6 h-6 text-blue-600 hidden sm:block" />
              {speach.talk}</div><div className="pl-16 text-gray-500 font-regular text-md">{speach.role}{speach.date && ","} {speach.date}</div></li>
          ))}
          </div>
        </div>
      </section>

      <section id="publications" className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
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

      <Footy />
    </div>
  )
}