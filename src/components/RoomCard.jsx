import { motion } from 'framer-motion';

const RoomCard = ({ name, price, category, image, features, index }) => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const handleBooking = () => {
    const message = `Halo Lumina Villa, saya tertarik untuk booking: ${name}.\nBisa info ketersediaan?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-[350px] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-md text-emerald-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{name}</h3>
            <div className="flex gap-4">
              {features.map((feature, i) => (
                <span key={i} className="text-xs text-slate-400 flex items-center gap-1">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-50">
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Mulai dari</p>
            <p className="text-2xl font-bold text-emerald-700">Rp {price}<span className="text-sm text-slate-400 font-normal">/malam</span></p>
          </div>
          <button 
            onClick={handleBooking}
            className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-emerald-600 transition-colors duration-300"
          >
            Pesan
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;