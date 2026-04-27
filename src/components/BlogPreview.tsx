const blogTopics = [
  { title: "The Biology of Fear", cat: "Science", excerpt: "Why your fascia remembers what your mind wants to forget." },
  { title: "The Vagus Brake", cat: "Somatics", excerpt: "How to signal safety directly to the brainstem in under three minutes." },
  { title: "Beyond the Bypass", cat: "Psychology", excerpt: "The danger of forced positivity and the path to true wholeness." }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-48 md:py-80 bg-[#FCFAF7]">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-40 border-b border-sand pb-12">
          <div>
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8 uppercase">The Journal</p>
             <h2 className="font-serif text-5xl md:text-[10rem] font-light tracking-tighter text-black leading-none">Stories</h2>
          </div>
          <a href="/studio" className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 hover:text-clay transition-all no-underline">Dashboard &rarr;</a>
        </div>

        <div className="grid md:grid-cols-3 gap-24 md:gap-32">
           {blogTopics.map(t => (
              <article key={t.title} className="space-y-16 group opacity-80 hover:opacity-100 transition-opacity text-left">
                 <div className="aspect-square rounded-full border border-sand/30 flex items-center justify-center p-16 transition-all duration-1000 group-hover:border-clay/40 overflow-hidden">
                    <div className="w-full h-full rounded-full border-[0.5px] border-black/10 animate-pulse" />
                 </div>
                 <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-clay mb-8">{t.cat}</p>
                    <h3 className="font-serif text-4xl md:text-5xl italic leading-[1.2] text-black mb-10 underline decoration-sand/50 decoration-1 underline-offset-8">{t.title}</h3>
                    <p className="text-lg font-light leading-relaxed text-black/50">{t.excerpt}</p>
                 </div>
              </article>
           ))}
        </div>
      </div>
    </section>
  );
}
