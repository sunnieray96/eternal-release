"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-bg">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/dbcab09ef71446b09f928c042620df92_pexels-angela-roma-7479889.jpg" 
          alt="Sanctuary"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-[10px] uppercase tracking-[0.8em] font-bold text-black mb-12 uppercase"
        >
          Somatic Release · Fascia Work · Psychology
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="font-serif text-6xl md:text-[12rem] font-light leading-[0.8] tracking-tighter mb-20 text-ink"
        >
          Your body knows<br />
          <span className="italic font-extralight text-moss opacity-40">the way home</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="max-w-xl mx-auto mt-24"
        >
           <p className="text-xl md:text-2xl font-light text-ink/50 leading-relaxed mb-16">
             A gentle, evidence-based return to wholeness for complex minds. 
             Uncage your nervous system.
           </p>
           <a href="#story" className="text-[11px] font-bold uppercase tracking-[0.6em] border-b border-black/10 pb-4 hover:border-black transition-all no-underline text-black">
             Enter the Sanctuary &darr;
           </a>
        </div>
      </div>
    </section>
  );
}
