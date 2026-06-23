import React from 'react';
import { HeartPulse, Activity, Stethoscope, Baby } from 'lucide-react';

const services = [
  {
    title: 'Annual wellness & check-ups',
    description: 'Structured health reviews and follow-ups to keep you on track.',
    icon: Stethoscope,
    color: 'bg-emerald-50 text-emerald-600',
    hover: 'group-hover:bg-emerald-600 group-hover:text-white',
  },
  {
    title: 'Heart & vascular care',
    description: 'Comprehensive evaluation and treatment for blood pressure and circulation.',
    icon: HeartPulse,
    color: 'bg-rose-50 text-rose-600',
    hover: 'group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    title: 'Diagnostics & screening',
    description: 'Advanced imaging and lab pathways to catch potential problems early.',
    icon: Activity,
    color: 'bg-teal-50 text-teal-600',
    hover: 'group-hover:bg-teal-600 group-hover:text-white',
  },
  {
    title: "Women's & family health",
    description: 'Dedicated gynecology, maternity, and comprehensive child health services.',
    icon: Baby,
    color: 'bg-purple-50 text-purple-600',
    hover: 'group-hover:bg-purple-600 group-hover:text-white',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-emerald-600 uppercase mb-3">Our Departments</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Care that fits your life</h3>
          <p className="text-lg text-slate-600">
            We provide a comprehensive range of medical services with state-of-the-art facilities to ensure you receive the best possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${service.color} ${service.hover}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
