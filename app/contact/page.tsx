import { Mail } from "lucide-react";

export const metadata = {
  title: "Contact Zamoff ADR",
  description: "Contact Mitch Zamoff to discuss arbitration and mediation services.",
};

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 min-h-[calc(100vh-13.5rem)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Contact Zamoff ADR</h1>
        <p className="text-lg text-gray-300 mb-14">
          Contact Mitch Zamoff to discuss arbitration and mediation services.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          {/* Email */}
          <address className="not-italic bg-gray-800 p-8 rounded-xl shadow-lg">
            <Mail className="w-10 h-10 text-blue-400 mb-4 mx-auto" aria-hidden="true" />
            <h2 className="text-2xl font-semibold mb-1">Email</h2>
            <a
              href="mailto:mitch@zamoffadr.com"
              className="text-blue-300 underline underline-offset-4 hover:text-blue-200"
              aria-label="Email Mitch Zamoff at mitch@zamoffadr.com"
            >
              mitch@zamoffadr.com
            </a>
          </address>

          {/* Location (inline SVG, responsive, accessible) */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <svg
              className="mx-auto w-24 h-auto"
              viewBox="0 0 72 44"
              role="img"
              aria-labelledby="usmapTitle usmapDesc"
            >
              <title id="usmapTitle">United States map</title>
              <desc id="usmapDesc">Star marking location</desc>
              <path
                fill="#4aa6fb"
                d="M67.86,15.56c-.51-.49-4-.19-4-.19a1.45,1.45,0,0,1-1,1c-.83.22-12.59.43-12.9-.42a.73.73,0,0,0-.26-.34A2.75,2.75,0,0,0,48,15.25a3.84,3.84,0,0,1-1.65,1.48c-.56.16-.69-.56-.62-1.19a2.33,2.33,0,0,1,.1-.5c.14-.45-1.23-2-2.38-2.75a1.74,1.74,0,0,0-1.23-.43c-.93.32-5.78-1.58-5.78-1.58h-30c0,.53-.12,1.29-.35,1.81a.7.7,0,0,1-.19-.1c-.46-.3-1.39-1.09-1.57-.64a1,1,0,0,0,.11.64,9.6,9.6,0,0,1,.93,2.32V25.08a1.33,1.33,0,0,0,.58,1c.59.5,1.4.94,1.27,1.94-.1,1.18,1.31,2.41,2.29,3.25.29.25.54.46.7.63s.73.85,1.17,1.38c.61.74,1.26,1.43,1.62,1.37.62-.11,1.75-.53,2.47.32.6.7,3.36,1.41,4.74,1.56h.79a10.59,10.59,0,0,1,4,0,1.21,1.21,0,0,1,.87.76,4.61,4.61,0,0,0,.59,1.25,9.13,9.13,0,0,0,1.37,1.61s.51-.85.82-1.48a.69.69,0,0,1,.83,0A3.9,3.9,0,0,1,30.94,41a5.85,5.85,0,0,0,1.82,2,7.94,7.94,0,0,0,1.57.89c0-.76,0-1.66.05-2.59.11-1.16,3.51-2.22,4.13-2.32s4.74,1.79,4.74,1.16.66-1,1.42-1.5l.44-.3c.33-.22.73,0,1.12.3.72.59,1.39,1.59,1.46,1.18.1-.63,2.06-.31,2.27.43a14.72,14.72,0,0,1,.36,1.64,4.25,4.25,0,0,1,.05,1.1,1.65,1.65,0,0,0,.32.91c.55.93,1.62,2.07,1.85,1.84a5.06,5.06,0,0,0,.35-1.84,8.27,8.27,0,0,0-.07-2,1.57,1.57,0,0,0-.39-.9A4.47,4.47,0,0,1,52,38.59a8,8,0,0,1,0-2,1.63,1.63,0,0,1,.4-1c.32-.25,1.47-1.16,2.68-2.21.77-.66,1.56-1.38,2.18-2,.89-.91,1.42-1.65,1-1.8-.67-.25-.76-.72-.69-1.45.05-.51.19-1.15.28-1.93.23-1.76,1.44.36,2-2a2.15,2.15,0,0,1,.74-1.21c1.39-1.2,4.08-1.2,3.59-1.54a.92.92,0,0,1-.33-.47,2,2,0,0,1,.64-2.07c.31-.24,1-.69,1.6-1.18.63-.51,1.65-1.39,1.4-1.72Z"
              />
              <path
                d="M41 11l1.8 5.52H47.6l-4.56 3.36 1.8 5.4L41 21.4l-4.44 3.48 1.8-5.4-4.56-3.36h5.4L41 11z"
                fill="#fff"
              />
            </svg>
            <h2 className="text-2xl font-semibold mb-1">Location</h2>
            <p className="text-gray-300">United States</p>
            <p className="text-gray-400 text-xs">(based in Minneapolis)</p>
          </div>
        </div>

        {/* Primary CTA */}
        <a
          href="mailto:mitch@zamoffadr.com"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Minimal, helpful SEO schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Zamoff ADR",
            email: "mitch@zamoffadr.com",
            url: "https://zamoffadr.com/contact",
            address: { "@type": "PostalAddress", addressLocality: "Minneapolis", addressRegion: "MN", addressCountry: "US" },
          }),
        }}
      />
    </section>
  );
}
