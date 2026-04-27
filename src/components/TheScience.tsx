export default function TheScience() {
  return (
    <section className="py-48 md:py-80 bg-[#F2EFE9]/30">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-32 items-center">
          <div className="flex-1">
             <div className="aspect-[3/4] bg-[#D9D2C5]/10 rounded-[100px] border border-[#D9D2C5]/20 flex items-center justify-center p-24 relative overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" className="opacity-20 text-[#3E4A34] relative z-10">
                   <path d="M100 20C60 60 40 140 100 180C160 140 140 60 100 20Z" stroke="currentColor" strokeWidth="0.5" />
                   <path d="M20 100C60 60 140 40 180 100C140 160 60 140 20 100Z" stroke="currentColor" strokeWidth="0.5" />
                </svg>
             </div>
          </div>
          
          <div className="flex-1 space-y-16 text-left">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30">The Architecture</p>
             <h2 className="font-serif text-5xl md:text-[7rem] font-light leading-tight">Your fascia is a <br/><span className="italic font-light text-[#3E4A34]">living archive.</span></h2>
             <p className="text-2xl font-light text-black/60 leading-relaxed max-w-lg font-sans">
               Science confirms that trauma isn&apos;t just a thought. It is a physical bracing in your connective tissue. We use somatic movement to signal safety directly to your Vagus nerve.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
