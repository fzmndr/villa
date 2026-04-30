import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] bg-emerald-950 flex flex-col items-center justify-center text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter mb-4">
          D'Keys <span className="font-light text-emerald-400">VILLA</span>
        </h1>
        <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-emerald-400"
          />
        </div>
        <p className="mt-4 text-emerald-200/50 text-xs uppercase tracking-[0.3em]">
          Preparing Your Luxury Experience
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;