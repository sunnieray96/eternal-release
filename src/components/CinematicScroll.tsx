"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CinematicScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scene 1: Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  
  // Scene 2: Realization
  const storyOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const storyY = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [40, 0, 0, -40]);
  
  // Scene 3: Science
  const scienceOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const scienceY = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.8], [40, 0, 0, -40]);

  // Scene 4: Pathways
  const pathOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const pathY = useTransform(scrollYProgress, [0.85, 0.95], [40, 0]);

  // Background Color Transition
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.85],
    ["#FCFAF7", "#FFFFFF", "#F2EFE9", "#FCFAF7"]
  );

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-bg">
      {/* Fixed Sticky Canvas */}
      <motion.div 
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Global Textures */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt.png")' }} />

        {/* Scene 1: Hero */}
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.8em] font-bold opacity-30 mb-12 uppercase">Somatic Release · Fascia Work · Psychology</p>
            <h1 className="font-serif text-6xl md:text-[11rem] font-light leading-[0.85] tracking-tighter mb-20 text-ink">
              Your body knows<br />
              <span className="italic font-extralight opacity-30">the way home</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-ink/40 max-w-lg mx-auto leading-relaxed">
               A gentle, evidence-based return to wholeness for complex minds. 
               Uncage your nervous system, one breath at a time.
            </p>
          </div>
          {/* Hero Background Macro */}
          <div className="absolute inset-0 -z-10">
             <img 
                src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/dbcab09ef71446b09f928c042620df92_pexels-angela-roma-7479889.jpg" 
                alt="Safety" 
                className="w-full h-full object-cover opacity-10"
             />
          </div>
        </motion.div>

        {/* Scene 2: The Realization */}
        <motion.div style={{ opacity: storyOpacity, y: storyY }} className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
          <div className="max-w-4xl text-left">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/30 mb-12 uppercase">The Realization</p>
            <h2 className="font-serif text-4xl md:text-8xl font-light leading-[1] tracking-tight mb-20 text-balance">
               Labels are maps, but rarely <span className="italic font-light text-clay">the journey itself.</span>
            </h2>
            <p className="text-xl md:text-4xl font-light leading-relaxed text-ink/70">
               I spent years trying to talk my way out of storms. I analyzed, I categorized, I diagnosed. But I learned the truth: you can understand your trauma perfectly and still feel like your body is a cage.
            </p>
            <div className="mt-16">
               <Link href="/about" className="text-[11px] font-bold uppercase tracking-[0.5em] border-b border-clay/30 pb-2 hover:border-clay transition-all text-clay no-underline">
                  Read my Manifesto &rarr;
               </Link>
            </div>
          </div>
        </motion.div>

        {/* Scene 3: The Science */}
        <motion.div style={{ opacity: scienceOpacity, y: scienceY }} className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
           <div className="max-w-6xl w-full flex flex-col md:flex-row gap-24 items-center">
              <div className="flex-1 space-y-12 text-left">
                 <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/30 uppercase">The Architecture</p>
                 <h2 className="font-serif text-5xl md:text-8xl font-light leading-tight text-black tracking-tighter">
                    Your fascia is a <br/><span className="italic font-light text-[#3E4A34]">living archive.</span>
                 </h2>
                 <p className="text-xl md:text-2xl font-light text-black/60 leading-relaxed">
                    Science confirms that trauma isn&apos;t just a thought. It is a physical bracing in your connective tissue. I use somatic movement to signal safety to my Vagus nerve, allowing the body to finally drop its guard.
                 </p>
              </div>
              <div className="flex-1">
                 <div className="aspect-[3/4] bg-sand/10 rounded-[100px] border border-sand/20 overflow-hidden relative">
                    <img 
                      src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/cf32f8b8961541939f851db417ec776a_pexels-daria-liudnaya-8187528.jpg" 
                      alt="Anatomy"
                      className="w-full h-full object-cover opacity-60 grayscale"
                    />
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Scene 4: Pathways */}
        <motion.div style={{ opacity: pathOpacity, y: pathY }} className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
           <div className="max-w-7xl w-full text-center">
              <div className="mb-32">
                 <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/30 mb-8 uppercase">The Teachings</p>
                 <h2 className="font-serif text-5xl md:text-9xl font-light tracking-tighter text-black leading-none">Pathways to Flow</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-16 md:gap-32 text-left">
                 <div className="space-y-8 opacity-40">
                    <h3 className="font-serif text-3xl italic">From Tension to Tenderness</h3>
                    <p className="text-sm font-light leading-relaxed">A 7-day foundational week to soften the body and quiet the mind.</p>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Foundation</span>
                 </div>
                 <div className="space-y-8 opacity-40">
                    <h3 className="font-serif text-3xl italic">Returning to Safety</h3>
                    <p className="text-sm font-light leading-relaxed">Learning to inhabit a body that has spent years on high alert.</p>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Intermediate</span>
                 </div>
                 <div className="space-y-8 opacity-40">
                    <h3 className="font-serif text-3xl italic">The Whole System</h3>
                    <p className="text-sm font-light leading-relaxed">Advanced neuroplasticity flow to build new neural pathways.</p>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Advanced</span>
                 </div>
              </div>
           </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
