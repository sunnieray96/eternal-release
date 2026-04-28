"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const SCENES = [
  {
    id: "hero",
    label: "Return",
    headline: "Your body knows",
    sub: "the way home",
    text: "A gentle, evidence-based return to wholeness for complex minds. Uncage your nervous system, one breath at a time.",
    img: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/dbcab09ef71446b09f928c042620df92_pexels-angela-roma-7479889.jpg",
    imgPos: "right",
    range: [0, 0.2]
  },
  {
    id: "what",
    label: "What",
    headline: "Labels are maps,",
    sub: "not the journey",
    text: "I spent years trying to talk my way out of storms. I analyzed, I categorized, I diagnosed. But I learned the truth: you can understand your trauma perfectly and still feel like your body is a cage.",
    img: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/1a8adf3e79cf4dadb4f2b6208dce502d_pexels-arun-350214906-15520327.jpg",
    imgPos: "left",
    range: [0.25, 0.45]
  },
  {
    id: "how",
    label: "How",
    headline: "The Living Archive",
    sub: "of your history",
    text: "Science confirms that trauma is a physical bracing in your connective tissue. Your fascia is your largest sensory organ. We use somatic movement to signal safety to your Vagus nerve.",
    img: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/cf32f8b8961541939f851db417ec776a_pexels-daria-liudnaya-8187528.jpg",
    imgPos: "right",
    range: [0.5, 0.7]
  },
  {
    id: "why",
    label: "Why",
    headline: "Eternal Release",
    sub: "is the middle ground",
    text: "Beyond spiritual bypassing and the happy-go-lucky mask. Building a body resilient enough to hold the full spectrum of human emotion. Reclaim the right to live in your own skin.",
    img: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/8b91416fbcc3479cb40b3438cc6b7e73_pexels-nadin-sh-78971847-9118572.jpg",
    imgPos: "center",
    range: [0.75, 1]
  }
];

export default function CinematicEngine() {
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
    [60, 0, 0, isLast ? 0 : -60]
  );

  const imgY = useTransform(
    progress,
    [scene.range[0], scene.range[1]],
    [100, -100]
  );

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center p-8 md:p-24"
    >
      {/* Asymmetrical Floating Image */}
      <motion.div 
        style={{ 
          y: imgY, 
          left: scene.imgPos === 'left' ? '5%' : 'auto',
          right: scene.imgPos === 'right' ? '5%' : 'auto',
          margin: scene.imgPos === 'center' ? '0 auto' : '0'
        }}
        className={`absolute z-0 ${scene.imgPos === 'center' ? 'w-[70vw] h-[40vh] bottom-0' : 'w-[35vw] h-[60vh]'} rounded-sm overflow-hidden opacity-10 grayscale`}
      >
        <img src={scene.img} className="w-full h-full object-cover" alt="" />
      </motion.div>

      {/* Giant Typography (Slow Residency Style) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.8em] font-bold opacity-20 mb-12">{scene.label}</p>
        <h2 className="font-serif text-5xl md:text-[12rem] font-light leading-[0.85] tracking-tighter text-black mb-12">
           {scene.headline}<br/>
           <span className="italic font-extralight text-[#A8613F]/50">{scene.sub}</span>
        </h2>
        <div className="max-w-2xl mx-auto text-center md:text-left mt-24 md:ml-auto md:mr-0">
           <p className="text-xl md:text-3xl font-light text-black/60 leading-relaxed mb-12">
              {scene.text}
           </p>
           {scene.id === "hero" && <p className="text-[9px] uppercase tracking-[0.4em] opacity-20 animate-pulse">Scroll to enter</p>}
           {scene.id === "why" && (
              <Link href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] border-b border-black/10 pb-2 hover:border-black transition-all no-underline text-black">
                 Read the manifesto &rarr;
              </Link>
           )}
        </div>
      </div>
    </motion.div>
  );
}
