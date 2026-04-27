export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1C1C1C] text-[#FCFAF7] pt-64 pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-24 items-start mb-64">
          <div className="md:col-span-7">
            <a href="/" className="font-serif text-5xl md:text-7xl font-medium tracking-tighter mb-16 block">
               Eternal <span className="italic font-light text-[#D9D2C5]/40">Release</span>
            </a>
            <p className="text-[#FCFAF7]/30 text-2xl font-light leading-relaxed max-w-md">
               Somatic exploration designed for the complex mind. Return home.
            </p>
          </div>

          <div className="md:col-span-5 space-y-20 text-right">
             <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FCFAF7]/20">Connect</p>
                <a href="mailto:hello@eternalrelease.org" className="text-3xl md:text-6xl font-serif italic text-[#D9D2C5] hover:text-[#A8613F] transition-colors block">hello@eternalrelease.org</a>
             </div>
             <div className="flex justify-end gap-16">
                <a href="https://instagram.com/eternal" className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FCFAF7]/40 hover:text-[#A8613F] transition-all">Instagram</a>
                <a href="/studio" className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FCFAF7]/40 hover:text-[#A8613F] transition-all">Dashboard</a>
             </div>
          </div>
        </div>

        <div className="border-t border-[#FCFAF7]/5 pt-16">
           <div className="flex flex-col md:flex-row justify-between items-end gap-16">
              <p className="text-[10px] leading-[2.8] font-light uppercase tracking-[0.3em] text-[#FCFAF7]/20 max-w-4xl">
                 Sunnie Ray is a psychology student and certified yoga teacher. Content provided is for educational and self-regulation purposes only. It is not a substitute for professional psychiatric care, clinical mental health services, or medical advice. Eternal Release does not claim to heal, treat, or diagnose any medical or psychological condition. If you are experiencing a mental health crisis, please contact your local emergency services or a licensed provider immediately.
              </p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#FCFAF7]/10 whitespace-nowrap">© {new Date().getFullYear()} Eternal Release</p>
           </div>
        </div>
      </div>
    </footer>
  );
}
