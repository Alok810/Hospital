import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-slate-200 py-2 text-sm hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>Open 24 Hours (Mon-Sun) – Emergency Services Available</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>22 A, Sector 12, Garden Colony, Kharar 140301</span>
          </div>
          <div className="flex items-center space-x-2 font-medium">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>+91 98551 21155</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
