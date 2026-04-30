import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 }); // Mulai di luar layar

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Gunakan requestAnimationFrame agar lebih ringan dan stabil
      window.requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: 'rgba(16, 185, 129, 0.3)',
        pointerEvents: 'none', // SANGAT PENTING
        zIndex: 9999,
        x: mousePos.x - 10,
        y: mousePos.y - 10,
      }}
    />
  );
};

export default CustomCursor;