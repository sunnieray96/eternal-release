"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-sage/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4" />

      <div className="editorial-container text-center relative z-10">
        <p className="text-terracotta text-xs uppercase tracking-[0.4em] font-bold mb-10 opacity-80">
          Somatic Healing · Fascia Release · Psychology
        </p>

        <h1 className="font-serif text-6xl md:text-8xl font-medium leading-[1.1] mb-12 text-balance">
          Your body knows <br />
          <span className="italic font-light text-sage-dark">the way home</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary font-light mb-16 leading-relaxed">
          A gentle, evidence-based approach to healing CPTSD, BPD, and Bipolar. 
          Step out of survival and back into yourself.
        </p>

        <div className="max-w-md mx-auto mb-16">
          <form 
             action="https://formspree.io/f/YOUR_FORM_ID" 
             method="POST"
             className="flex flex-col sm:flex-row gap-4 p-2 bg-white/60 backdrop-blur-md border border-sand/20 rounded-full shadow-sm"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Join the waitlist for the 7-Day Reset..."
              className="flex-1 px-6 py-3 bg-transparent text-primary placeholder:text-secondary/50 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="px-10 py-3 bg-primary text-white rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-sage transition-all">
              Join
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-12 text-[10px] font-bold uppercase tracking-widest text-primary/40">
           <a href="#about" className="hover:text-accent transition-colors border-b border-sand/50 pb-1">Our Manifesto</a>
           <a href="#courses" className="hover:text-accent transition-colors border-b border-sand/50 pb-1">The Pathways</a>
        </div>
      </div>
    </section>
  );
}
