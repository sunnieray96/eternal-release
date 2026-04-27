"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/40 mb-12">
          Somatic Release · Fascia Work · Psychology
        </p>
        
        <h1 className="font-serif text-6xl md:text-[10rem] font-light leading-[0.9] tracking-tighter mb-16">
          Your body knows<br />
          <span className="italic font-extralight text-moss/40">the way home</span>
        </h1>

        <div className="max-w-xl mx-auto mt-24">
           <p className="text-lg md:text-xl font-light text-ink/60 leading-relaxed mb-12">
             A gentle, evidence-based return to wholeness for complex minds. 
             Uncage the nervous system, one breath at a time.
           </p>
           <a href="#pathways" className="text-[11px] font-bold uppercase tracking-[0.5em] border-b border-ink/10 pb-2 hover:border-ink transition-all">
             Explore the work &darr;
           </a>
        </div>
      </div>

      {/* Texture & Shapes */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt.png")' }} />
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-moss/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-clay/5 rounded-full blur-[150px]" />
    </section>
  );
}
