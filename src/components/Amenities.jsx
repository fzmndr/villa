import { motion } from 'framer-motion';

const amenities = [
  { icon: "fa-swimming-pool", title: "Private Pool", desc: "Kolam renang pribadi dengan air hangat dan pemandangan lembah." },
  { icon: "fa-wifi", title: "High-Speed WiFi", desc: "Koneksi internet cepat hingga 100Mbps di seluruh area villa." },
  { icon: "fa-utensils", title: "Modern Kitchen", desc: "Peralatan memasak lengkap dengan oven dan mini bar." },
  { icon: "fa-parking", title: "Free Parking", desc: "Area parkir luas dan aman untuk kendaraan pribadi Anda." },
  { icon: "fa-snowflake", title: "Full AC", desc: "Pendingin ruangan di setiap kamar untuk kenyamanan maksimal." },
  { icon: "fa-tv", title: "Smart TV", desc: "Akses Netflix, YouTube, dan saluran internasional di ruang tamu." }
];

const Amenities = () => {
  return (
    // Penambahan scroll-mt-24 agar tidak tertutup navbar saat di-scroll
    <section id="amenities" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mt-2"
          >
            Fasilitas Eksklusif
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <i className={`fa-solid ${item.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;