"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ethereal elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-sage/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[5%] left-[-10%] w-[50vw] h-[50vw] bg-terracotta/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-terracotta font-medium text-xs md:text-sm tracking-[0.4em] uppercase mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          Somatic Healing · Fascia Release · Nervous System Regulation
        </p>

        <h1 className="font-serif text-6xl md:text-9xl font-medium text-slate-dark leading-[1.1] mb-10 text-balance animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          Your body knows
          <br />
          <span className="italic font-light text-sage-dark">the way home</span>
        </h1>

        <p className="text-lg md:text-2xl text-stone leading-relaxed max-w-2xl mx-auto mb-16 font-light animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
          A gentle, evidence-based approach to healing CPTSD, BPD, and Bipolar. 
          Return to yourself, one breath at a time.
        </p>

        {/* Waitlist Section */}
        <div className="max-w-md mx-auto mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Join the waitlist for the 7-Day Reset..."
              className="flex-1 px-6 py-4 rounded-full bg-white/40 backdrop-blur-md border border-sand/30 focus:outline-none focus:border-sage text-slate-dark placeholder:text-stone/50 transition-all shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-10 py-4 bg-sage text-white rounded-full text-sm font-medium hover:bg-sage-dark transition-all shadow-md hover:shadow-sage/20"
            >
              Join
            </button>
          </form>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-stone/60">
            Secure your spot for the next cohort
          </p>
        </div>

        <div className="flex justify-center gap-10 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
           <a href="#about" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-dark/60 hover:text-terracotta transition-colors border-b border-sand/50 pb-1">Manifesto</a>
           <a href="#courses" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-dark/60 hover:text-terracotta transition-colors border-b border-sand/50 pb-1">Pathways</a>
        </div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
         <span className="text-[9px] uppercase tracking-[0.4em] text-stone vertical-text">Scroll</span>
         <div className="w-px h-16 bg-gradient-to-b from-stone to-transparent" />
      </div>
    </section>
  );
}
