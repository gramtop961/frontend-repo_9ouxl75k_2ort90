import { CheckCircle2, Signature } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const bullets = [
    "1-on-1 personal coaching",
    "Custom meal plans",
    "Weight-loss programs",
    "Muscle building & strength",
    "Running programs (beginner to marathon)",
    "Kids & teens fitness coaching",
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0b0b0b]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.6)]">
              <img src="https://images.unsplash.com/photo-1585757318177-0570a997dc3a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb2FjaHxlbnwwfDB8fHwxNzYzNTQ5MzczfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Coach" className="h-full w-full object-cover opacity-90" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-[#D4AF37]/40 bg-black/60 px-4 py-3 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Signature className="w-6 h-6" />
                <span className="font-semibold">Kobi Ben Akiva</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About the Coach</h2>
            <p className="mt-4 text-[#c9c9c9] max-w-prose">
              Precision coaching with a luxury approach. Every plan is tailored to your body, goals, and schedule — from elite performance to sustainable transformations.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 w-5 h-5 text-[#D4AF37]" />
                  <span className="text-[#f7f7f7]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
