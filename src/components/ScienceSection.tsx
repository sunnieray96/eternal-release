"use client";
import { motion } from "framer-motion";

export default function ScienceSection() {
  return (
    <section className="py-48 md:py-96 bg-bone/50 relative overflow-hidden">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row gap-32 items-center">
          <div className="flex-1 space-y-16 text-left">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30">The Architecture</p>
             <h2 className="font-serif text-5xl md:text-[9rem] font-light leading-tight text-black tracking-tighter">
                Your fascia is a <br/><span className="italic font-light text-moss/40">living archive.</span>
             </h2>
             <p className="text-2xl md:text-4xl font-light text-black/60 leading-relaxed max-w-lg">
               Science confirms that trauma isn&apos;t just a thought. It is a physical bracing in your connective tissue. We use somatic movement to signal safety directly to your Vagus nerve.
             </p>
          </div>
          
          <div className="flex-1">
             <div className="aspect-[3/4] bg-sand/10 rounded-[120px] border border-sand/20 overflow-hidden relative group">
                <img 
                  src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/cf32f8b8961541939f851db417ec776a_pexels-daria-liudnaya-8187528.jpg" 
                  alt="Anatomy"
                  className="w-full h-full object-cover opacity-60 transition-all duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" className="opacity-10 text-black">
                      <path d="M100 20C60 60 40 140 100 180C160 140 140 60 100 20Z" stroke="currentColor" strokeWidth="0.5" />
                   </svg>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
