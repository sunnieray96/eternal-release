"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "story", label: "Story", title: "The Realization", color: "text-clay" },
  { id: "science", label: "Science", title: "The Living Archive", color: "text-[#3E4A34]" },
  { id: "pathways", label: "Pathways", title: "The Teachings", color: "text-ink" }
];

export default function PinnedStorytelling() {
  const [activeSection, setActiveSection] = useState("story");

  return (
    <section className="relative bg-white">
      <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row">
        
        {/* Pinned Sidebar */}
        <div className="hidden md:block w-1/3 h-screen sticky top-0 flex items-center px-24">
          <div className="space-y-12 relative">
             {/* Vertical line */}
             <div className="absolute left-[7px] top-2 bottom-2 w-px bg-sand/30" />
             
             {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center gap-10 relative transition-all duration-700"
                >
                   <div className={`w-3.5 h-3.5 rounded-full border-2 border-sand transition-colors duration-500 z-10 ${
                      activeSection === s.id ? "bg-clay border-clay shadow-[0_0_15px_rgba(168,97,63,0.3)]" : "bg-white"
                   }`} />
                   <div className="text-left">
                      <p className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500 ${
                         activeSection === s.id ? "text-clay" : "text-ink/20 group-hover:text-ink/40"
                      }`}>
                         {s.label}
                      </p>
                      <p className={`font-serif text-xl italic transition-all duration-500 mt-2 ${
                         activeSection === s.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}>
                         {s.title}
                      </p>
                   </div>
                </button>
             ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="w-full md:w-2/3">
           <SectionWrapper id="story" onVisible={() => setActiveSection("story")}>
              <div className="space-y-32 py-48 md:py-64">
                 <div className="space-y-12">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30">The Story</p>
                    <h2 className="font-serif text-5xl md:text-[8rem] font-light leading-[1] tracking-tight text-balance">Labels are maps, but rarely <span className="italic font-light text-clay">the journey.</span></h2>
                    <div className="aspect-[4/5] bg-sand/10 rounded-[120px] overflow-hidden border border-sand/20 group relative">
                       <img 
                          src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/dbcab09ef71446b09f928c042620df92_pexels-angela-roma-7479889.jpg" 
                          alt="Release" 
                          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[4s]"
                       />
                    </div>
                 </div>
                 
                 <div className="space-y-16 text-2xl md:text-5xl font-light text-ink/70 leading-relaxed">
                    <p>I spent years trying to talk my way out of storms. I analyzed, I categorized, I diagnosed. But I learned the truth: </p>
                    <div className="border-l-2 border-sand/30 pl-16 py-12">
                       <p className="font-serif text-4xl md:text-7xl italic text-clay leading-tight">You can understand your trauma perfectly and still feel like your body is a cage.</p>
                    </div>
                    <p>Traditional systems often fail because they speak to the mind while the body is shouting a different language. I listen to the tissue.</p>
                    <Link href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.6em] border-b border-clay/30 pb-4 hover:border-clay transition-all text-clay no-underline">
                       Read my full manifesto &rarr;
                    </Link>
                 </div>
              </div>
           </SectionWrapper>

           <SectionWrapper id="science" onVisible={() => setActiveSection("science")}>
              <div className="space-y-32 py-48 md:py-64">
                 <div className="space-y-12 text-left">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30">The Science</p>
                    <h2 className="font-serif text-5xl md:text-[9rem] font-light leading-[0.85] tracking-tighter text-black">Your fascia is a <br/><span className="italic font-light text-[#3E4A34]/50">living archive.</span></h2>
                    <div className="aspect-[3/4] bg-sand/10 rounded-[100px] border border-sand/20 relative group overflow-hidden">
                       <img 
                         src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/cf32f8b8961541939f851db417ec776a_pexels-daria-liudnaya-8187528.jpg" 
                         alt="Anatomy"
                         className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3s]"
                       />
                    </div>
                 </div>
                 <p className="text-2xl md:text-4xl font-light text-black/60 leading-relaxed">
                    Science confirms that trauma isn&apos;t just a thought. It is a physical bracing in your connective tissue. We use somatic movement to signal safety directly to your Vagus nerve, allowing the body to finally drop its guard.
                 </p>
              </div>
           </SectionWrapper>

           <SectionWrapper id="pathways" onVisible={() => setActiveSection("pathways")}>
              <div className="space-y-32 py-48 md:py-64">
                 <div className="space-y-12 text-left">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30">Pathways</p>
                    <h2 className="font-serif text-5xl md:text-[10rem] font-light leading-[0.8] tracking-tighter text-black">Teachings</h2>
                 </div>
                 
                 <div className="grid gap-40">
                    <PathwayItem 
                       title="From Tension to Tenderness" 
                       level="Foundation" 
                       desc="A 7-day week-long journey to soften the psoas and hydrate the fascia around the heart."
                       img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/da5caad199094cab933feebd033c8611_pexels-shvetsa-4557648.jpg" 
                    />
                    <PathwayItem 
                       title="Returning to Safety" 
                       level="Intermediate" 
                       desc="Using the Vagus nerve and lateral gaze to signal safety to the brainstem."
                       img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/1a8adf3e79cf4dadb4f2b6208dce502d_pexels-arun-350214906-15520327.jpg" 
                    />
                    <PathwayItem 
                       title="The Whole System Flow" 
                       level="Advanced" 
                       desc="Advanced neuroplasticity flow to build new neural pathways for resilience."
                       img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/f368570d2613491ea39b98b583419979_pexels-shvetsa-4557831.jpg" 
                    />
                 </div>
              </div>
           </SectionWrapper>
        </div>
      </div>
    </section>
  );
}

function SectionWrapper({ children, id, onVisible }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) onVisible();
  }, [isInView, onVisible]);

  return (
    <div id={id} ref={ref} className="px-8 md:px-32">
      {children}
    </div>
  );
}

function PathwayItem({ title, level, desc, img }: any) {
   return (
      <div className="space-y-16 group">
         <div className="aspect-[16/9] overflow-hidden rounded-[80px] border border-sand/20 relative">
            <img src={img} alt={title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
         </div>
         <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-clay mb-6">{level}</p>
            <h3 className="font-serif text-4xl md:text-6xl italic text-black mb-10 leading-none">{title}</h3>
            <p className="text-xl md:text-2xl font-light text-black/60 leading-relaxed">{desc}</p>
            <span className="inline-block mt-16 text-[10px] font-bold uppercase tracking-[0.6em] border-b border-black/10 pb-1 font-sans">Opening Soon</span>
         </div>
      </div>
   )
}
