import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footy() {
return(
  <footer className="bg-black text-gray-400 py-8 space-y-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-center space-x-6 items-center">
        <img
              src="/zamoffADR-white-transparent.png"
              alt="Zamoff ADR"
              className="object-cover h-8"
            />
          <a href="https://www.linkedin.com/in/mitch-zamoff-1b308049/" className="text-gray-400 hover:text-white transition-colors ml-2" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
          </a>
          <a href="https://law.umn.edu/profiles/mitchell-e-zamoff" className="text-gray-400 hover:cursor-pointer transition-colors ml-2" target="_blank">
            <img
            src="/UMN.png"
            alt="University of Minnesota logo"
            className="object-cover h-8"
            />
          </a>
        </div>
        <p className="text-center">&copy; 2025 Mitch Zamoff ADR</p>
      </footer>
  )
}
