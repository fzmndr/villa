import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // Penambahan id="home" untuk navigasi
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Luxury Stay</span>
            <h1 className="text-6xl font-bold leading-tight mt-4 mb-6">
              Kemewahan Alam <br /> di Jantung Bali.
            </h1>
            <p className="text-slate-600 text-lg mb-8 max-w-md">
              Rasakan pengalaman menginap yang tak terlupakan dengan pelayanan bintang lima dan privasi total.
            </p>
            <div className="flex gap-4">
              {/* Diubah menjadi anchor tag ke #rooms */}
              <a href="#rooms" className="bg-emerald-900 text-white px-8 py-4 rounded-full font-bold transition hover:bg-emerald-800">
                Booking Sekarang
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200" 
              alt="Villa Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default Hero;