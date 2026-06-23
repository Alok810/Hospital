import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Facilities from './components/Facilities';
import FAQ from './components/FAQ';
import Insurance from './components/Insurance';
import FloatingEmergency from './components/FloatingEmergency';
import AppointmentModal from './components/AppointmentModal';
import BottomNav from './components/BottomNav';
import { useMediaQuery } from './hooks/useMediaQuery';
import { HeartPulse } from 'lucide-react';

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const openModal = () => setIsAppointmentModalOpen(true);
  const closeModal = () => setIsAppointmentModalOpen(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeTab, isMobile]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth pb-[72px] md:pb-0">
      
      {/* Mobile Top Header */}
      {isMobile && (
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 py-3 flex justify-between items-center shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-1.5 rounded-md">
              <HeartPulse className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-800 leading-tight">Green Valley</h1>
            </div>
          </div>
          <button onClick={openModal} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 text-sm rounded-lg font-medium shadow-sm transition-all">
            Book
          </button>
        </div>
      )}

      <Navbar onBookAppointment={openModal} />
      
      <main>
        {(!isMobile || activeTab === 'home') && (
          <>
            <Hero onBookAppointment={openModal} />
            <Facilities />
            <Testimonials />
            <Insurance />
            <FAQ />
            {isMobile && <About />}
          </>
        )}
        
        {(!isMobile || activeTab === 'services') && <Services />}
        {(!isMobile || activeTab === 'doctors') && <Doctors />}
        {(!isMobile || activeTab === 'contact') && <Contact />}
        
        {/* On desktop, About is placed here. On mobile, it's grouped under Home */}
        {!isMobile && <About />}
        
      </main>
      
      <Footer />
      
      <FloatingEmergency />
      <AppointmentModal isOpen={isAppointmentModalOpen} onClose={closeModal} />
      
      {isMobile && <BottomNav active={activeTab} onChange={setActiveTab} />}
    </div>
  );
}

export default App;
