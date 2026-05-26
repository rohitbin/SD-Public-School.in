import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import principalImage from '../assets/principal.jpg';
import vicePrincipalImage from '../assets/vice_principal.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-school-900 tracking-tight">
            About Our School
          </h2>
          <div className="h-1.5 w-20 bg-school-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Nurturing excellence and integrity since 2005. SD Public School is dedicated to fostering a rich learning environment that guides students toward successful lives.
          </p>
        </div>

        {/* Intro and Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20">
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-school-800">
              Shaping Future Leaders and Innovators
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At SD Public School, we believe that education extends far beyond textbooks. Our holistic curriculum is designed to stimulate critical thinking, ignite creativity, and instil moral values. We prepare students to navigate the complexities of a changing world with confidence and poise.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With top-tier infrastructure, experienced educators, and a vibrant community, we are committed to providing the resources and environment necessary for every student to unlock their full potential.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-school-50 rounded-xl border border-school-100">
              <Award className="h-10 w-10 text-school-600 shrink-0" />
              <div>
                <h4 className="font-semibold text-school-900">Affiliated & Accredited</h4>
                <p className="text-sm text-gray-600">Registered board curriculum with a track record of 100% academic excellence.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Mission Card */}
            <div className="p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 flex gap-4">
              <div className="p-3 bg-school-100 text-school-600 rounded-xl h-fit">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-school-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To deliver premium holistic education that inspires students to achieve academic excellence, emotional intelligence, and physical fitness, enabling them to become responsible global citizens.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 flex gap-4">
              <div className="p-3 bg-school-100 text-school-600 rounded-xl h-fit">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-school-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be a leading center of educational excellence, recognized for nurturing inquisitive minds, cultivating ethical leadership, and preparing students to make positive contributions to society.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="bg-school-50 rounded-3xl p-8 md:p-12 border border-school-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Principal's Image */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-school-600 to-school-300 rounded-2xl blur opacity-35 group-hover:opacity-60 transition duration-300"></div>
                <img
                  src={principalImage}
                  alt="Principal portrait"
                  className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h4 className="font-bold text-xl text-school-950 mt-4 mb-1 text-center">Mr. Neeraj Yadav</h4>
              <p className="text-sm font-semibold text-school-600 uppercase tracking-wider text-center">Principal, SD Public School</p>
            </div>

            {/* Principal's Message text */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-school-900 border-b border-school-200 pb-3">
                Principal's Message
              </h3>
              <blockquote className="text-gray-700 italic leading-relaxed text-lg relative pl-6 border-l-4 border-school-500">
                "Welcome to SD Public School. We believe that every child is unique and possesses immense potential. Our goal is to provide a stimulating learning environment that encourages curiosity, critical thinking, and a lifelong love of learning. We partner closely with parents to ensure that our students are well-prepared to step out into the world as confident, compassionate individuals ready to contribute to a brighter tomorrow."
              </blockquote>
              <p className="text-gray-650 leading-relaxed">
                Our faculty members work tirelessly to create a space that balance academic rigor with emotional wellness, ensuring that the school is a safe harbor for students to test boundaries, learn from failures, and celebrate victories. We invite you to explore our campus, talk to our staff, and experience the warmth of the SD Public School family first-hand.
              </p>
              <div className="pt-2">
                <span className="font-semibold text-school-900 block text-lg">Warm Regards,</span>
                <span className="font-serif text-2xl text-school-600 block mt-1 tracking-wider">Mr. Neeraj Yadav</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vice Principal's Message */}
        <div className="bg-school-50 rounded-3xl p-8 md:p-12 border border-school-100 shadow-sm mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Vice Principal's Image */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-school-600 to-school-300 rounded-2xl blur opacity-35 group-hover:opacity-60 transition duration-300"></div>
                <img
                  src={vicePrincipalImage}
                  alt="Vice Principal portrait"
                  className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h4 className="font-bold text-xl text-school-950 mt-4 mb-1 text-center">Mrs. Shalini Singh</h4>
              <p className="text-sm font-semibold text-school-600 uppercase tracking-wider text-center">Vice Principal, SD Public School</p>
            </div>

            {/* Vice Principal's Message text */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-school-900 border-b border-school-200 pb-3">
                Vice Principal's Message
              </h3>
              <blockquote className="text-gray-700 italic leading-relaxed text-lg relative pl-6 border-l-4 border-school-500">
                "Education is the progressive discovery of our own ignorance. At SD Public School, our endeavor is to provide a platform that enables students to pursue their passions, develop self-discipline, and appreciate diversity. We aim to build critical thinkers who ask questions, investigate answers, and contribute positively to our global community."
              </blockquote>
              <p className="text-gray-650 leading-relaxed">
                Through strong collaborative partnerships between our educators, support staff, and parents, we maintain an atmosphere of continuous improvement. We ensure that our co-curricular workshops, STEM activities, and sports matches go hand in hand with core academic lessons to shape well-rounded personalities.
              </p>
              <div className="pt-2">
                <span className="font-semibold text-school-900 block text-lg">Warm Regards,</span>
                <span className="font-serif text-2xl text-school-600 block mt-1 tracking-wider">Mrs. Shalini Singh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
