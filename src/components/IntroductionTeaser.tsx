import Link from "next/link";

export default function IntroductionTeaser() {
  return (
    <section id="story" className="py-48 md:py-80 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
             <div className="aspect-[4/5] bg-sand/10 rounded-[120px] overflow-hidden border border-sand/20 relative group">
                <img 
                   src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/dbcab09ef71446b09f928c042620df92_pexels-angela-roma-7479889.jpg" 
                   alt="Sanctuary"
                   className="w-full h-full object-cover opacity-80 transition-all duration-[3s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7]/30 to-transparent" />
             </div>
          </div>
          
          <div className="md:col-span-6 text-left order-1 md:order-2 md:pl-24">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30 mb-8 uppercase">The Story</p>
             <h2 className="font-serif text-5xl md:text-8xl font-light leading-tight mb-16">
               Labels are maps, but rarely <span className="italic font-light text-[#A8613F]">the journey itself.</span>
             </h2>
             
             <div className="space-y-16 text-xl md:text-3xl font-light text-black/70 leading-relaxed">
                <p>
                  My journey began with a primal wound, attachment issues that terrified professionals, and a body that felt like a cage. For years, I tried to talk my way out of storms. I analyzed, I categorized, I diagnosed. But I learned the truth: 
                </p>
                
                <p className="font-serif text-3xl md:text-5xl italic text-[#A8613F] leading-tight border-l-2 border-[#D9D2C5]/40 pl-10 py-4 text-balance">
                   You can understand your trauma perfectly and still feel like your body is a cage.
                </p>

                <Link href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] border-b border-[#A8613F]/30 pb-2 hover:border-[#A8613F] transition-all text-[#A8613F] no-underline">
                   Read my Full Manifesto &rarr;
                </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
