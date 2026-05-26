import React, { useState } from 'react';
import { BookOpen, Calendar, Trophy, Compass, CheckCircle2 } from 'lucide-react';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('primary');

  const classesInfo = {
    primary: {
      title: 'Primary School (Grade I - V)',
      description: 'Our primary program focuses on building core cognitive, social, and motor skills. Through activity-based learning, we build curiosity and logical thinking.',
      subjects: ['English Language & Lit', 'Mathematics', 'Environmental Studies', 'Second Language (Hindi/Regional)', 'Art & Craft', 'Computer Literacy'],
      schedule: 'Mon - Fri, 8:00 AM - 1:30 PM',
    },
    middle: {
      title: 'Middle School (Grade VI - VIII)',
      description: 'Middle school introduces students to more advanced academic concepts and research-oriented projects. We emphasize independent study habits and collaborative work.',
      subjects: ['English & Literature', 'Mathematics (Algebra & Geometry)', 'Integrated Sciences (Phy, Chem, Bio)', 'Social Sciences (Hist, Civ, Geog)', 'Third Language Option', 'Computer Applications'],
      schedule: 'Mon - Sat (Alternative Sat), 8:00 AM - 2:00 PM',
    },
    secondary: {
      title: 'Secondary School (Grade IX - XII)',
      description: 'The senior years prepare students for board examinations and college entrance paths. We provide specialized tracks with state-of-the-art laboratory practice.',
      subjects: ['Science Track (Physics, Chemistry, Biology, Math/IP)', 'Commerce Track (Accountancy, Business Studies, Economics)', 'Humanities Track (History, Pol Science, Sociology)', 'Core English & Electives', 'Physical Education'],
      schedule: 'Mon - Sat, 8:00 AM - 2:30 PM',
    },
  };

  const activities = [
    { title: 'Sports & Athletics', desc: 'Football, Basketball, Cricket, Badminton, Track events, and Chess tournaments.' },
    { title: 'Creative Arts & Music', desc: 'Classical & Western music, Indian and contemporary dance, pottery, and painting.' },
    { title: 'STEM & Robotics Club', desc: 'Hands-on training in coding, basic electronics, and 3D printing/design projects.' },
    { title: 'Performing Arts & Debating', desc: 'Drama clubs, public speaking courses, inter-school model United Nations (MUN).' },
  ];

  return (
    <section id="academics" className="py-20 bg-school-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-school-900 tracking-tight">
            Academics
          </h2>
          <div className="h-1.5 w-20 bg-school-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-650 mt-4 text-lg">
            Empowering students with a rigorous, standard curriculum that encourages critical enquiry and holistic development.
          </p>
        </div>

        {/* Classes Offered - Interactive Tabs */}
        <div className="bg-white rounded-3xl shadow-xl border border-school-100 p-6 md:p-10 mb-16">
          <h3 className="text-2xl font-bold text-school-900 mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
            <BookOpen className="h-6 w-6 text-school-600" /> Classes & Programs Offered
          </h3>
          
          {/* Tab Headers */}
          <div className="flex flex-col sm:flex-row gap-2 border-b border-gray-100 pb-4 mb-8">
            {Object.keys(classesInfo).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-school-600 text-white shadow-md shadow-school-600/20'
                    : 'text-gray-500 hover:text-school-700 hover:bg-school-50'
                }`}
              >
                {tab === 'primary' && 'Primary School (I - V)'}
                {tab === 'middle' && 'Middle School (VI - VIII)'}
                {tab === 'secondary' && 'Secondary & Sr. Sec (IX - XII)'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-2xl font-bold text-school-800">
                {classesInfo[activeTab].title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-base">
                {classesInfo[activeTab].description}
              </p>
              
              <div className="pt-2">
                <span className="font-bold text-school-900 block mb-3">Key Subjects:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {classesInfo[activeTab].subjects.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-school-500 shrink-0" />
                      <span className="text-sm font-medium">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-school-50 rounded-2xl p-6 border border-school-100 h-fit space-y-6">
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-school-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-school-900">Academic Schedule</h5>
                  <p className="text-sm text-gray-600 mt-1">{classesInfo[activeTab].schedule}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Compass className="h-6 w-6 text-school-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-school-900">CBSE Curriculum Framework</h5>
                  <p className="text-sm text-gray-600 mt-1">Structured evaluations aligning with national curricular objectives, combining core academics and physical learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Curricular Activities */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-school-900">Beyond Academics: Co-Curricular</h3>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">We strive to unlock the unique passion and creativity of every student with a wide range of extracurricular clubs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-school-50 text-school-600 rounded-xl w-fit mb-4">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-lg text-school-900 mb-2">{act.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{act.desc}</p>
                </div>
                <div className="h-1.5 w-12 bg-school-200 mt-6 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
