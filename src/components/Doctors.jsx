import React from 'react';

const doctors = [
  {
    name: 'Dr. Sunil Sharma',
    specialty: 'Neonatology, Pediatrics',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dr. Neera Verma',
    specialty: 'OBS / Gynecology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-emerald-600 uppercase mb-3">Medical Team</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Experts</h3>
          <p className="text-lg text-slate-600">
            Meet our dedicated team of experienced specialists committed to providing you with the highest standard of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 text-center relative bg-white">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{doctor.name}</h4>
                <p className="text-emerald-600 font-medium">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
