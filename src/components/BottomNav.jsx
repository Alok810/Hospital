import React from 'react';
import { Home, Activity, Users, PhoneCall } from 'lucide-react';

const TABS = [
  { key: 'home', label: 'Home', Icon: Home },
  { key: 'services', label: 'Services', Icon: Activity },
  { key: 'doctors', label: 'Doctors', Icon: Users },
  { key: 'contact', label: 'Contact', Icon: PhoneCall }
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="md:hidden fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-slate-200 bg-white/95 px-2 pb-safe pt-2 backdrop-blur-md shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {TABS.map(({ key, label, Icon }) => {
        const on = active === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className="flex flex-col items-center gap-1 pb-2 px-3 w-16 focus:outline-none"
          >
            <div className={`p-1.5 rounded-full transition-colors ${on ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <Icon className="w-6 h-6" />
            </div>
            <span
              className={`text-[10px] uppercase tracking-wide transition-colors ${
                on ? 'font-bold text-emerald-700' : 'font-medium text-slate-500'
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
