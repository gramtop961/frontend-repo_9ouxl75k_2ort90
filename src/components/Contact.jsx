import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-3 text-[#c9c9c9]">Tell me about your goals. I’ll tailor a plan to you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Name','Phone','Email','Goal'].map((label) => (
                <div key={label} className="group">
                  <label className="block text-sm text-[#c9c9c9] mb-2">{label}</label>
                  <input type="text" placeholder={label}
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-[#f7f7f7] placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]/40 transition" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-sm text-[#c9c9c9] mb-2">Message</label>
              <textarea rows={5} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-[#f7f7f7] placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]/40 transition" placeholder="Tell me about your current level and goals..." />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="button" className="group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-black">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#a88928] shadow-[0_0_35px_rgba(212,175,55,0.35)] group-hover:shadow-[0_0_55px_rgba(212,175,55,0.55)] transition-shadow" />
                <span className="relative">Send Details</span>
              </button>
              <a href="https://wa.me/972505069235" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1eb656] transition shadow-[0_0_25px_rgba(37,211,102,0.35)]">
                <PhoneCall className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </motion.form>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop" alt="Athlete" className="h-full w-full object-cover" />
            </div>
            <div className="mt-6 space-y-2 text-[#c9c9c9]">
              <p>WhatsApp: +972 50 506 9235</p>
              <p>Email: coach@kobi.fit</p>
              <p>Tel Aviv, Israel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/972505069235" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full h-14 w-14 bg-[#25D366] shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition md:h-16 md:w-16">
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden>
          <path d="M19.11 17.47c-.29-.15-1.68-.83-1.94-.93s-.45-.15-.64.15-.73.93-.89 1.13-.33.22-.62.07a7.32 7.32 0 0 1-2.16-1.33 8.13 8.13 0 0 1-1.5-1.86c-.16-.29 0-.45.14-.6s.29-.33.44-.49a2 2 0 0 0 .29-.49.54.54 0 0 0 0-.53c-.07-.15-.64-1.53-.88-2.1s-.47-.49-.64-.5h-.54a1 1 0 0 0-.73.34 3.06 3.06 0 0 0-1 2.26 5.28 5.28 0 0 0 1.1 2.83 12 12 0 0 0 4.57 4 14.87 14.87 0 0 0 1.49.55 3.6 3.6 0 0 0 1.63.1 2.69 2.69 0 0 0 1.76-1.14 2.21 2.21 0 0 0 .15-1.14c-.07-.1-.25-.15-.54-.3z"/>
          <path d="M16.23 5.5A10.44 10.44 0 0 0 5.79 16a10.28 10.28 0 0 0 1.48 5.37L6 26.5l5.29-1.25a10.57 10.57 0 0 0 4.92 1.25h0A10.44 10.44 0 1 0 16.23 5.5zm6.21 16.65a8.42 8.42 0 0 1-6 2.52 8.56 8.56 0 0 1-4.14-1.06l-.3-.16-3.13.73.67-3-.2-.31a8.52 8.52 0 1 1 13.1 1.28z"/>
        </svg>
      </a>
    </section>
  );
}
