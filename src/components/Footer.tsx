export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-bg pt-48 pb-20 overflow-hidden relative">
      <div className="canvas-container relative z-10">
        <div className="grid md:grid-cols-12 gap-24 items-start mb-48">
          <div className="md:col-span-6">
            <a href="#" className="font-serif text-5xl font-medium tracking-tighter mb-12 block">
               Eternal <span className="italic font-light text-sand/40">Release</span>
            </a>
            <p className="text-bg/40 text-2xl font-light leading-relaxed max-w-md">
               Somatic exploration designed for the complex mind. 
            </p>
          </div>

          <div className="md:col-span-6 space-y-12 text-right">
             <div className="space-y-4">
                <p className="caption text-bg/20">Connect</p>
                <a href="mailto:hello@eternalrelease.org" className="text-3xl md:text-5xl font-serif italic text-sand hover:text-clay transition-colors">hello@eternalrelease.org</a>
             </div>
             <div className="flex justify-end gap-12">
                <a href="https://instagram.com/eternal" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-clay transition-all">Instagram</a>
                <a href="/studio" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-clay transition-all">Studio Access</a>
             </div>
          </div>
        </div>

        <div className="border-t border-bg/5 pt-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <p className="text-[10px] leading-[2.5] font-light uppercase tracking-[0.3em] text-bg/20 max-w-3xl">
                 Sunnie Ray is a psychology student and certified yoga teacher. Content provided is for educational and self-regulation purposes only. It is not a substitute for professional psychiatric care, clinical mental health services, or medical advice. Eternal Release does not claim to heal, treat, or diagnose any medical or psychological condition. If you are experiencing a mental health crisis, please contact your local emergency services or a licensed provider immediately.
              </p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-bg/10 whitespace-nowrap">© {new Date().getFullYear()} Eternal Release</p>
           </div>
        </div>
      </div>

      {/* Large background decorative SVG */}
      <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.03] text-bg pointer-events-none">
         <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 200C250 50 550 350 700 200" stroke="currentColor" strokeWidth="2" />
         </svg>
      </div>
    </footer>
  );
}
