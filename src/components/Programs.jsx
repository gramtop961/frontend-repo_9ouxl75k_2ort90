import { motion } from 'framer-motion';
import { Salad, Dumbbell, Flame, HeartPulse, Baby, GraduationCap, Trophy, LaptopMinimal } from 'lucide-react';

const items = [
  { icon: Flame, title: 'Weight loss', desc: 'Sustainable fat loss with metabolic-focused training.' },
  { icon: Dumbbell, title: 'Muscle gain', desc: 'Progressive strength systems for lean mass.' },
  { icon: Trophy, title: 'Running programs', desc: 'From 5K to marathon with pace-led sessions.' },
  { icon: Salad, title: 'Nutrition coaching', desc: 'Precision macros + real-life habits.' },
  { icon: Baby, title: 'Pregnancy training', desc: 'Safe, expert-guided prenatal fitness.' },
  { icon: GraduationCap, title: 'Teen weight management', desc: 'Confidence + performance for youth.' },
  { icon: HeartPulse, title: 'Marathon preparation', desc: 'Periodized build with race strategy.' },
  { icon: LaptopMinimal, title: 'Online coaching', desc: 'Remote plans + weekly check-ins.' },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Programs Offered</h2>
          <p className="mt-3 text-[#c9c9c9]">Premium coaching experiences tailored to you.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
              className="relative group rounded-2xl p-5 bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-px rounded-2xl [mask:linear-gradient(0deg,transparent,black,transparent)] bg-[conic-gradient(from_0deg,transparent_0_340deg,#D4AF3780_360deg)] animate-spin-slow" />
              </div>
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl p-3 bg-black/40 border border-white/10 text-[#D4AF37]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-[#c9c9c9]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
