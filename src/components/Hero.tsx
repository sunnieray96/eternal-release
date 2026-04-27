"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-black opacity-30 mb-12 animate-reveal">Somatic Release · Fascia Work · Psychology</p>
        
        <h1 className="text-6xl md:text-[11rem] font-serif font-light leading-[0.85] tracking-tighter mb-20 animate-reveal" style={{ animationDelay: "0.2s" }}>
          Your body knows<br />
          <span className="italic font-extralight text-[#3E4A34] opacity-30">the way home</span>
        </h1>

        <div className="max-w-xl mx-auto mt-32 animate-reveal opacity-0" style={{ animationDelay: "0.4s" }}>
           <p className="text-xl md:text-2xl font-light text-black opacity-50 leading-relaxed mb-16">
             A gentle, evidence-based return to wholeness for complex minds. 
             Uncage your nervous system, one breath at a time.
           </p>
           <form 
             action="https://formspree.io/f/YOUR_FORM_ID" 
             method="POST"
             className="flex flex-col sm:flex-row gap-3 mb-8"
           >
             <input
               type="email"
               name="email"
               required
               placeholder="Join the waitlist..."
               className="flex-1 px-6 py-4 rounded-full bg-white/40 backdrop-blur-md border border-sand/30 focus:outline-none focus:border-moss text-ink placeholder:text-ink/40"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
             <button type="submit" className="px-10 py-4 bg-ink text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-moss transition-all shadow-md">
               Join
             </button>
           </form>
           <a href="#story" className="text-[11px] font-bold uppercase tracking-[0.6em] border-b border-black opacity-20 pb-4 hover:opacity-100 transition-all no-underline text-black">Enter the Sanctuary &darr;</a>
        </div>
      </div>

      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#3E4A34] opacity-[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#A8613F] opacity-[0.05] rounded-full blur-[180px] pointer-events-none" />
    </section>
  );
}
