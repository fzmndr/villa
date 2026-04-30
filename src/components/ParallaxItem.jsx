import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxItem = ({ children, distance = 50 }) => {
  const ref = useRef(null);

  // Melacak progress scroll pada elemen ini
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Mulai saat elemen masuk layar, selesai saat keluar
  });

  // Mengubah progress scroll (0 ke 1) menjadi pergerakan Y (jarak negatif ke positif)
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxItem;