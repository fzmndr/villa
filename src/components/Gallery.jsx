import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    title: "Main Lobby",
    size: "col-span-1 row-span-2",
    speed: -40
  },
  {
    url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
    title: "Master Bedroom",
    size: "col-span-1",
    speed: 20
  },
  {
    url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
    title: "Infinity Pool",
    size: "col-span-1",
    speed: 40
  },
  {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
    title: "Sunset Deck",
    size: "col-span-2",
    speed: -20
  }
];

// Komponen Pembungkus Paralaks untuk tiap gambar
const ParallaxImage = ({ src, alt, speed }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Pastikan tidak ada koma berlebih di dalam fungsi ini
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden relative">
      <motion.img 
        style={{ y, scale: 1.2 }}
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.6 }}
        src={src} 
        alt={alt}
        className="w-full h-[140%] object-cover cursor-pointer absolute top-[-20%]"
        loading="lazy" 
      />
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
            >
              Visual Experience
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-slate-900 mt-2"
            >
              Sudut Estetik Villa
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[2rem] group ${img.size}`}
            >
              <ParallaxImage src={img.url} alt={img.title} speed={img.speed} />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 pointer-events-none">
                <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;