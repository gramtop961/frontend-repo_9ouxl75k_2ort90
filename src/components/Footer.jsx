export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#c9c9c9]">© {new Date().getFullYear()} Kobi Ben Akiva. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-[#c9c9c9]">
            <a href="#" className="hover:text-[#f7f7f7]">Instagram</a>
            <span className="h-4 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
            <a href="#" className="hover:text-[#f7f7f7]">Facebook</a>
            <span className="h-4 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
            <a href="#" className="hover:text-[#f7f7f7]">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
