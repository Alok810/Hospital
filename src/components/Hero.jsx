import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = ({ onBookAppointment }) => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50/80 via-slate-50 to-teal-50/80 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-100 opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 pt-10 pb-20 lg:pt-12 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full font-medium text-sm mb-4 border border-emerald-100">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600"></span>
              <span>Accepting New Patients</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Welcome to <span className="text-emerald-600">Green Valley Medical Center</span>.
              <br className="hidden md:block" /> The cornerstone of healthier communities in New York.
            </h1>

            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
              Emergency care, surgery, women and children's health, and diagnostics — delivered with modern facilities and a team that puts patients first.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button onClick={onBookAppointment} className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                <Calendar className="w-5 h-5" />
                <span>Book Visit</span>
              </button>

              <button className="flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                <span>Explore our services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="/hero_hospital.png"
                alt="Modern Hospital Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Emergency Services</p>
                  <p className="text-slate-900 font-bold">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
