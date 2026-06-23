import React from 'react';
import { MapPin, Mail, Phone, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-emerald-600 uppercase mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Contact & Appointments</h3>
          <p className="text-lg text-slate-600">
            We're here to help. Reach out to us for appointments, emergencies, or any medical inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Contact Information (Left Side) */}
          <div className="lg:col-span-2 bg-slate-900 text-white p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-600 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-teal-500 opacity-20 blur-3xl"></div>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-8">Contact Information</h4>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-slate-200 mb-1">Our Location</h5>
                    <p className="text-slate-400 leading-relaxed">123 Healthway Drive,<br/>Medical District, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-slate-200 mb-1">Phone Number</h5>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-slate-200 mb-1">WhatsApp</h5>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-slate-200 mb-1">Email Address</h5>
                    <p className="text-slate-400">contact@greenvalley.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-slate-200 mb-1">Working Hours</h5>
                    <p className="text-slate-400">Open 24 Hours (Mon-Sun)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form (Right Side) */}
          <div className="lg:col-span-3 p-10">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Book an Appointment</h4>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-slate-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-slate-50 focus:bg-white"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-slate-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-slate-50 focus:bg-white text-slate-700"
                  >
                    <option>General Inquiry</option>
                    <option>Book Appointment</option>
                    <option>Emergency Contact</option>
                    <option>Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-slate-50 focus:bg-white resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
