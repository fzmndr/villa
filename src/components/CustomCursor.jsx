import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Menggunakan spring agar gerakan kursor terasa "elastis" dan mewah
  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      // PERBAIKAN: Hapus 'flex' di awal, biarkan 'hidden md:flex' di akhir
      className="fixed top-0 left-0 w-8 h-8 border-2 border-emerald-500 rounded-full pointer-events-none z-[9999] items-center justify-center mix-blend-difference hidden md:flex"
    >
      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;