export default function TheScience() {
  return (
    <section className="py-48 md:py-80 bg-[#F2EFE9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-32 items-center">
          <div className="flex-1 space-y-16 text-left">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black opacity-30">The Architecture</p>
             <h2 className="font-serif text-5xl md:text-[9rem] font-light leading-tight text-black tracking-tighter">
                Your fascia is a <br/><span className="italic font-light text-[#3E4A34]">living archive.</span>
             </h2>
             <p className="text-2xl md:text-3xl font-light text-black/60 leading-relaxed max-w-lg">
               Science confirms that trauma isn&apos;t just a thought. It is a physical bracing in your connective tissue. We use somatic movement to signal safety directly to your Vagus nerve, allowing the body to finally drop its guard.
             </p>
             
             <div className="pt-12 border-t border-black/5 flex gap-16">
                <div className="flex flex-col gap-2">
                   <span className="text-clay font-bold text-[10px] uppercase tracking-[0.2em]">fMRI Validated</span>
                   <p className="text-xs font-serif italic opacity-40">Nervous System Mapping</p>
                </div>
                <div className="flex flex-col gap-2">
                   <span className="text-[#3E4A34] font-bold text-[10px] uppercase tracking-[0.2em]">Vagus Activation</span>
                   <p className="text-xs font-serif italic opacity-40">Biological Safety Loop</p>
                </div>
             </div>
          </div>
          
          <div className="flex-1">
             <div className="aspect-[3/4] bg-sand/10 rounded-[100px] border border-sand/20 overflow-hidden relative">
                <img 
                  src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/cf32f8b8961541939f851db417ec776a_pexels-daria-liudnaya-8187528.jpg" 
                  alt="Fascia" 
                  className="w-full h-full object-cover opacity-70 transition-all duration-[2s]"
                />
                <div className="absolute inset-0 flex items-center justify-center p-24 pointer-events-none">
                   <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" className="opacity-20 text-white">
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
