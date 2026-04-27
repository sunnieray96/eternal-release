import { client } from "@/sanity/lib/client";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";

const blogTopics = [
  { title: "The Biology of Fear", cat: "Science", excerpt: "Why your fascia remembers what your mind wants to forget." },
  { title: "The Vagus Brake", cat: "Somatics", excerpt: "How to signal safety directly to the brainstem in under three minutes." },
  { title: "Beyond the Bypass", cat: "Psychology", excerpt: "The danger of forced positivity and the path to true wholeness." }
];

export default async function BlogPreview() {
  return (
    <section id="blog" className="py-48 md:py-80 bg-[#FCFAF7]">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-40 border-b border-sand pb-12">
          <div>
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">The Journal</p>
             <h2 className="font-serif text-5xl md:text-[10rem] font-light tracking-tighter text-black leading-none">Stories</h2>
          </div>
          <a href="/studio" className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 hover:text-clay transition-all no-underline">Dashboard &rarr;</a>
        </div>

        <div className="grid md:grid-cols-3 gap-24">
           {blogTopics.map(t => (
              <article key={t.title} className="space-y-12 group opacity-80 hover:opacity-100 transition-opacity">
                 <div className="aspect-square rounded-full border border-sand/30 flex items-center justify-center p-12 transition-all duration-700 group-hover:border-clay/40">
                    <div className="w-full h-full rounded-full border-[0.5px] border-black/5" />
                 </div>
                 <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-clay mb-6">{t.cat}</p>
                    <h3 className="font-serif text-4xl italic leading-tight text-black mb-10 underline decoration-sand/50 decoration-1 underline-offset-8">{t.title}</h3>
                    <p className="text-lg font-light leading-relaxed text-black/50 font-sans">{t.excerpt}</p>
                 </div>
              </article>
           ))}
        </div>
      </div>
    </section>
  );
}
