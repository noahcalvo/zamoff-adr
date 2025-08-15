import { Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 min-h-[calc(100vh-13.5rem)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Contact Zamoff ADR</h1>
        <p className="text-lg text-gray-300 mb-14">
        Contact Mitch Zamoff to discuss arbitration and mediation services.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <Mail className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-1">Email</h2>
            <p className="text-gray-400">mitch@zamoffadr.com</p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <svg className="mx-auto" fill="#4aa6fb" width="100px" height="50px" viewBox="0 10 72 44" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00072"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>us-map</title>
                <path d="M67.86,15.56l0,0c-.51-.49-4-.19-4-.19a.9.9,0,0,1-.08.19,1.45,1.45,0,0,1-.95.76c-.83.22-12.59.43-12.9-.42a.73.73,0,0,0-.26-.34A2.75,2.75,0,0,0,48,15.25s-.09.12-.24.29a3.84,3.84,0,0,1-1.41,1.19c-.56.16-.69-.56-.62-1.19a2.33,2.33,0,0,1,.1-.5c.14-.45-1.23-2-2.38-2.75a1.74,1.74,0,0,0-1.23-.43c-.93.32-5.78-1.58-5.78-1.58h-30s-.06.67-.17,1.26l0,.16a2.19,2.19,0,0,1-.18.59c0,.08-.08.12-.13.1a.7.7,0,0,1-.19-.1c-.46-.3-1.39-1.09-1.57-.64a1,1,0,0,0,.11.64,9.6,9.6,0,0,1,.93,2.32V25.08a1.33,1.33,0,0,0,.58,1c.59.5,1.4.94,1.27,1.94v.07c-.1,1.18,1.31,2.41,2.29,3.25.29.25.54.46.7.63s.73.85,1.17,1.38c.61.74,1.26,1.43,1.62,1.37.62-.11,1.75-.53,2.47.32.6.7,3.36,1.41,4.74,1.56h.79a10.59,10.59,0,0,1,4,0,1.21,1.21,0,0,1,.87.76,4.61,4.61,0,0,0,.59,1.25,9.13,9.13,0,0,0,1.37,1.61s.51-.85.82-1.48l.09-.13a.69.69,0,0,1,.83,0A3.9,3.9,0,0,1,30.94,41a4,4,0,0,0,.32.8,5.85,5.85,0,0,0,1.82,2,7.94,7.94,0,0,0,1.57.89s0-.37,0-.89,0-1.36.05-2c0-.21,0-.41,0-.59.11-1.16,3.51-2.22,4.13-2.32s4.74,1.79,4.74,1.16.66-1,1.42-1.5l.44-.3c.33-.22.73,0,1.12.3.72.59,1.39,1.59,1.46,1.18.1-.63,2.06-.31,2.27.43a14.72,14.72,0,0,1,.36,1.64,4.25,4.25,0,0,1,.05,1.1,1.65,1.65,0,0,0,.32.91c.55.93,1.62,2.07,1.85,1.84a5.06,5.06,0,0,0,.35-1.84,8.27,8.27,0,0,0-.07-2,1.57,1.57,0,0,0-.39-.9A4.47,4.47,0,0,1,52,38.59a8,8,0,0,1,0-2,1.63,1.63,0,0,1,.4-1c.32-.25,1.47-1.16,2.68-2.21.77-.66,1.56-1.38,2.18-2,.89-.91,1.42-1.65,1-1.8-.67-.25-.76-.72-.69-1.45.05-.51.19-1.15.28-1.93a.22.22,0,0,1,0-.08c.23-1.76,1.44.36,2-2a2.15,2.15,0,0,1,.74-1.21c1.39-1.2,4.08-1.2,3.59-1.54a.92.92,0,0,1-.33-.47,2,2,0,0,1,.64-2.07c.31-.24,1-.69,1.6-1.18C67.09,16.77,68.11,15.89,67.86,15.56Z" />
                <path d="M41 11l1.8 5.52H47.6l-4.56 3.36 1.8 5.4L41 21.4l-4.44 3.48 1.8-5.4-4.56-3.36h5.4L41 11z" fill="#ffffff" />
              </g>
            </svg>
            <h2 className="text-2xl font-semibold mb-1">Location</h2>
            <p className="text-gray-400">United States</p>
            <p className="text-gray-400 text-xs">(based in Minneapolis)</p>
          </div>
        </div>

        <Link
          href="mailto:mitch@zamoffadr.com"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-colors"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
