"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Journal", href: "/#blog" },
  { label: "Pathways", href: "/#courses" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/40 backdrop-blur-md rounded-full px-8 py-4 border border-sand/10 shadow-sm">
        <a href="/" className="font-serif text-2xl tracking-tight text-primary">
          Eternal <span className="italic font-light text-sage-dark">Release</span>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#courses"
            className="px-6 py-2 bg-primary text-white rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-sage transition-all"
          >
            Begin
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setOpen(false)} 
              className="font-serif text-4xl italic text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
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
