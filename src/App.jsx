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
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
    <div className="min-h-screen bg-slate-50 font-sans">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <Amenities />
      <Gallery />
      <RoomSection />
      <AIAssistant />
      <WhatsAppFloating />
      <Footer />
    </div>
    </SmoothScroll>
  );
}

export default App;