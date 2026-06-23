import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What are the visiting hours for patients?',
    answer: 'General visiting hours are from 10:00 AM to 1:00 PM and 4:00 PM to 7:00 PM daily. ICU visiting hours are restricted to 11:00 AM - 12:00 PM and 5:00 PM - 6:00 PM (only immediate family members).'
  },
  {
    question: 'How do I book an appointment with a specialist?',
    answer: 'You can book an appointment online through our website by clicking the "Book Appointment" button, or you can call our reception desk at +1 (555) 000-0000. Walk-in appointments are subject to availability.'
  },
  {
    question: 'Do you accept health insurance?',
    answer: 'Yes, we are empaneled with all major health insurance providers and TPA networks. Please check our Insurance section or contact our billing desk for specific details regarding your policy.'
  },
  {
    question: 'What documents should I bring for admission?',
    answer: 'Please bring a valid photo ID, your insurance card/TPA pre-authorization letter (if applicable), previous medical records, and the doctor\'s admission recommendation slip.'
  },
  {
    question: 'Is there a pharmacy inside the hospital?',
    answer: 'Yes, we have a 24/7 in-house pharmacy located on the ground floor to provide prescribed medicines and essential medical supplies immediately.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider text-emerald-600 uppercase mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-slate-600 text-lg">
            Find answers to common questions about our services, admissions, and more.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'border-emerald-200 shadow-md' : 'border-slate-200 hover:border-emerald-100'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className={`font-semibold text-lg ${openIndex === idx ? 'text-emerald-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
