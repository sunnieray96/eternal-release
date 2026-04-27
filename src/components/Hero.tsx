"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="canvas-container relative z-10 text-center">
        <p className="caption mb-12 animate-reveal opacity-0">Somatic Release · Fascia Work · Psychology</p>
        
        <h1 className="editorial-h1 mb-16 animate-reveal opacity-0" style={{ animationDelay: "0.2s" }}>
          Your body knows<br />
          <span className="italic font-extralight text-moss/60">the way home</span>
        </h1>

        <div className="max-w-xl mx-auto mt-24 animate-reveal opacity-0" style={{ animationDelay: "0.4s" }}>
           <p className="text-lg md:text-xl font-light text-ink/60 leading-relaxed mb-12">
             A gentle, evidence-based return to wholeness for complex minds. 
             Uncage the nervous system, one breath at a time.
           </p>
           <a href="#pathways" className="text-[11px] font-bold uppercase tracking-[0.5em] border-b border-ink/10 pb-2 hover:border-ink transition-all">Begin the return &darr;</a>
        </div>
      </div>

      {/* Ethereal background gradient */}
      <div className="organic-shape top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-moss" />
      <div className="organic-shape bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-clay" />
    </section>
  );
}
