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
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // 1. HAPUS ATAU KOMENTAR SmoothScroll
    // <SmoothScroll> 
      
      <> {/* Gunakan Fragment sebagai pengganti pembungkus */}
        
        {/* 2. HAPUS ATAU KOMENTAR FITUR INI */}
        {/* <CustomCursor /> */}
        {/* <ScrollProgress /> */}
        
        <AnimatePresence>
          {isLoading && <LoadingScreen key="loading" />}
        </AnimatePresence>

        <div className="min-h-screen bg-slate-50 font-sans">
          <Navbar />
          <Hero />
          <Amenities />
          <Gallery />
          <RoomSection />
          <AIAssistant />
          <Footer />
          <WhatsAppFloating />
        </div>

      </> 

    // </SmoothScroll> 
  );
}

export default App;