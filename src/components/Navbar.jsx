import React, { useState } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';

const Navbar = ({ onBookAppointment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Emergency', href: '#contact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="hidden md:block bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-tight">Green Valley Medical Center</h1>
              <p className="text-xs text-slate-500 font-medium">In Service of Humanity</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button onClick={onBookAppointment} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              Book Visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-emerald-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button onClick={() => { setIsOpen(false); onBookAppointment(); }} className="w-full mt-4 bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium shadow-sm active:bg-emerald-700">
            Book Visit
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
