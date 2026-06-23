import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'The care I received at Green Valley Medical Center was exceptional. The staff was incredibly attentive and made me feel at ease throughout my recovery.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Michael Chen',
    role: 'Patient Family',
    content: 'State-of-the-art facilities and a very compassionate medical team. Dr. Sharma took the time to explain every detail of the procedure to our family.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Emily Davis',
    role: 'Patient',
    content: 'Booking an appointment was seamless, and the pediatric department was wonderful with my children. Highly recommend their services.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-emerald-50/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-emerald-600 uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h3>
          <p className="text-slate-600 text-lg">
            Don't just take our word for it. Read the experiences of those who have trusted us with their health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-100 group-hover:text-emerald-200 transition-colors" />
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
