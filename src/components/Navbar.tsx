"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "The Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? "py-4 bg-white/80 backdrop-blur-md border-b border-[#D9D2C5]/20" : "py-12 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-tighter text-[#1C1C1C]">
          Eternal <span className="italic font-light text-[#3E4A34]">Release</span>
        </Link>

        <div className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-[#1C1C1C]/60">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[#A8613F] transition-colors">{link.label}</Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-[#1C1C1C]">
           <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
             <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
           </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-[#FCFAF7] z-[100] flex flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-4xl font-serif italic text-[#1C1C1C]">{link.label}</Link>
          ))}
          <button onClick={() => setOpen(false)} className="absolute top-10 right-10 p-4">
             <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
               <path d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
        </div>
      )}
    </nav>
  );
}
