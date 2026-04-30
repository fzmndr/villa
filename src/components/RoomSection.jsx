import React from 'react';
import { motion } from 'framer-motion';
import { VILLA_DATA } from '../constants'; 
import RoomCard from './RoomCard';

const RoomSection = () => {
  return (
    <section id="rooms" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }} // Optimasi performa scroll
              className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
            >
              Accommodations
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} // Optimasi performa scroll
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-2"
            >
              Pilih Ruang Istirahat <br /> Terbaik Anda
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 mt-6 md:mt-0 max-w-xs"
          >
            Setiap unit dirancang khusus untuk memberikan privasi maksimal dan kenyamanan tingkat tinggi.
          </motion.p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {VILLA_DATA.map((room, index) => (
            <RoomCard key={room.id} {...room} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default RoomSection;