const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-emerald-500 mb-4">LUMINA VILLA</h3>
          <p className="text-slate-400 max-w-sm">
            Destinasi peristirahatan terbaik untuk menemukan ketenangan dan kemewahan di tengah alam.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#" className="hover:text-emerald-400 transition">Beranda</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">Kamar</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">Fasilitas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
          <p className="text-slate-400 mb-2">Jalan Raya Uluwatu, Bali</p>
          <p className="text-slate-400">hello@luminavilla.com</p>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} D'Keys Villa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;