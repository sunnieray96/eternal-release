export default function TheScience() {
  return (
    <section className="section-padding bg-bone/50">
      <div className="canvas-container">
        <div className="flex flex-col md:flex-row gap-32 items-center">
          <div className="flex-1">
             <div className="aspect-[3/4] bg-sand/20 rounded-[60px] relative overflow-hidden flex items-center justify-center p-20">
                <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 text-moss">
                   <path d="M100 20C60 60 40 140 100 180C160 140 140 60 100 20Z" stroke="currentColor" strokeWidth="0.5" />
                   <path d="M20 100C60 60 140 40 180 100C140 160 60 140 20 100Z" stroke="currentColor" strokeWidth="0.5" />
                </svg>
             </div>
          </div>
          
          <div className="flex-1 space-y-12">
             <p className="caption">The Architecture of Memory</p>
             <h2 className="editorial-h2">Your fascia is your largest <span className="italic font-light">sensory organ.</span></h2>
             <p className="text-xl font-light text-ink/60 leading-relaxed">
               Science now confirms that fascia is the biological archive of our lives. When we are stuck in survival mode, this silvery web of tissue physically armorizes to protect us. It dehydrates, becomes sticky, and traps the Vagus nerve in a feedback loop of fear.
             </p>
             <ul className="space-y-8 pt-8">
                <li className="flex gap-6 items-baseline">
                   <span className="font-serif italic text-2xl text-clay">01.</span>
                   <span className="text-lg font-light">Somatic movements signal safety to the brainstem.</span>
                </li>
                <li className="flex gap-6 items-baseline">
                   <span className="font-serif italic text-2xl text-clay">02.</span>
                   <span className="text-lg font-light">Fascial release melts the physical archive of stress.</span>
                </li>
                <li className="flex gap-6 items-baseline">
                   <span className="font-serif italic text-2xl text-clay">03.</span>
                   <span className="text-lg font-light">Agility in the body creates resilience in the mind.</span>
                </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
