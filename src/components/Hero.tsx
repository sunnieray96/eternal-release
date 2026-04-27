export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="editorial-container relative z-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#1C1C1C]/30 mb-16 animate-reveal">Somatic Release · Fascia Work · Psychology</p>
        
        <h1 className="font-serif text-6xl md:text-[11rem] font-light leading-[0.85] tracking-tighter mb-20 animate-reveal" style={{ animationDelay: "0.2s" }}>
          Your body knows<br />
          <span className="italic font-extralight text-[#3E4A34]/30">the way home</span>
        </h1>

        <div className="max-w-xl mx-auto mt-32 animate-reveal opacity-0" style={{ animationDelay: "0.4s" }}>
           <p className="text-xl md:text-2xl font-light text-[#1C1C1C]/50 leading-relaxed mb-16">
             A gentle, evidence-based return to wholeness for complex minds. 
             Uncage the nervous system, one breath at a time.
           </p>
           <a href="#about" className="text-[11px] font-bold uppercase tracking-[0.6em] border-b border-[#1C1C1C]/10 pb-4 hover:border-[#1C1C1C] transition-all">
             Enter the Sanctuary &darr;
           </a>
        </div>
      </div>

      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#3E4A34]/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#A8613F]/5 rounded-full blur-[180px]" />
    </section>
  );
}
