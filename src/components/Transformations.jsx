import { motion } from 'framer-motion';

const pairs = [
  { before: 'https://images.unsplash.com/photo-1546484959-f7a4e8b1123e?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop' },
  { before: 'https://images.unsplash.com/photo-1550344071-94e8d7f6d9f6?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1554298128-9dd9e4452a1c?q=80&w=1200&auto=format&fit=crop' },
  { before: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1550345332-09e3ac1eb7fe?q=80&w=1200&auto=format&fit=crop' },
];

export default function Transformations() {
  return (
    <section id="transformations" className="relative py-24 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Before & After</h2>
          <p className="mt-3 text-[#c9c9c9]">Real transformations. Real results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pairs.map((p, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={p.before} alt="Before" className="h-56 w-full object-cover" />
                  <span className="absolute top-2 left-2 rounded-full bg-black/60 text-[#D4AF37] text-xs font-semibold px-3 py-1">Before</span>
                </div>
                <div className="relative">
                  <img src={p.after} alt="After" className="h-56 w-full object-cover" />
                  <span className="absolute top-2 left-2 rounded-full bg-black/60 text-[#D4AF37] text-xs font-semibold px-3 py-1">After</span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
