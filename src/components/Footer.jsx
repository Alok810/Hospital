import React from 'react';
import { HeartPulse, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white leading-tight">Green Valley Medical Center</h1>
                <p className="text-xs text-slate-400 font-medium">In Service of Humanity</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Committed to providing accessible, ethical, and compassionate healthcare to our community with state-of-the-art facilities.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#doctors" className="text-slate-400 hover:text-emerald-400 transition-colors">Our Doctors</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Emergency Info</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Wellness & Check-ups</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Heart & Vascular Care</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Diagnostics</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Women's Health</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Pediatrics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">123 Healthway Drive, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-400">contact<br/>@greenvalley.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2026 Green Valley Medical Center. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
