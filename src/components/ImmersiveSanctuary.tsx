"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const SCENES = [
  { id: "hero", label: "Return", title: "The Way Home" },
  { id: "story", label: "Story", title: "The Realization" },
  { id: "science", label: "Science", title: "The Living Archive" },
  { id: "pathways", label: "Pathways", title: "The Teachings" }
];

export default function ImmersiveSanctuary() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeScene, setActiveScene] = useState(SCENES[0].id);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      if (v < 0.25) setActiveScene("hero");
      else if (v < 0.5) setActiveScene("story");
      else if (v < 0.75) setActiveScene("science");
      else setActiveScene("pathways");
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const bgColor = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["#FCFAF7", "#FFFFFF", "#F2EFE9", "#FCFAF7", "#FCFAF7"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const storyOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const storyY = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [100, 0, 0, -100]);

  const scienceOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const scienceY = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [100, 0, 0, -100]);

  const pathwaysOpacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const pathwaysY = useTransform(scrollYProgress, [0.8, 0.9, 1], [100, 0, 0]);

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-bg">
      <motion.div style={{ backgroundColor: bgColor }} className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt.png")' }} />

        <div className="absolute left-12 md:left-24 top-1/2 -translate-y-1/2 z-50 hidden md:block">
           <div className="flex flex-col gap-10 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-sand/40" />
              {SCENES.map((s) => (
                 <div key={s.id} className="flex items-center gap-10 group">
                    <div className={`w-3.5 h-3.5 rounded-full border border-sand transition-all duration-700 z-10 ${activeScene === s.id ? "bg-clay scale-125 border-clay shadow-xl" : "bg-white"}`} />
                    <div className="text-left">
                       <p className={`text-[9px] font-bold uppercase tracking-[0.5em] transition-all duration-700 ${activeScene === s.id ? "text-clay" : "text-ink/10 group-hover:text-ink/30"}`}>{s.label}</p>
                       <p className={`font-serif text-lg italic transition-all duration-700 mt-2 ${activeScene === s.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>{s.title}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute inset-0 flex items-center justify-center p-8">
           <div className="max-w-7xl mx-auto text-center">
              <p className="text-[10px] uppercase tracking-[0.8em] font-bold text-black opacity-30 mb-12">Somatic Release · Fascia Work · Psychology</p>
              <h1 className="editorial-h1 mb-20 text-ink">Your body knows<br /><span className="italic font-extralight text-moss opacity-40">the way home</span></h1>
              <div className="max-w-xl mx-auto">
                 <p className="text-xl md:text-2xl font-light text-ink/40 leading-relaxed mb-16">A gentle, evidence-based return to wholeness for complex minds. Uncage your nervous system, one breath at a time.</p>
                 <span className="text-[10px] font-bold uppercase tracking-[0.8em] opacity-20">Scroll to begin</span>
              </div>
           </div>
           <div className="absolute inset-0 -z-10 opacity-[0.08]"><img src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/dbcab09ef71446b09f928c042620df92_pexels-angela-roma-7479889.jpg" className="w-full h-full object-cover" /></div>
        </motion.div>

        <motion.div style={{ opacity: storyOpacity, y: storyY }} className="absolute inset-0 flex items-center justify-center p-8 md:pl-96 md:pr-32 text-left">
           <div className="max-w-5xl text-left">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30 mb-12 uppercase">The Story</p>
              <h2 className="font-serif text-5xl md:text-[8rem] font-light leading-[1] tracking-tight mb-20">Labels are maps, but rarely <span className="italic font-light text-clay">the journey itself.</span></h2>
              <div className="space-y-12 text-xl md:text-4xl font-light text-ink/70 leading-relaxed">
                 <p>I spent years trying to talk my way out of storms. I analyzed, I categorized, I diagnosed. But I learned the truth: </p>
                 <div className="border-l-2 border-sand pl-12 py-8">
                    <p className="font-serif text-3xl md:text-5xl italic text-clay leading-tight">You can understand your trauma perfectly and still feel like your body is a cage.</p>
                 </div>
                 <Link href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] border-b border-clay/30 pb-4 hover:border-clay transition-all text-clay no-underline">Read my full manifesto &rarr;</Link>
              </div>
           </div>
        </motion.div>

        <motion.div style={{ opacity: scienceOpacity, y: scienceY }} className="absolute inset-0 flex items-center justify-center p-8 md:pl-96 md:pr-32">
           <div className="flex flex-col md:flex-row gap-24 items-center max-w-7xl">
              <div className="flex-1 space-y-16 text-left">
                 <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30 uppercase">The Science</p>
                 <h2 className="font-serif text-5xl md:text-[8rem] font-light leading-tight text-black tracking-tighter">Your fascia is a <br/><span className="italic font-light text-moss opacity-50">living archive.</span></h2>
                 <p className="text-2xl md:text-3xl font-light text-black/60 leading-relaxed max-w-lg">Science confirms that trauma isn&apos;t just a thought. It is a physical bracing in your connective tissue. We use somatic movement to signal safety to your Vagus nerve, allowing the body to finally let go.</p>
              </div>
              <div className="flex-1 w-full">
                 <div className="aspect-[3/4] rounded-[120px] overflow-hidden border border-sand/20 relative">
                    <img src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/cf32f8b8961541939f851db417ec776a_pexels-daria-liudnaya-8187528.jpg" className="w-full h-full object-cover opacity-60 grayscale" />
                 </div>
              </div>
           </div>
        </motion.div>

        <motion.div style={{ opacity: pathwaysOpacity, y: pathwaysY }} className="absolute inset-0 flex items-center justify-center p-8 md:pl-96 md:pr-32">
           <div className="max-w-7xl w-full text-left">
              <div className="mb-32 text-left">
                 <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30 mb-8 uppercase">Teachings</p>
                 <h2 className="font-serif text-5xl md:text-[10rem] font-light leading-none tracking-tighter text-black">Pathways</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-12 md:gap-24 text-left">
                 <PathwayCard title="From Tension to Tenderness" level="Foundation" desc="A 7-day week to soften the psoas and hydrate the fascia around the heart." img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/da5caad199094cab933feebd033c8611_pexels-shvetsa-4557648.jpg" />
                 <PathwayCard title="Returning to Safety" level="Intermediate" desc="Using the Vagus nerve and lateral gaze to signal safety to the brainstem." img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/1a8adf3e79cf4dadb4f2b6208dce502d_pexels-arun-350214906-15520327.jpg" />
                 <PathwayCard title="The Whole System" level="Advanced" desc="Advanced neuroplasticity flow to build new neural pathways for resilience." img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/f368570d2613491ea39b98b583419979_pexels-shvetsa-4557831.jpg" />
              </div>
           </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function PathwayCard({ title, level, desc, img }: any) {
   return (
      <div className="space-y-12 opacity-60 hover:opacity-100 transition-all duration-700 group">
         <div className="aspect-[4/5] rounded-[80px] overflow-hidden border border-sand/10">
            <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" />
         </div>
         <div>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-clay mb-4">{level}</p>
            <h3 className="font-serif text-3xl italic text-black mb-6 leading-tight">{title}</h3>
            <p className="text-sm font-light text-ink/50 leading-relaxed">{desc}</p>
         </div>
      </div>
   )
}
