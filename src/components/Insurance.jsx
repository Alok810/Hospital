import React from 'react';
import { ShieldCheck } from 'lucide-react';

const partners = [
  "Star Health", "HDFC ERGO", "ICICI Lombard", "Care Health",
  "Niva Bupa", "Aditya Birla", "Bajaj Allianz", "National Insurance"
];

const Insurance = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <ShieldCheck className="w-8 h-8 text-emerald-600" />
          <h3 className="text-2xl font-bold text-slate-900">Empaneled Insurance Partners</h3>
        </div>
        
        <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
          We offer cashless treatment facilities. We are partnered with all major health insurance providers and TPAs to ensure a hassle-free admission process.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm text-slate-700 font-medium flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;
