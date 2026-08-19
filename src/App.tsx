/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-[#633F83] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/logohead.png" 
              alt="Dhondhooni Logo" 
              className="h-16 w-auto object-contain bg-white rounded-full p-1" 
            />
            <h1 className="text-2xl font-bold tracking-wide">Dhondhooni Preschool</h1>
          </div>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex space-x-6 text-sm font-medium">
              <li><a href="#about" className="hover:text-purple-200 transition-colors">About Us</a></li>
              <li><a href="#apply" className="hover:text-purple-200 transition-colors">Admissions</a></li>
              <li><a href="#jobs" className="hover:text-purple-200 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-purple-200 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#633F83] mb-6">
            Building Bright Futures
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Where every child's journey of growth begins! Join us in fostering creativity, curiosity, and confidence in a nurturing environment.
          </p>
        </section>

        {/* Applications Section */}
        <section id="apply" className="bg-white py-16 border-y border-slate-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Admissions & Opportunities</h2>
              <p className="text-slate-500 mt-2">Select the appropriate form below to apply</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* 2027 Admissions */}
              <div className="flex flex-col items-center p-8 bg-purple-50 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <div className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  UPCOMING
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Admission for 2027</h3>
                <p className="text-sm text-center text-purple-700 mb-6">
                  To enroll your child for the academic year starting January 2027.<br />
                  <span className="font-serif mt-1 block">ޖަނަވަރީ 2027 ގައި ފެށޭ ތައުލީމީ އަހަރު ސްކޫލަށް ވެއްދުމަށް</span>
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 hover:opacity-90 transition-all duration-300">
                  <img src="/school_apply_button.png" alt="Apply for 2027" className="max-w-[250px] w-full drop-shadow-md rounded-xl" />
                </a>
              </div>

              {/* 2026 Admissions (Ongoing) */}
              <div className="flex flex-col items-center p-8 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <div className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ONGOING
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Admission for 2026</h3>
                <p className="text-sm text-center text-emerald-700 mb-6">
                  To enroll your child for the ongoing 2026 academic year.<br />
                  <span className="font-serif mt-1 block">2026 ވަނަ އަހަރުގެ ތައުލީމީ އަހަރަށް ވެއްދުމަށް</span>
                </p>
                {/* Note: Update the href with the actual 2026 Google Form link */}
                <a href="https://forms.gle/uNCui3QRdUectmQ46" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 hover:opacity-90 transition-all duration-300">
                  <img src="/school_apply_button2026.png" alt="Apply for 2026" className="max-w-[250px] w-full drop-shadow-md rounded-xl" />
                </a>
              </div>

              {/* Job Opportunities */}
              <div id="jobs" className="flex flex-col items-center p-8 bg-blue-50 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow md:col-span-2 max-w-2xl mx-auto w-full">
                <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  WE'RE HIRING
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Job Opportunities</h3>
                <p className="text-sm text-center text-blue-700 mb-6">
                  If you are looking for a job, use the following link to apply.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7CDo-vg8PA8khWt8bhQDNeUJUN0VwHFRO7rLij0-dxtDh-g/viewform" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 hover:opacity-90 transition-all duration-300">
                  <img src="/job_apply_button.png" alt="Apply for Job" className="max-w-[250px] w-full drop-shadow-md rounded-xl" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#333333] text-slate-300 py-12 border-t-4 border-[#633F83]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-purple-400 shrink-0 mt-0.5" />
                <span>Dhondhooni Little Learners Preschool<br />Ma. Shaheen, Buruzu Magu<br />Male' 20168, Maldives</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-purple-400 shrink-0" />
                <span>+960 3330669, +960 7960669</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-purple-400 shrink-0" />
                <a href="mailto:mail@dhondhooni.edu.mv" className="hover:text-white transition-colors">mail@dhondhooni.edu.mv</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <h3 className="text-white text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4 md:text-right max-w-sm">Follow us on social media for updates, insights, and exciting moments.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/DhondhooniPreschool" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#633F83] text-white rounded-full hover:bg-[#800080] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dhondhoonipreschool/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#633F83] text-white rounded-full hover:bg-[#800080] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#633F83] text-white rounded-full hover:bg-[#800080] transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          &copy; {new Date().getFullYear()} Dhondhooni Preschool. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
