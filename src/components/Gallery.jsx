import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import schoolCampus from '../assets/school_campus.jpg';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'events', 'sports', 'classrooms', 'activities'];

  const items = [
    {
      title: 'Annual Sports Meet 2025',
      category: 'sports',
      desc: 'Students competing in the 100m final athletics track event.',
    },
    {
      title: 'Chemistry Laboratory Session',
      category: 'classrooms',
      desc: 'High school students performing practical titration experiments.',
    },
    {
      title: 'Robotics & STEM Workshop',
      category: 'activities',
      desc: 'Building and coding customized autonomous arduino cars.',
    },
    {
      title: 'Annual Cultural Festival',
      category: 'events',
      desc: 'Classical and folk dance performances celebrating regional culture.',
    },
    {
      title: 'Smart Classroom Lecture',
      category: 'classrooms',
      desc: 'Interactive lectures with multimedia boards in class.',
    },
    {
      title: 'Inter-School Cricket Finals',
      category: 'sports',
      desc: 'School cricket team hoisting the championship tournament trophy.',
    },
  ];

  const filteredItems = filter === 'all' ? items : items.filter((i) => i.category === filter);

  return (
    <section id="gallery" className="py-20 bg-school-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-school-900 tracking-tight flex items-center justify-center gap-3">
            <Camera className="h-8 w-8 text-school-600" /> Photo Gallery
          </h2>
          <div className="h-1.5 w-20 bg-school-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-655 mt-4 text-lg">
            A glimpse into the daily life, achievements, and vibrant activities taking place in our school campus.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm capitalize transition-all duration-300 ${
                filter === cat
                  ? 'bg-school-600 text-white shadow-md shadow-school-600/20'
                  : 'bg-white text-gray-500 hover:text-school-700 hover:bg-school-100 border border-gray-150 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/3] flex flex-col justify-end"
            >
              {/* Background gradient placeholder representing the activity */}
              <div className="absolute inset-0 bg-gradient-to-tr from-school-950 via-school-800 to-school-700 opacity-90 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={schoolCampus}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
                />
              </div>

              {/* Decorative Camera/Image icon overlay in the center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none">
                <ImageIcon className="h-16 w-16 text-white" />
              </div>

              {/* Text Overlay */}
              <div className="relative z-10 p-6 bg-gradient-to-t from-school-950/90 via-school-950/50 to-transparent pt-20">
                <span className="text-[10px] uppercase font-bold tracking-widest text-school-300 block mb-1">
                  {item.category}
                </span>
                <h3 className="font-bold text-lg text-white group-hover:text-school-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
