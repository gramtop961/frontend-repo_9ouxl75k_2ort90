import { Menu, Dumbbell, ChevronRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#programs" },
  { label: "Certificates", href: "#certs" },
  { label: "Studio", href: "#studio" },
  { label: "Before & After", href: "#transformations" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-md bg-gradient-to-tr from-[#D4AF37]/40 to-[#a88928]/20" />
                <div className="relative rounded-xl p-2 bg-black/60 border border-[#D4AF37]/30">
                  <Dumbbell className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-[#f7f7f7]">Kobi Ben Akiva</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#c9c9c9] hover:text-[#f7f7f7] transition-colors relative"
                >
                  <span className="px-3 py-2 rounded-xl backdrop-blur-sm">
                    {item.label}
                  </span>
                  {idx < navItems.length - 1 && (
                    <span className="mx-2 h-4 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent inline-block align-middle" />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-black bg-[#D4AF37] hover:bg-[#c9a12f] transition-colors"
              >
                Get Your Plan
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </nav>

            {/* Mobile menu */}
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10">
              <Menu className="w-6 h-6 text-[#f7f7f7]" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="py-3 text-[#c9c9c9] hover:text-[#f7f7f7]">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-black bg-[#D4AF37]">
                  Get Your Plan
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
