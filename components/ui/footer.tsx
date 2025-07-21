import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footy() {
return(
  <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-center space-x-3 items-center">
        <img
              src="/logo_3.png"
              alt="Zamoff ADR"
              className="object-cover w-24"
            />
          <p>&copy; 2025 Mitch Zamoff ADR</p>
          <a href="#" className="text-gray-400 hover:text-white transition-colors ml-2">
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
        </div>
      </footer>
  )
}
