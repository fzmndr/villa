import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Footer from './components/Footer';
// Nyalakan impor dua komponen ini
import Gallery from './components/Gallery';
import RoomSection from './components/RoomSection';
// Simpan dulu yang ini
import AIAssistant from './components/AIAssistant';
import WhatsAppFloating from './components/WhatsAppFloating';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <Hero />
      <Amenities />
      
      {/* TEST TAHAP 2: Nyalakan Gallery dan RoomSection */}
      <Gallery />
      <RoomSection />

      <Footer />

      {/* Tetap matikan ini dulu untuk memastikan Gallery & RoomSection aman */}
      {/* <AIAssistant /> */}
      {/* <WhatsAppFloating /> */}
    </div>
  );
}

export default App;