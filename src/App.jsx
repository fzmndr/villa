import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <div className="flex items-center justify-center h-40">
        <h1 className="text-xl font-bold text-emerald-600">
          Koneksi Berhasil: Website Villa fzmndr Sudah Live!
        </h1>
      </div>
    </div>
  );
}

export default App;