"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Blog", href: "#blog" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-semibold tracking-wide text-stone-900">
          Eternal <span className="text-green-700">Release</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-stone-700 hover:text-green-700 transition">
              {link.label}
            </a>
          ))}
          <a href="#courses" className="text-sm font-medium px-5 py-2.5 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
            Begin Healing
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-stone-800 text-2xl" aria-label="Toggle menu">
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-stone-700">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
