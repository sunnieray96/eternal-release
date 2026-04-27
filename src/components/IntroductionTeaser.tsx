import Link from "next/link";

export default function IntroductionTeaser() {
  return (
    <section id="about-teaser" className="py-48 md:py-80 bg-white relative">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-12 mb-40 text-left">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">The Realization</p>
             <h2 className="editorial-h2 max-w-6xl text-balance">
               Labels are maps, but rarely <span className="italic font-light text-[#A8613F]">the journey itself.</span>
             </h2>
          </div>
          
          <div className="md:col-start-4 md:col-span-8 space-y-24 text-left">
             <p className="text-2xl md:text-4xl font-light leading-relaxed text-black/70">
               We spend years trying to talk our way out of storms. We analyze, we categorize, we diagnose. But for those of us living in the high-voltage loop of CPTSD, we know the truth: 
             </p>
             
             <div className="border-l-2 border-gray-200 pl-16 py-8">
                <p className="font-serif text-4xl md:text-6xl italic text-[#A8613F] leading-tight mb-8">
                  You can understand your trauma perfectly and still feel like your body is a cage.
                </p>
             </div>

             <p className="text-2xl md:text-4xl font-light leading-relaxed text-black/70 mb-20">
               Traditional systems often fail because they speak to the mind while the body is shouting a different language. We listen to the tissue.
             </p>

             <Link href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] border-b border-[#A8613F]/30 pb-2 hover:border-[#A8613F] transition-all text-[#A8613F] no-underline">
                Read the Manifesto &rarr;
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
