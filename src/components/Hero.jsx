import ParallaxItem from "./ParallaxItem";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Gambar Hero dengan Efek Paralaks */}
        <ParallaxItem distance={100}>
          <img 
            src="/hero-villa.jpg" 
            className="w-full h-[120%] object-cover" // Dibuat lebih tinggi agar tidak ada gap saat bergerak
            alt="Luxury Villa" 
          />
        </ParallaxItem>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-6xl font-bold">Kemewahan Alam...</h1>
        {/* ... sisa konten Hero */}
      </div>
    </section>
  );
};
export default Hero;