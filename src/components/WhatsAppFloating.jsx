import { motion } from 'framer-motion';

const WhatsAppFloating = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER = 6281319988676 ;
  
  const handleChat = () => {
    const message = "Halo Lumina Villa, saya ingin menanyakan ketersediaan kamar untuk bulan depan.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleChat}
      className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-lg flex items-center gap-3 hover:bg-emerald-600 transition"
    >
      <span className="font-semibold pl-2">Tanya Admin</span>
      <div className="bg-white/20 p-2 rounded-full">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.852c1.856.595 3.05.86 4.756.866 5.4 0 9.791-4.39 9.791-9.791s-4.39-9.791-9.791-9.791-9.791 4.39-9.791 9.791c0 2.028.62 3.923 1.885 5.539l-.956 3.487 3.106-.8z"/>
        </svg>
      </div>
    </motion.button>
  );
};
export default WhatsAppFloating;