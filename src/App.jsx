import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import RoomSection from './components/RoomSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
// Aktifkan dua komponen interaktif ini
import AIAssistant from './components/AIAssistant';
import WhatsAppFloating from './components/WhatsAppFloating';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <Amenities />
      <Gallery />
      <RoomSection />
      
      {/* TEST FINAL: Aktifkan AIAssistant dan WhatsAppFloating */}
      <AIAssistant />
      <WhatsAppFloating />

      <Footer />
    </div>
  );
}

export default App;