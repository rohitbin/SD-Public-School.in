import React from 'react';
import { ArrowUp } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About School', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Toppers Gallery', href: '#toppers' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-school-950 text-gray-300 border-t border-school-900 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand details */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="SD Public School Logo"
                className="h-12 w-12 object-contain bg-white rounded-full p-0.5 border border-school-800 shadow-md"
              />
              <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
                SD PUBLIC SCHOOL
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fostering academic brilliance, strong character traits, and creative discovery within a warm and nurturing community.
            </p>
            <p className="text-xs text-gray-500">
              Affiliated to CBSE, New Delhi. School Code: 20456.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base tracking-wider uppercase pb-2 border-b border-school-900 w-fit">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-school-300 transition-colors py-1 block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base tracking-wider uppercase pb-2 border-b border-school-900 w-fit">
              Contact Details
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <strong className="text-gray-300 block mb-0.5">Address:</strong>
                Ramnagar, Near Maa Shitala Temple Ramnagar, Meja, Prayagraj.
              </li>
              <li>
                <strong className="text-gray-300 block mb-0.5">Phone:</strong>
                +91 (011) 2548-9630, +91 98765 43210
              </li>
              <li>
                <strong className="text-gray-300 block mb-0.5">Email:</strong>
                info@sdpublicschool.edu.in
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom area */}
        <div className="border-t border-school-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SD Public School. All Rights Reserved.</p>
          <p>
            Designed with excellence.
          </p>
        </div>
      </div>

      {/* Floating Action Button Back to Top */}
      <button
        onClick={handleBackToTop}
        className="absolute top-0 right-8 -translate-y-1/2 p-3 bg-school-600 hover:bg-school-700 text-white rounded-full shadow-lg transition-transform hover:-translate-y-2.5"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
