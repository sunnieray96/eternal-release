"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const SCENES = [
  {
    id: "hero",
    label: "Return",
    headline: "Your body knows",
    subheadline: "the way home",
    text: "A gentle, evidence-based return to wholeness for complex minds. Uncage your nervous system, one breath at a time.",
    image: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/dbcab09ef71446b09f928c042620df92_pexels-angela-roma-7479889.jpg",
    range: [0, 0.2],
  },
  {
    id: "realization",
    label: "Story",
    headline: "Labels are maps,",
    subheadline: "but rarely the journey",
    text: "I spent years trying to talk my way out of storms. I analyzed, I categorized, I diagnosed. But I learned the truth: you can understand your trauma perfectly and still feel like your body is a cage.",
    image: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/1a8adf3e79cf4dadb4f2b6208dce502d_pexels-arun-350214906-15520327.jpg",
    range: [0.25, 0.45],
  },
  {
    id: "science",
    label: "Science",
    headline: "Your fascia is a",
    subheadline: "living archive",
    text: "Science confirms that trauma is a physical bracing in your connective tissue. We use somatic movement to signal safety to your Vagus nerve, allowing the body to finally drop its guard.",
    image: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/cf32f8b8961541939f851db417ec776a_pexels-daria-liudnaya-8187528.jpg",
    range: [0.5, 0.7],
  },
  {
    id: "pathways",
    label: "Offerings",
    headline: "Pathways to",
    subheadline: "Eternal Release",
    text: "Intentional somatic journeys designed for the ones traditional systems failed. From Tension to Tenderness. Returning to Safety.",
    image: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/8b91416fbcc3479cb40b3438cc6b7e73_pexels-nadin-sh-78971847-9118572.jpg",
    range: [0.75, 1],
  },
];

export default function StorySequence() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div ref={targetRef} className="relative h-[800vh] bg-[#FCFAF7]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {SCENES.map((scene, i) => (
          <Scene key={scene.id} scene={scene} progress={scrollYProgress} isLast={i === SCENES.length - 1} />
        ))}

        {/* Minimal Scroll Progress Indicator */}
        <div className="absolute left-12 bottom-12 z-50 mix-blend-difference">
           <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="w-24 h-px bg-white origin-left"
           />
        </div>
      </div>
    </div>
  );
}

function Scene({ scene, progress, isLast }: any) {
  const opacity = useTransform(
    progress,
    [scene.range[0] - 0.05, scene.range[0], scene.range[1], scene.range[1] + 0.05],
    [0, 1, 1, isLast ? 1 : 0]
  );

  const y = useTransform(
    progress,
    [scene.range[0] - 0.05, scene.range[0], scene.range[1], scene.range[1] + 0.05],
    [40, 0, 0, isLast ? 0 : -40]
  );

  const imgScale = useTransform(
    progress,
    [scene.range[0], scene.range[1]],
    [1.1, 1]
  );

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center p-8 md:p-24"
    >
      {/* Background Graphic */}
      <motion.div 
        style={{ scale: imgScale }}
        className="absolute inset-0 z-0 opacity-10 grayscale"
      >
        <img src={scene.image} className="w-full h-full object-cover" alt="" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 mb-8">{scene.label}</p>
        <h2 className="font-serif text-5xl md:text-[10rem] font-light leading-[0.85] tracking-tighter mb-16 text-[#1C1C1C]">
          {scene.headline}<br />
          <span className="italic font-extralight text-[#A8613F]">{scene.subheadline}</span>
        </h2>
        <div className="max-w-2xl mx-auto">
           <p className="text-xl md:text-2xl font-light text-[#1C1C1C]/60 leading-relaxed mb-12 font-sans">
             {scene.text}
           </p>
           {scene.id === "hero" && (
              <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 animate-pulse">Scroll to enter</span>
           )}
           {scene.id === "realization" && (
              <Link href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] border-b border-[#A8613F]/30 pb-2 hover:border-[#A8613F] transition-all text-[#A8613F] no-underline">
                Full Manifesto &rarr;
              </Link>
           )}
           {scene.id === "pathways" && (
              <Link href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] border-b border-black/10 pb-2 hover:border-black transition-all text-black no-underline">
                Connect &rarr;
              </Link>
           )}
        </div>
      </div>
    </motion.div>
  );
}
