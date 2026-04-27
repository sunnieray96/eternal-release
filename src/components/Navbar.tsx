"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? "py-6 bg-white/80 backdrop-blur-md border-b border-[#D9D2C5]/20" : "py-12 bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-tighter text-[#1C1C1C]">
          Eternal <span className="italic font-light">Release</span>
        </Link>

        <div className="flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-[#1C1C1C]/60">
          <Link href="/about" className="hover:text-[#A8613F] transition-colors">About</Link>
          <Link href="/#work" className="hover:text-[#A8613F] transition-colors">The Work</Link>
          <Link href="/#contact" className="hover:text-[#A8613F] transition-colors">Connect</Link>
        </div>
      </div>
    </nav>
  );
}
