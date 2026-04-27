"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-[#FCFAF7]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/dbcab09ef71446b09f928c042620df92_pexels-angela-roma-7479889.jpg" 
          alt="Sanctuary"
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FCFAF7]/10 to-[#FCFAF7]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.8em] font-bold text-black opacity-30 mb-12">
          Somatic Release · Fascia Work · Psychology
        </p>
        
        <h1 className="editorial-h1 mb-20 text-black">
          Your body knows<br />
          <span className="italic font-extralight text-[#3E4A34] opacity-30">the way home</span>
        </h1>

        <div className="max-w-xl mx-auto mt-32 animate-reveal">
           <p className="text-xl md:text-2xl font-light text-black opacity-60 leading-relaxed mb-16">
             A gentle, evidence-based return to wholeness for complex minds. 
             Uncage your nervous system, one breath at a time.
           </p>
           <a href="#story" className="text-[11px] font-bold uppercase tracking-[0.6em] border-b border-black opacity-20 pb-4 hover:opacity-100 transition-all no-underline text-black">
             Enter the Sanctuary &darr;
           </a>
        </div>
      </div>
    </section>
  );
}
