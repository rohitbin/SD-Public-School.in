import React from 'react';
import { Award, Star } from 'lucide-react';
import topperImage from '../assets/student_topper.png';

export default function Toppers() {
  const toppers = [
    {
      name: 'Drishya Verma',
      grade: '98.6%',
      achievement: 'Class XII (Science Topper)',
      badge: 'Gold Medalist',
      bgBadge: 'bg-amber-100 text-amber-700 border-amber-200',
    },
    {
      name: 'Aditya Roy',
      grade: '97.4%',
      achievement: 'Class XII (Commerce Topper)',
      badge: 'Silver Medalist',
      bgBadge: 'bg-slate-100 text-slate-700 border-slate-200',
    },
    {
      name: 'Riya Sen',
      grade: '96.8%',
      achievement: 'Class X (Board Exam Topper)',
      badge: 'Bronze Medalist',
      bgBadge: 'bg-orange-100 text-orange-700 border-orange-200',
    },
  ];

  return (
    <section id="toppers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-school-900 tracking-tight">
            Academic Toppers
          </h2>
          <div className="h-1.5 w-20 bg-school-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-655 mt-4 text-lg">
            Celebrating the outstanding performance and dedicated hard work of our top board examination rankers.
          </p>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 rounded-3xl p-6 transition-all duration-300 flex flex-col items-center text-center relative group"
            >
              {/* Medal/Award Badge */}
              <div className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${topper.bgBadge}`}>
                <Award className="h-3.5 w-3.5" />
                {topper.badge}
              </div>

              {/* Student Avatar */}
              <div className="relative mb-6 mt-4">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-school-600 to-school-200 rounded-full blur-sm opacity-30 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img
                  src={topperImage}
                  alt={topper.name}
                  className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-1 right-2 bg-school-600 text-white p-2 rounded-full shadow-lg">
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>

              {/* Student Details */}
              <h3 className="font-bold text-xl text-school-950 mb-1 group-hover:text-school-600 transition-colors">
                {topper.name}
              </h3>
              
              <div className="text-3xl font-extrabold text-school-600 tracking-tight my-2">
                {topper.grade}
              </div>

              <p className="text-sm font-semibold text-gray-600 mb-1">
                {topper.achievement}
              </p>
              
              <p className="text-xs text-gray-400 mt-2 italic">
                SD Public School Board Batch of 2025
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
