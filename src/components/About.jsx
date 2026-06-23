import React from 'react';
import { CheckCircle2, ShieldCheck, Users, Clock } from 'lucide-react';

const About = () => {
  const benefits = [
    { title: 'Quality-focused processes', description: 'Strict adherence to international medical protocols.', icon: ShieldCheck },
    { title: 'Full-spectrum departments', description: 'Comprehensive care under one roof.', icon: Users },
    { title: 'Specialist network', description: 'Access to top-tier medical professionals.', icon: CheckCircle2 },
    { title: 'Personalized plans', description: 'Treatment tailored to your specific health needs.', icon: Clock },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Mission & Stats */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-emerald-600 uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Committed to excellent healthcare in Punjab.
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is to provide accessible, ethical, and compassionate care to our community. We envision a future where world-class medical facilities are available to everyone, driven by innovation and a steadfast commitment to patient well-being.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 rounded-full bg-emerald-50 group-hover:scale-150 transition-transform duration-500 ease-in-out"></div>
                <div className="relative z-10">
                  <h4 className="text-4xl font-extrabold text-emerald-600 mb-2">50K+</h4>
                  <p className="text-slate-600 font-medium">Patients Served</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 rounded-full bg-teal-50 group-hover:scale-150 transition-transform duration-500 ease-in-out"></div>
                <div className="relative z-10">
                  <h4 className="text-4xl font-extrabold text-teal-600 mb-2">16+</h4>
                  <p className="text-slate-600 font-medium">Years Serving Kharar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Benefits list */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Why Choose Us</h4>
            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 mb-1">{benefit.title}</h5>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
