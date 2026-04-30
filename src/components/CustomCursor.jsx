import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    
    // Deteksi hover pada tombol dan link
    const targets = document.querySelectorAll('button, a, .cursor-pointer');
    targets.forEach(target => {
      target.addEventListener('mouseenter', handleHover);
      target.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border-2 border-emerald-500 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
      }}
    />
  );
};

export default CustomCursor;