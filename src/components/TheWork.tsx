const pillars = [
  { id: "01", title: "Somatics", text: "Tuning into the body's subtle language to discharge trapped survival energy and restore felt safety." },
  { id: "02", title: "Fascia", text: "Unlocking the connective tissue that holds the physical archive of your history and emotional armor." },
  { id: "03", title: "Psychology", text: "Trauma-informed insight that honors your whole experience, moving beyond labels into integration." }
];

export default function TheWork() {
  return (
    <section id="work" className="py-48 md:py-80 bg-[#F2EFE9]/30">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row gap-32 items-center">
          <div className="flex-1">
             <div className="aspect-[3/4] bg-[#D9D2C5]/10 rounded-[100px] border border-[#D9D2C5]/20 flex items-center justify-center p-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544126592-807daa2b5d7a?q=80&w=1000')] bg-cover bg-center" />
                <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" className="opacity-20 text-[#3E4A34] relative z-10">
                   <path d="M100 20C60 60 40 140 100 180C160 140 140 60 100 20Z" stroke="currentColor" strokeWidth="0.5" />
                   <path d="M20 100C60 60 140 40 180 100C140 160 60 140 20 100Z" stroke="currentColor" strokeWidth="0.5" />
                </svg>
             </div>
          </div>
          
          <div className="flex-1 space-y-20 text-left">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1C1C1C]/30">The Architecture</p>
             <h2 className="font-serif text-5xl md:text-[7rem] font-light leading-tight">Your fascia is a <br/><span className="italic font-light text-[#3E4A34]">living archive.</span></h2>
             
             <div className="space-y-16">
                {pillars.map(p => ( 
                   <div key={p.id} className="group text-left">
                      <div className="flex items-baseline gap-8 mb-4">
                         <span className="text-xs font-bold text-[#A8613F]/40 tracking-widest">{p.id}</span>
                         <h3 className="text-3xl italic font-serif text-[#1C1C1C]">{p.title}</h3>
                      </div>
                      <p className="text-[#1C1C1C]/60 font-light leading-relaxed max-w-md">{p.text}</p>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
