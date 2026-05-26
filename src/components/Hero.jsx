import React from 'react';
import schoolCampus from '../assets/school_campus.jpg';

export default function Hero() {
  // Check if admissions are open (March to June inclusive: month 2 to 5)
  const today = new Date();
  const month = today.getMonth(); // 0 is Jan, 2 is March, 5 is June
  const showAdmissionsBadge = month >= 2 && month <= 5;

  // Calculate dynamic academic year session
  const currentYear = today.getFullYear();
  const nextYear = currentYear + 1;
  const academicSession = `${currentYear} - ${nextYear}`;

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={schoolCampus}
          alt="SD Public School Campus"
          className="w-full h-full object-cover scale-105 animate-fade-in"
          style={{ animationDuration: '2s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-school-950/90 via-school-900/70 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          {/* Admission Open Badge */}
          {showAdmissionsBadge && (
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-lg animate-bounce duration-1000">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
              Admission Open ({academicSession})
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight select-none">
            Welcome to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-300 to-white">
              SD Public School
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-school-100 font-medium leading-relaxed max-w-xl">
            Empowering students to achieve academic excellence, develop strong character, and lead with compassion.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#admissions"
              className="px-8 py-3.5 rounded-full bg-school-500 hover:bg-school-600 text-white text-base font-semibold shadow-lg shadow-school-500/30 hover:shadow-school-600/40 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply Now
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-base font-semibold backdrop-blur-sm transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave Bottom Cut */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
