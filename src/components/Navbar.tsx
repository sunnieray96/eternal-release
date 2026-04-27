"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? "py-4 bg-white/80 backdrop-blur-md border-b border-sand/20" : "py-10 bg-transparent"
    }`}>
      <div className="canvas-container flex items-center justify-between">
        <a href="/" className="font-serif text-2xl tracking-tighter text-ink">
          Eternal <span className="italic font-light">Release</span>
        </a>

        <div className="flex items-center gap-12">
          <a href="/about" className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/60 hover:text-clay transition-colors">About</a>
          <a href="/#blog" className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/60 hover:text-clay transition-colors">Journal</a>
          <a href="/#pathways" className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/60 hover:text-clay transition-colors">Pathways</a>
          <a href="/#contact" className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/60 hover:text-clay transition-colors">Connect</a>
        </div>
      </div>
    </nav>
  );
}
