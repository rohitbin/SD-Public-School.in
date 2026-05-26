import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Toppers', href: '#toppers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 text-school-900 border-b border-school-100'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & School Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="SD Public School Logo"
              className="h-12 w-12 object-contain bg-white rounded-full p-0.5 border border-school-200 shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className={`font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-school-900' : 'text-white'
              }`}>
                SD PUBLIC SCHOOL
              </span>
              <span className={`text-[10px] uppercase tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-school-500' : 'text-school-200'
              }`}>
                Moulding Minds, Shaping Futures
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled
                    ? 'text-school-700 hover:text-school-600 hover:bg-school-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#admissions"
              className={`ml-4 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg ${
                isScrolled
                  ? 'bg-school-600 text-white hover:bg-school-700'
                  : 'bg-white text-school-900 hover:bg-school-50'
              }`}
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled
                  ? 'text-school-900 hover:bg-school-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        } bg-white shadow-xl border-b border-school-100`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-school-900">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-school-700 hover:bg-school-50 hover:text-school-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-3">
            <a
              href="#admissions"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-md text-base font-semibold bg-school-600 text-white hover:bg-school-700 shadow transition-colors"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
