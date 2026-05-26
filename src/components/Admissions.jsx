import React, { useState } from 'react';
import { Send, FileText, CheckSquare, Sparkles } from 'lucide-react';

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    classApplying: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const classesOptions = [
    'Class I',
    'Class II',
    'Class III',
    'Class IV',
    'Class V',
    'Class VI',
    'Class VII',
    'Class VIII',
    'Class IX',
    'Class X',
    'Class XI (Science)',
    'Class XI (Commerce)',
    'Class XI (Humanities)',
    'Class XII (Science)',
    'Class XII (Commerce)',
    'Class XII (Humanities)',
  ];

  const validate = () => {
    const tempErrors = {};
    if (!formData.studentName.trim()) tempErrors.studentName = 'Student name is required';
    if (!formData.parentName.trim()) tempErrors.parentName = 'Parent or guardian name is required';
    if (!formData.classApplying) tempErrors.classApplying = 'Please select a class';
    
    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      tempErrors.email = 'Please enter a valid email address';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Live validation clean-up
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Build structured message for WhatsApp redirection
      const whatsappNumber = '919415590278';
      const textMessage = `*SD PUBLIC SCHOOL - ADMISSION ENQUIRY*

*Student Name:* ${formData.studentName}
*Parent Name:* ${formData.parentName}
*Class Applying For:* ${formData.classApplying}
*Phone Number:* ${formData.phone}
*Email:* ${formData.email}
*Message:* ${formData.message.trim() || 'N/A'}`;

      const encodedMessage = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      // Clear form
      setFormData({
        studentName: '',
        parentName: '',
        classApplying: '',
        phone: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-school-900 tracking-tight">
            Admission & Enquiries
          </h2>
          <div className="h-1.5 w-20 bg-school-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-655 mt-4 text-lg">
            Plan your child's future today. Register your enquiry and our admissions counselor will get in touch with you shortly.
          </p>
        </div>

        {/* Admissions Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Guidelines and Documents checklist */}
          <div className="space-y-8">
            <div className="p-6 bg-school-50 border border-school-100 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-school-950 flex items-center gap-2">
                <Sparkles className="h-5.5 w-5.5 text-school-600" /> Admissions Guidelines
              </h3>
              
              <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckSquare className="h-5 w-5 text-school-600 shrink-0 mt-0.5" />
                  <span><strong>Eligibility Age:</strong> Children applying for Class I must be 6 years of age as of March 31st of the academic year.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckSquare className="h-5 w-5 text-school-600 shrink-0 mt-0.5" />
                  <span><strong>Interactive Session:</strong> Short friendly assessments are scheduled for classes II to VIII to evaluate basic foundations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckSquare className="h-5 w-5 text-school-600 shrink-0 mt-0.5" />
                  <span><strong>Board Track:</strong> High school admission is subject to previous report card validation and stream availability.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white border border-gray-100 shadow-md rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-school-950 flex items-center gap-2">
                <FileText className="h-5.5 w-5.5 text-school-600" /> Documents Required at Admission
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-school-500 rounded-full"></span>
                  <span>Birth Certificate (Official)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-school-500 rounded-full"></span>
                  <span>Previous Report Cards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-school-500 rounded-full"></span>
                  <span>Transfer Certificate (TC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-school-500 rounded-full"></span>
                  <span>3 Passport Size Photographs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-school-500 rounded-full"></span>
                  <span>Character Certificate (Board)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-school-500 rounded-full"></span>
                  <span>Address Proof (Aadhar/Passport)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {submitted ? (
              <div className="py-16 px-4 text-center space-y-4 animate-scale-in">
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-school-950">Enquiry Form Submitted!</h3>
                <p className="text-gray-600 text-sm max-w-sm mx-auto">
                  Thank you for your interest in SD Public School. Our admissions advisor will call you or reply via email within 24 to 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-bold text-school-600 hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-school-950 mb-2">Enquiry Registration</h3>
                
                {/* Student Name */}
                <div>
                  <label htmlFor="studentName" className="block text-xs font-semibold text-gray-500 uppercase mb-1">Student Name *</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                      errors.studentName ? 'border-red-300 focus:border-red-500' : 'border-gray-250 focus:border-school-500 focus:ring-2 focus:ring-school-100'
                    }`}
                    placeholder="Enter student's full name"
                  />
                  {errors.studentName && <p className="text-xs text-red-500 mt-1">{errors.studentName}</p>}
                </div>

                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className="block text-xs font-semibold text-gray-500 uppercase mb-1">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                      errors.parentName ? 'border-red-300 focus:border-red-500' : 'border-gray-250 focus:border-school-500 focus:ring-2 focus:ring-school-100'
                    }`}
                    placeholder="Enter parent's full name"
                  />
                  {errors.parentName && <p className="text-xs text-red-500 mt-1">{errors.parentName}</p>}
                </div>

                {/* Class Applying For */}
                <div>
                  <label htmlFor="classApplying" className="block text-xs font-semibold text-gray-500 uppercase mb-1">Class Applying For *</label>
                  <select
                    id="classApplying"
                    name="classApplying"
                    value={formData.classApplying}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none bg-white transition-all ${
                      errors.classApplying ? 'border-red-300 focus:border-red-500' : 'border-gray-250 focus:border-school-500 focus:ring-2 focus:ring-school-100'
                    }`}
                  >
                    <option value="">Select Target Class</option>
                    {classesOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.classApplying && <p className="text-xs text-red-500 mt-1">{errors.classApplying}</p>}
                </div>

                {/* Grid Phone and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                        errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-250 focus:border-school-500 focus:ring-2 focus:ring-school-100'
                      }`}
                      placeholder="10-digit number"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                        errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-250 focus:border-school-500 focus:ring-2 focus:ring-school-100'
                      }`}
                      placeholder="parent@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase mb-1">Message / Enquiries</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-250 focus:border-school-500 focus:ring-2 focus:ring-school-100 outline-none transition-all resize-none"
                    placeholder="Any specific queries or details to share..."
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 bg-school-600 hover:bg-school-700 text-white font-semibold rounded-xl shadow-md shadow-school-600/10 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-4.5 w-4.5" /> Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
