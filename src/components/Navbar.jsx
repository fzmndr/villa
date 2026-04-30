import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu "Kontak" telah dihapus dari array ini
  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Kamar', href: '#rooms' },
    { name: 'Fasilitas', href: '#amenities' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-emerald-900' : 'text-slate-800'}`}>
            D'Keys <span className="font-light">VILLA</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-emerald-600' 
                    : 'text-slate-700 hover:text-emerald-700'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#rooms" className="bg-emerald-900 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-emerald-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-30 bg-white md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6 text-xl font-medium">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-slate-800 hover:text-emerald-600 border-b border-slate-100 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#rooms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-emerald-900 text-white py-4 rounded-xl mt-4 w-full text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;