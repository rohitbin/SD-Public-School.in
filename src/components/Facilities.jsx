import React from 'react';
import { BookOpen, MonitorPlay, Cpu, Trophy, Bus } from 'lucide-react';

export default function Facilities() {
  const facilitiesList = [
    {
      title: 'Modern Library',
      description: 'A quiet, rich sanctuary housing over 15,000 reference books, journals, newspapers, and e-learning resources, fostering a deep reading culture.',
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      title: 'Smart Classes',
      description: 'All classrooms are equipped with modern interactive smartboards, digital content projectors, and high-speed internet to enhance visual understanding.',
      icon: MonitorPlay,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Advanced Computer Lab',
      description: 'Equipped with over 60 modern desktops, software packages for coding and robotics, and strict cyber security filters to support IT learning.',
      icon: Cpu,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      title: 'Extensive Sports Ground',
      description: 'A spacious multi-sport yard supporting football, cricket pitches, basketball courts, and indoor courts for table tennis and chess.',
      icon: Trophy,
      color: 'bg-orange-50 text-orange-600 border-orange-100',
    },
    {
      title: 'Safe Transportation',
      description: 'A large fleet of school buses covering major routes in the city, staffed with GPS trackers, cameras, and verified helpers for student safety.',
      icon: Bus,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-school-900 tracking-tight">
            Our Campus Facilities
          </h2>
          <div className="h-1.5 w-20 bg-school-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-655 mt-4 text-lg">
            We provide a safe, state-of-the-art infrastructure designed to inspire and facilitate every dimension of a child's educational journey.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-school-500 to-school-300 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div>
                  <div className={`p-4 rounded-2xl border w-fit mb-6 ${item.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-school-950 mb-3 group-hover:text-school-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center text-xs font-semibold text-school-600 group-hover:translate-x-1 transition-transform">
                  Learn more &rarr;
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
