import { client } from "@/sanity/lib/client";
import { FEATURED_POST_QUERY, RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage?: { asset: { _ref: string } };
  publishedAt?: string;
  category?: string;
  featured?: boolean;
  readTime?: number;
  excerpt?: string;
  body?: any;
}

const CATEGORY_LABELS: Record<string, string> = {
  "fascia-somatics": "Fascia & Somatics",
  somatics: "Somatics",
  psychology: "Psychology",
  "nervous-system": "Nervous System",
  healing: "Healing",
};

async function getFeaturedPost(): Promise<Post | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
    return await client.fetch(FEATURED_POST_QUERY);
  } catch {
    return null;
  }
}

async function getRecentPosts(): Promise<Post[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
    return await client.fetch(RECENT_POSTS_QUERY);
  } catch {
    return [];
  }
}

export default async function BlogPreview() {
  const featuredPost = await getFeaturedPost();
  const recentPosts = await getRecentPosts();

  const hasSanityData = featuredPost !== null;

  return (
    <section id="blog" className="py-32 md:py-48 bg-warm-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 border-b border-sage/10 pb-8">
          <div>
            <p className="text-terracotta font-medium text-xs tracking-[0.3em] uppercase mb-4">
              Journal
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-slate-dark">
              From the Blog
            </h2>
          </div>
          <a
            href="/studio"
            className="mt-6 md:mt-0 text-xs font-medium uppercase tracking-[0.2em] text-sage-dark hover:text-terracotta transition-colors"
          >
            Manage Content &rarr;
          </a>
        </div>

        {!recentPosts.length ? (
          <div className="text-center py-24 border-2 border-dashed border-sage/10 rounded-[40px] bg-cream/20">
            <h3 className="font-serif text-3xl text-slate-dark mb-4 opacity-60">Your Journal is Empty</h3>
            <p className="text-stone max-w-sm mx-auto mb-8 font-light">
              Log in to the Studio to publish your first "Science meets Soul" deep-dive.
            </p>
            <a href="/studio" className="py-8 py-3 bg-sage/10 text-sage-dark rounded-full text-sm font-medium hover:bg-sage/20 transition-all">
               Go to Dashboard
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-16">
            {trecentPosts.map((post) => (
               <article key={post._id} className="group">
                  <div className="aspect-[16/9] rounded-[30px] overflow-hidden bg-cream/50 mb-8 border border-sage/5">
                    {post.mainImage ? (
                      <img src={urlFor(post.mainImage).url()} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-duration-700" />
                    ) : (div className="w-full h-full flex items-center justify-center text-sage/30"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 3v15m-6-6h12" /></svg></div>) }
                  </div>
                  <p className="text-terracotta text-[10px] uppercase tracking-widest mb-4 font-bold">{CATEGORY_LABELS[post.category || "'] || "Healing"}</p>
                  <h3 className="font-serif text-3xl text-slate-dark mb-4 group-hover:text-sage transition-colors">{post.title}</h3>
                  <p className="text-stone font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
               </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
