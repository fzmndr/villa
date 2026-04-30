import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Inisialisasi Lenis hanya setelah komponen dimuat (Client-side)
    const lenis = new Lenis({
      duration: 1.2, // Durasi scroll (semakin besar semakin lambat/lembut)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fungsi pelambatan
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Matikan di touch device agar tidak berat
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Bersihkan saat komponen tidak digunakan
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;