import { client } from "@/sanity/lib/client";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function BlogPreview() {
  const posts = await client.fetch(RECENT_POSTS_QUERY).catch(() => []);

  return (
    <section id="blog" className="py-32 md:py-48 bg-white">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8 border-b border-sand pb-10">
          <div>
             <p className="text-terracotta text-[10px] uppercase tracking-[0.4em] font-bold mb-4">The Journal</p>
             <h2 className="text-5xl md:text-8xl font-medium">Stories & Science</h2>
          </div>
          <a href="/studio" className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/60 hover:text-accent">Manage Journal &rarr;</a>
        </div>

        {posts.length === 0 ? (
          <div className="grid md:grid-cols-2 gap-20">
             <div className="opacity-50">
                <div className="aspect-[3/4] bg-cream-dark/20 wabi-border flex items-center justify-center mb-10">
                   <p className="font-serif italic text-secondary/30 text-xl">The Biology of Fear</p>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-4 text-terracotta">Fascia & Somatics</p>
                <h3 className="text-3xl font-serif italic mb-4">The Body’s Living Archive</h3>
             </div>
             <div className="flex flex-col justify-center">
                <p className="font-serif text-3xl italic text-primary/60 leading-relaxed mb-10">Your journal is currently silent. 🕊️</p>
                <p className="text-secondary font-light text-lg mb-12 leading-relaxed">Log in to publish your first deep-dive into the intersection of science and soul.</p>
                <a href="/studio" className="w-fit px-10 py-4 bg-primary text-white rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-sage shadow-lg transition-all">Publish Story</a>
             </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-20">
             {/* Map posts */}
          </div>
        )}
      </div>
    </section>
  );
}
