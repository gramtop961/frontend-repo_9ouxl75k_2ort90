import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0b]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark cinematic overlay with subtle vignette and particles */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_55%,rgba(0,0,0,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute top-24 -right-16 h-72 w-72 rounded-full bg-[#a88928]/10 blur-2xl" />
      </div>

      {/* Floating gold particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="absolute h-1 w-1 rounded-full" style={{
            left: Math.random()*100 + '%',
            top: Math.random()*100 + '%',
            boxShadow: '0 0 8px rgba(212,175,55,0.8)',
            background: '#D4AF37',
            opacity: 0.6
          }} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 sm:pt-48">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/40 px-3 py-1 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_2px_rgba(212,175,55,0.8)]" />
            <span className="text-xs uppercase tracking-widest text-[#f7f7f7]/80">Elite Coaching • Premium Results</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Personalized Fitness Coaching + Custom Nutrition Plans
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#c9c9c9]">
            Transform your body with a tailored program for your lifestyle, goals, and fitness level.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-black transition">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#a88928] shadow-[0_0_35px_rgba(212,175,55,0.35)] group-hover:shadow-[0_0_55px_rgba(212,175,55,0.55)] transition-shadow" />
              <span className="relative">Get Your Personalized Plan</span>
            </a>

            <a href="https://wa.me/972505069235" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1eb656] transition shadow-[0_0_25px_rgba(37,211,102,0.35)]">
              <PhoneCall className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
