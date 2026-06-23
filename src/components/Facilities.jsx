import React from 'react';
import { Building2, HeartPulse, Stethoscope, Microscope } from 'lucide-react';

const facilities = [
  {
    title: 'Advanced ICU',
    description: 'Equipped with state-of-the-art monitoring systems and 24/7 intensivist care.',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Modern Operation Theaters',
    description: 'Modular OTs with laminar airflow and advanced surgical equipment.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: '24/7 Laboratory',
    description: 'Fully automated diagnostic lab for quick and accurate test results.',
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Comfortable Patient Rooms',
    description: 'Private, semi-private, and general wards designed for patient comfort.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

const Facilities = () => {
  return (
    <section className="py-20 bg-white" id="facilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-emerald-600 uppercase mb-3">Our Facilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">World-Class Healthcare Infrastructure</h3>
          <p className="text-slate-600 text-lg">
            We provide top-tier facilities ensuring our patients receive the best possible care in a comfortable environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden relative shadow-md">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="p-2 bg-emerald-500/20 backdrop-blur-sm rounded-lg text-emerald-300">
                    <facility.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{facility.title}</h4>
                </div>
                <p className="text-slate-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
