import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import RoomSection from './components/RoomSection';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import SmoothScroll from './components/SmoothScroll';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Pastikan loading screen muncul minimal 2 detik untuk transisi yang halus
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      {/* Jika masih blank, coba matikan CustomCursor & ScrollProgress sementara untuk testing */}
      <CustomCursor /> 
      <ScrollProgress />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Gunakan wrapper utama agar struktur HTML lebih semantik */}
      <main className="min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <Hero />
        <Amenities />
        <Gallery />
        <RoomSection />
        <AIAssistant />
        <Footer />
        <WhatsAppFloating />
      </main>
    </SmoothScroll>
  );
}

export default App;