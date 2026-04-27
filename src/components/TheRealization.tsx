export default function TheRealization() {
  return (
    <section id="about" className="py-32 md:py-64 bg-white relative">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12 mb-32">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/40 mb-8">The Realization</p>
             <h2 className="font-serif text-4xl md:text-8xl font-light leading-[1.1] tracking-tight max-w-5xl text-balance">
               Labels can be maps, but they are rarely <span className="italic font-light text-clay">the journey itself.</span>
             </h2>
          </div>
          
          <div className="md:col-start-5 md:col-span-8 space-y-16">
             <p className="text-xl md:text-3xl font-light leading-relaxed text-ink/80">
               We spend years trying to talk our way out of storms. We analyze, we categorize, we diagnose. But for those of us living in the high-voltage loop of CPTSD and BPD, we know the truth: 
             </p>
             
             <p className="font-serif text-3xl md:text-5xl italic text-clay/80 leading-tight border-l border-sand/50 pl-12 py-4">
               You can understand your trauma perfectly and still feel like your body is a cage.
             </p>

             <p className="text-xl md:text-3xl font-light leading-relaxed text-ink/80">
               Traditional systems often fail because they speak to the mind while the body is shouting a different language. We don&apos;t just talk. We listen to the tissue. We invite the nervous system to drop its guard.
             </p>

             <div className="pt-12">
                <a href="/about" className="text-[11px] font-bold uppercase tracking-[0.5em] border-b border-ink/10 pb-2 hover:border-ink transition-all">
                  The Full Manifesto &rarr;
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
