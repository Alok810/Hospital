import React, { useState } from 'react';
import { X, Calendar, User, Phone, FileText } from 'lucide-react';

const AppointmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-emerald-50/50">
          <h2 className="text-2xl font-bold text-slate-800">Book Appointment</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" required className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="John Doe" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="tel" required className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="date" required className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white appearance-none">
                  <option value="">Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="general">General Medicine</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-100 flex justify-end space-x-3">
            <button 
              type="button" 
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-5 py-2.5 rounded-xl font-medium text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
