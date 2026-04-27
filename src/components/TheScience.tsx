export default function TheScience() {
  return (
    <section className="py-32 md:py-64 bg-bone/40">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-24 md:gap-40 items-center">
          <div className="flex-1 order-2 md:order-1">
             <div className="aspect-[3/4] bg-sand/10 rounded-[80px] relative overflow-hidden flex items-center justify-center p-20 border border-sand/20">
                <div className="w-full h-full rounded-full border border-moss/10 animate-pulse" />
                <div className="absolute inset-20 border border-clay/5 rounded-full" />
             </div>
          </div>
          
          <div className="flex-1 space-y-12 order-1 md:order-2">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/40">The Architecture of Memory</p>
             <h2 className="font-serif text-4xl md:text-7xl font-light leading-tight tracking-tight">
               Your fascia is your largest <span className="italic font-light text-moss">sensory organ.</span>
             </h2>
             <p className="text-xl font-light text-ink/60 leading-relaxed">
               Science now confirms that fascia is the biological archive of our lives. When we are stuck in survival mode, this silvery web of tissue physically armorizes to protect us. It dehydrates, becomes sticky, and traps the Vagus nerve in a feedback loop of fear.
             </p>
             <ul className="space-y-10 pt-8">
                <li className="flex gap-8 items-start">
                   <span className="font-serif italic text-2xl text-clay/60">01.</span>
                   <p className="text-lg font-light leading-relaxed">Somatic movements signal safety directly to the brainstem.</p>
                </li>
                <li className="flex gap-8 items-start">
                   <span className="font-serif italic text-2xl text-clay/60">02.</span>
                   <p className="text-lg font-light leading-relaxed">Fascial release melts the physical archive of chronic stress.</p>
                </li>
                <li className="flex gap-8 items-start">
                   <span className="font-serif italic text-2xl text-clay/60">03.</span>
                   <p className="text-lg font-light leading-relaxed">Agility in the body creates resilience in the complex mind.</p>
                </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
