import Link from "next/link";

export default function IntroductionTeaser() {
  return (
    <section id="story" className="py-48 md:py-80 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-12 mb-40 text-left">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30 mb-8">The Story</p>
             <h2 className="text-4xl md:text-9xl font-serif font-light leading-[1] tracking-tight max-w-6xl">
               Labels are maps, but rarely <span className="italic font-light text-[#A8613F]">the journey itself.</span>
             </h2>
          </div>
          
          <div className="md:col-start-4 md:col-span-8 space-y-24 text-left">
             <p className="text-2xl md:text-4xl font-light leading-relaxed text-black opacity-70">
               My journey began with a primal wound, attachment issues that terrified professionals, and a body that felt like a cage. For years, I tried to talk my way out of storms. I analyzed, I categorized, I diagnosed. But I learned the truth: 
             </p>
             
             <div className="border-l-2 border-gray-100 pl-16 py-8">
                <p className="font-serif text-4xl md:text-6xl italic text-[#A8613F] leading-tight mb-8">
                  You can understand your trauma perfectly and still feel like your body is a cage.
                </p>
             </div>

             <p className="text-2xl md:text-4xl font-light leading-relaxed text-black opacity-70 mb-20">
               Traditional systems often fail because they speak to the mind while the body is shouting a different language. We listen to the tissue.
             </p>

             <Link href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] border-b border-[#A8613F] opacity-30 pb-2 hover:opacity-100 transition-all text-[#A8613F] no-underline">
                Read my Full Manifesto &rarr;
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
