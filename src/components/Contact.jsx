import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'School Address',
      details: 'Ramnagar, Near Maa Shitala Temple Ramnagar, Meja, Prayagraj.',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 (011) 2548-9630, +91 98765 43210',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@sdpublicschool.edu.in, admissions@sdpublicschool.edu.in',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#facebook', color: 'hover:text-blue-600 hover:bg-blue-50' },
    { icon: Instagram, href: '#instagram', color: 'hover:text-pink-600 hover:bg-pink-50' },
    { icon: Youtube, href: '#youtube', color: 'hover:text-red-650 hover:bg-red-50' },
    { icon: Linkedin, href: '#linkedin', color: 'hover:text-blue-700 hover:bg-blue-50' },
  ];

  return (
    <section id="contact" className="py-20 bg-school-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-school-900 tracking-tight">
            Contact Us
          </h2>
          <div className="h-1.5 w-20 bg-school-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-655 mt-4 text-lg">
            We would love to hear from you. Get in touch with us directly or follow us on our social networks.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Cards */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex items-start gap-4 transition-all hover:shadow-lg"
                  >
                    <div className="p-3 bg-school-50 text-school-600 rounded-xl shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-school-900 mb-1">{info.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{info.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media Link bar */}
            <div className="p-6 bg-white border border-gray-100 shadow-md rounded-2xl">
              <h4 className="font-bold text-school-900 mb-4 text-center sm:text-left">Follow Us On Social Media</h4>
              <div className="flex justify-center sm:justify-start gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      className={`p-3 bg-gray-50 border border-gray-150 rounded-xl text-gray-500 transition-all duration-300 ${social.color}`}
                      aria-label="Social Link"
                    >
                      <Icon className="h-5.5 w-5.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="bg-white border border-gray-100 rounded-3xl p-4 shadow-xl overflow-hidden min-h-[350px] relative flex flex-col justify-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4312891968846!2d82.11437142502693!3d25.249755977676646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39855b182929c669%3A0xfd3fbddae943e2e3!2sS.D.%20Public%20School!5e0!3m2!1sen!2sin!4v1716723223000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full rounded-2xl"
              title="S.D. Public School Google Map Location"
            ></iframe>

            {/* Float Overlay Route Selector card */}
            <div className="relative z-10 p-4 bg-white/90 backdrop-blur border border-school-150/40 rounded-2xl flex items-center justify-between shadow-lg">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-school-900 uppercase">Campus Location</span>
                <span className="text-[10px] text-gray-500 mt-0.5">Ramnagar, Meja, Prayagraj</span>
              </div>
              <button
                onClick={() => window.open('https://www.google.com/maps/place/S.D.+Public+School/@25.2496073,82.116537,3a,75y,33.27h,95.1t/data=!3m7!1e1!3m5!1s7nk8DuDDL9JBaqC3MvQJoQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-5.097859963054958%26panoid%3D7nk8DuDDL9JBaqC3MvQJoQ%26yaw%3D33.27077905835943!7i13312!8i6656!4m18!1m11!4m10!1m4!2m2!1d81.8976025!2d25.343098!4e1!1m4!2m2!1d82.1161107!2d25.2483754!4e1!3m5!1s0x39855b182929c669:0xfd3fbddae943e2e3!8m2!3d25.249756!4d82.1165601!16s%2Fg%2F11h07v14k5?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                className="bg-school-600 hover:bg-school-700 text-white text-xs font-bold py-2 px-4 rounded-xl flex items-center gap-1 shadow-md shadow-school-600/10 transition-all"
              >
                Directions <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
