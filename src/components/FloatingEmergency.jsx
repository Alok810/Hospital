import React from 'react';
import { PhoneCall } from 'lucide-react';

const FloatingEmergency = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a 
        href="tel:+1234567890" 
        className="flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 hover:scale-110 hover:shadow-xl transition-all duration-300 group relative"
      >
        <span className="absolute -inset-2 rounded-full border-2 border-red-500 animate-ping opacity-75"></span>
        <PhoneCall className="w-6 h-6 animate-pulse" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Emergency: 24/7 Ambulance
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 border-4 border-transparent border-l-slate-900"></div>
        </span>
      </a>
    </div>
  );
};

export default FloatingEmergency;
