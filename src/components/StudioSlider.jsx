import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594737625785-c6683a0ecb85?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1600&auto=format&fit=crop',
];

export default function StudioSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="studio" className="relative py-24 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Studio Gallery</h2>
          <p className="mt-3 text-[#c9c9c9]">Where performance meets design.</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="relative h-[360px] sm:h-[460px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                alt="Studio"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/40" />
          </div>

          {/* Gold pagination dots */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.8)]' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
