"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function StorySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xText = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="story" ref={containerRef} className="py-48 md:py-96 bg-white relative overflow-hidden">
      <div className="editorial-container">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-12 mb-48 overflow-hidden">
             <motion.h2 style={{ x: xText }} className="font-serif text-5xl md:text-[15rem] font-light whitespace-nowrap text-sand/30 leading-none tracking-tighter">
                THE REALIZATION · THE REALIZATION · THE REALIZATION
             </motion.h2>
          </div>
          
          <div className="md:col-start-4 md:col-span-8 text-left space-y-24">
             <p className="text-2xl md:text-5xl font-light leading-relaxed text-ink/80">
                I spent years trying to talk my way out of storms. I analyzed, I categorized, I diagnosed. But I learned the truth: 
             </p>
             
             <div className="border-l-2 border-sand/30 pl-16 py-12">
                <p className="font-serif text-4xl md:text-7xl italic text-clay leading-tight mb-8">
                  You can understand your trauma perfectly and still feel like your body is a cage.
                </p>
             </div>

             <p className="text-2xl md:text-4xl font-light leading-relaxed text-ink/70 mb-20">
               Traditional systems often fail because they speak to the mind while the body is shouting a different language. I listen to the tissue.
             </p>

             <Link href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] border-b border-clay/30 pb-2 hover:border-clay transition-all text-clay no-underline">
                Read my Manifesto &rarr;
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
