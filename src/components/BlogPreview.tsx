import { client } from "@/sanity/lib/client";
import { FEATURED_POST_QUERY, RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function BlogPreview() {
  const recentPosts = await client.fetch(RECENT_POSTS_QUERY).catch(() => []);
  const hasPosts = recentPosts && recentPosts.length > 0;

  const CATEGORY_LABELS: Record<string, string> = {
    "fascia-somatics": "Fascia & Somatics",
    somatics: "Somatics",
    psychology: "Psychology",
    "nervous-system": "Nervous System",
    healing: "Healing",
  };

  return (
    <section id="blog" className="py-32 md:py-56 bg-white relative">
       <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-sand/5 rounded-full blur-[100px]" />
       
      <div className="editorial-container relative">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-32 border-b border-sand/30 pb-10">
          <div>
            <p className="text-terracotta font-medium text-xs tracking-[0.3em] uppercase mb-4">
              Journal
            </p>
            <h2 className="font-serif text-5xl md:text-7xl font-medium text-slate-dark">
              From the Blog
            </h2>
          </div>
          <a
            href="/studio"
            className="mt-8 md:mt-0 text-[10px] font-bold uppercase tracking-[0.3em] text-sage-dark hover:text-terracotta transition-colors flex items-center gap-3"
          >
            Dashboard <span>&rarr;</span>
          </a>
        </div>

        {!hasPosts ? (
          <div className="grid md:grid-cols-2 gap-20">
             <div className="space-y-12 opacity-40">
                <div className="aspect-[4/5] bg-cream-dark/30 wabi-border flex items-center justify-center p-20 text-center">
                   <div>
                      <p className="font-serif text-2xl text-slate-dark mb-4 italic">The Biology of Fear</p>
                      <p className="text-xs uppercase tracking-widest text-stone">Coming Soon</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <p className="text-terracotta text-[10px] uppercase tracking-widest font-bold">Fascia & Somatics</p>
                   <h3 className="font-serif text-4xl text-slate-dark leading-tight italic">Why your body still thinks it is in danger.</h3>
                </div>
             </div>
             <div className="flex flex-col justify-center bg-cream/20 p-16 wabi-border">
                <p className="font-serif text-3xl text-slate-dark/60 leading-relaxed italic mb-10">
                   Your journal is currently a sanctuary of silence. 🕊️
                </p>
                <p className="text-stone font-light leading-relaxed mb-10">
                   Log in to your Sanity Studio to share your first deep-dive into the intersection of science and soul.
                </p>
                <a href="/studio" className="px-10 py-4 bg-slate-dark text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-sage transition-all w-fit shadow-lg">
                   Publish First Post
                </a>
             </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-16">
            {recentPosts.map((post: any) => (
               <article key={post._id} className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden wabi-border mb-8 bg-cream/30">
                     {post.mainImage && (
                        <img src={urlFor(post.mainImage).url()} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     )}
                  </div>
                  <p className="text-terracotta text-[10px] uppercase tracking-widest font-bold mb-4">{CATEGORY_LABELS[post.category || ""] || "Journal"}</p>
                  <h3 className="font-serif text-4xl text-slate-dark leading-tight italic group-hover:text-sage-dark transition-colors">{post.title}</h3>
               </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
