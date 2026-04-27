export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1C1C1C] text-[#FCFAF7] py-32 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-left">
        <div className="grid md:grid-cols-12 gap-24 items-start">
          <div className="md:col-span-7">
            <a href="/" className="font-serif text-5xl md:text-8xl font-medium tracking-tighter mb-16 block no-underline text-white">
               Eternal <span className="italic font-light text-[#D9D2C5]/40">Release</span>
            </a>
            <p className="text-[#FCFAF7]/30 text-2xl font-light leading-relaxed max-w-md">
               Somatic exploration designed for the complex mind. Return home.
            </p>
          </div>

          <div className="md:col-span-5 space-y-24 text-right flex flex-col items-end">
             <div className="space-y-8">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FCFAF7]/20">Connect</p>
                <a href="mailto:hello@eternalrelease.org" className="text-xl md:text-3xl font-serif italic text-[#D9D2C5] hover:text-[#A8613F] transition-colors block no-underline">hello@eternalrelease.org</a>
             </div>
             <div className="flex gap-12">
                <a href="https://instagram.com/eternal" className="text-[#D9D2C5] opacity-40 hover:opacity-100 transition-all">
                   <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                   </svg>
                </a>
                <a href="/studio" className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#FCFAF7]/20 hover:text-white transition-all no-underline">Dashboard</a>
             </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-white/5">
           <div className="flex flex-col md:flex-row justify-between items-end gap-16">
              <p className="text-[9px] leading-[2.8] font-light uppercase tracking-[0.3em] text-[#FCFAF7]/20 max-w-4xl">
                 Sunnie Ray is a psychology student and yoga teacher. Content provided is for educational and self-regulation purposes only. It is not a substitute for professional psychiatric care, clinical mental health services, or medical advice. Eternal Release does not claim to heal, treat, or diagnose any medical or psychological condition. If you are experiencing a mental health crisis, please contact your local emergency services or a licensed provider immediately.
              </p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#FCFAF7]/10 whitespace-nowrap">© {new Date().getFullYear()} Eternal Release</p>
           </div>
        </div>
      </div>
    </footer>
  );
}
