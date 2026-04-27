export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/dbcab09ef71446b09f928c042620df92_pexels-angela-roma-7479889.jpg" 
          alt="Sanctuary Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF7]/40 via-[#FCFAF7]/20 to-[#FCFAF7]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-black opacity-30 mb-12 animate-reveal">Somatic Release · Fascia Work · Psychology</p>
        
        <h1 className="text-6xl md:text-[11rem] font-serif font-light leading-[0.85] tracking-tighter mb-20 animate-reveal">
          Your body knows<br />
          <span className="italic font-extralight text-[#3E4A34] opacity-30">the way home</span>
        </h1>

        <div className="max-w-xl mx-auto mt-32 animate-reveal opacity-0" style={{ animationDelay: "0.4s" }}>
           <p className="text-xl md:text-2xl font-light text-black opacity-50 leading-relaxed mb-16">
             A gentle, evidence-based return to wholeness for complex minds. 
             Uncage your nervous system, one breath at a time.
           </p>
           <a href="#story" className="text-[11px] font-bold uppercase tracking-[0.6em] border-b border-black opacity-20 pb-4 hover:opacity-100 transition-all no-underline text-black">Enter the Sanctuary &darr;</a>
        </div>
      </div>

      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#3E4A34] opacity-[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#A8613F] opacity-[0.05] rounded-full blur-[180px] pointer-events-none" />
    </section>
  );
}
