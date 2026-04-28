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
    layout: "center",
    range: [0, 0.2]
  },
  {
    id: "what",
    label: "What",
    headline: "Labels are maps,",
    sub: "not the journey",
    text: "I spent years trying to talk my way out of storms. I analyzed, I categorized, I diagnosed. But I learned the truth: you can understand your trauma perfectly and still feel like your body is a cage.",
    img: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/1a8adf3e79cf4dadb4f2b6208dce502d_pexels-arun-350214906-15520327.jpg",
    layout: "left",
    range: [0.25, 0.45]
  },
  {
    id: "how",
    label: "How",
    headline: "The Living Archive",
    sub: "of your history",
    text: "Science confirms that trauma is a physical bracing in your connective tissue. Your fascia is your largest sensory organ. We use somatic movement to signal safety to your Vagus nerve.",
    img: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/cf32f8b8961541939f851db417ec776a_pexels-daria-liudnaya-8187528.jpg",
    layout: "right",
    range: [0.5, 0.7]
  },
  {
    id: "why",
    label: "Who",
    headline: "Eternal Release",
    sub: "is the middle ground",
    text: "Beyond spiritual bypassing and the happy-go-lucky mask. Building a body resilient enough to hold the full spectrum of human emotion. Reclaim the right to live in your own skin.",
    img: "https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/8b91416fbcc3479cb40b3438cc6b7e73_pexels-nadin-sh-78971847-9118572.jpg",
    layout: "center",
    range: [0.75, 1]
  }
];

export default function SanctuaryZine() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div ref={targetRef} className="relative h-[800vh] bg-[#FCFAF7]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {SCENES.map((scene, i) => (
          <ZineScene key={scene.id} scene={scene} progress={scrollYProgress} isLast={i === SCENES.length - 1} />
        ))}
      </div>
    </div>
  );
}

function ZineScene({ scene, progress, isLast }: any) {
  const opacity = useTransform(
    progress,
    [scene.range[0] - 0.05, scene.range[0], scene.range[1], scene.range[1] + 0.05],
    [0, 1, 1, isLast ? 1 : 0]
  );

  const xImg = useTransform(
    progress,
    [scene.range[0], scene.range[1]],
    [scene.layout === 'left' ? -100 : 100, 0]
  );

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center p-8 md:p-32"
    >
      {/* Asymmetrical Image Placement */}
      <motion.div 
        style={{ 
           x: scene.layout !== 'center' ? xImg : 0, 
           left: scene.layout === 'right' ? 'auto' : '10%',
           right: scene.layout === 'left' ? 'auto' : '10%',
           top: scene.layout === 'center' ? 'auto' : '15%',
           bottom: scene.layout === 'center' ? '5%' : 'auto'
        }}
        className={`absolute z-0 ${scene.layout === 'center' ? 'w-[80vw] h-[40vh] md:w-[60vw]' : 'w-[40vw] h-[60vh] md:w-[25vw]'} overflow-hidden rounded-sm opacity-20 grayscale`}
      >
        <img src={scene.img} className="w-full h-full object-cover shadow-2xl" alt="" />
      </motion.div>

      {/* Large Central Typography */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <p className="editorial-label mb-12">{scene.label}</p>
        <h2 className="editorial-h2 text-black leading-none mb-12">
           {scene.headline}<br/>
           <span className="italic font-extralight text-clay">{scene.sub}</span>
        </h2>
        <div className="max-w-2xl mx-auto mt-20">
           <p className="text-lg md:text-xl font-light text-black/60 leading-relaxed mb-12">
              {scene.text}
           </p>
           {scene.id === "hero" && (
              <p className="editorial-label opacity-20">Scroll to enter</p>
           )}
           {scene.id === "why" && (
              <Link href="/about" className="text-[11px] font-bold uppercase tracking-[0.4em] border-b border-black/10 pb-2 hover:border-black transition-all no-underline text-black">
                 The Full Manifesto &rarr;
              </Link>
           )}
        </div>
      </div>
    </motion.div>
  );
}
