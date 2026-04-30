import { useState } from 'react';
import { motion } from 'framer-motion';

const AIAssistant = () => {
  const [budget, setBudget] = useState('');
  const [guestCount, setGuestCount] = useState('');
  // Gunakan operator OR (||) untuk memberikan nomor cadangan
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "6285775355771";

  const handleRecommendation = (e) => {
    e.preventDefault();
    const message = `Halo, saya butuh rekomendasi villa.\nBudget: Rp ${budget} / malam\nJumlah Tamu: ${guestCount} orang.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4">Bingung Pilih Kamar?</h2>
            <p className="text-emerald-100 text-lg mb-8">
              Beri tahu kami budget dan jumlah rombongan Anda via WhatsApp.
            </p>
          </motion.div>
          <motion.div className="bg-white rounded-3xl p-8 text-slate-800 shadow-2xl">
            <form onSubmit={handleRecommendation} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Budget Maksimal</label>
                  <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Jumlah Tamu</label>
                  <input type="number" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200" required />
                </div>
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl">
                Tanya Ketersediaan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;