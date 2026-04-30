import React from 'react';
import { motion } from 'framer-motion';
import ParallaxItem from "./ParallaxItem";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Background Container - Gambar dikembalikan seperti semula */}
      <div className="absolute inset-0 z-0">
        <ParallaxItem distance={100}>
          <img 
            src="../public/villa1.jpg" 
            className="w-full h-[120%] object-cover" 
            alt="Luxury Villa Background" 
          />
        </ParallaxItem>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Teks Kecil di Atas */}
          <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            Luxury Stay
          </span>

          {/* Judul Utama yang Bisa Diklik */}
          <a href="#rooms" className="block group cursor-pointer">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] group-hover:text-emerald-50 transition-colors"
            >
              Kemewahan Alam <br /> di Jantung Bali.
            </motion.h1>
          </a>

          {/* Deskripsi yang Bisa Diklik */}
          <a href="#gallery" className="block cursor-pointer">
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed hover:text-white transition-colors"
            >
              Rasakan pengalaman menginap tak terlupakan dengan pelayanan bintang lima dan privasi total di D'Keys Villa.
            </motion.p>
          </a>

          {/* Tombol-tombol dengan link navigasi */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
            <a 
              href="#rooms"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl cursor-pointer"
            >
              Booking Sekarang
            </a>
            <a 
              href="#amenities"
              className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold transition-all cursor-pointer"
            >
              Lihat Fasilitas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;