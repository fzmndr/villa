import React from 'react';
import { motion } from 'framer-motion';
import ParallaxItem from "./ParallaxItem";

const Hero = () => {
  return (
    // Gunakan h-screen agar benar-benar memenuhi layar tanpa terpotong
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <ParallaxItem distance={150}>
          <img 
            // Pastikan file hero-villa.jpg ada di folder 'public'
            src="../public/villa1.jpg" 
            // h-[140%] memberikan ruang gerak lebih luas agar tidak ada gap putih/abu-abu
            className="w-full h-[140%] object-cover opacity-60" 
            alt="Luxury Villa Background" 
            onError={(e) => {
              // Fallback jika gambar lokal tidak terbaca
              e.target.src = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920";
            }}
          />
        </ParallaxItem>
        {/* Gradient Overlay untuk membantu keterbacaan teks */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-900/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            Luxury Stay
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.1]">
            Kemewahan Alam <br /> di Jantung Bali.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Rasakan pengalaman menginap tak terlupakan dengan pelayanan bintang lima dan privasi total di D'Keys Villa.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
              Booking Sekarang
            </button>
            <button className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold transition-all">
              Lihat Fasilitas
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;