"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/grain.png")' }} />
      
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-warm-white to-cream-dark/30" />

      {/* Organic Ethereal Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-sage/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-terracotta/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sage-dark font-medium text-xs md:text-sm tracking-[0.3em] uppercase mb-8 animate-fadeIn">
          Science meets Soul · Somatic Release · Fascia Work
        </p>

        <h1 className="font-serif text-6xl md:text-8xl font-medium text-slate-dark leading-[1.1] mb-8 animate-fadeIn">
          Your body knows
          <br />
          <span className="italic text-sage font-light">the way home</span>
        </h1>

        <p className="text-lg md:text-xl text-stone leading-relaxed max-w-2xl mx-auto mb-12 animate-fadeIn">
          A gentle, evidence-based approach to healing CPTSD, BPD, and Bipolar. 
          We move out of the storm and back into the natural flow of your nervous system.
        </p>

        {/* Waitlist Form */}
        <div className="max-w-md mx-auto mb-12 animate-fadeIn">
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            className="relative group"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Join the waitlist for the 7-Day Reset..."
              className="w-full px-6 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-sage/20 focus:outline-none focus:border-sage/50 text-slate-dark placeholder:text-stone/60 transition-all shadow-sm group-hover:shadow-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-2 px-6 py-2 bg-sage text-white rounded-full text-sm font-medium hover:bg-sage-dark transition-all"
            >
              Join
            </button>
          </form>
          <p className="mt-3 text-[10px] text-stone/60 uppercase tracking-widest">
            Be the first to know when courses drop
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeIn">
          <a
            href="#about"
            className="text-sm font-medium text-slate-dark hover:text-sage transition-colors border-b border-slate-dark/20 hover:border-sage pb-1"
          >
            Read the Manifesto
          </a>
          <span className="hidden sm:inline text-stone/30">|</span>
          <a
            href="#courses"
            className="text-sm font-medium text-slate-dark hover:text-sage transition-colors border-b border-slate-dark/20 hover:border-sage pb-1"
          >
            Explore Pathways
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fadeIn">
        <div className="w-px h-12 bg-gradient-to-b from-sage/60 to-transparent" />
      </div>
    </section>
  );
}
