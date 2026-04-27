export default function TheRealization() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="canvas-container">
        <div className="grid md:grid-cols-12 gap-24 items-start">
          <div className="md:col-span-12 mb-32">
             <p className="caption mb-8">The Realization</p>
             <h2 className="editorial-h2 max-w-5xl">Labels can be maps, but they are rarely <span className="italic font-light">the journey itself.</span></h2>
          </div>
          
          <div className="md:col-start-5 md:col-span-8 space-y-16">
             <p className="manifesto-body text-ink/80">
               We spend years trying to talk our way out of storms. We analyze, we categorize, we diagnose. But for those of us living in the high-voltage loop of CPTSD and BPD, we know the truth: 
             </p>
             
             <p className="font-serif text-3xl md:text-5xl italic text-clay leading-tight border-l-2 border-sand/50 pl-12 py-8">
               You can understand your trauma perfectly and still feel like your body is a cage.
             </p>

             <p className="manifesto-body text-ink/80">
               Traditional systems often fail because they speak to the mind while the body is shouting a different language. We don&apos;t just talk. We listen to the tissue. We invite the nervous system to drop its guard.
             </p>

             <div className="pt-12">
                <a href="/about" className="text-[11px] font-bold uppercase tracking-[0.5em] border-b border-ink/10 pb-2 hover:border-ink transition-all">The Full Manifesto &rarr;</a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
