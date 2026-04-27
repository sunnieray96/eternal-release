import { client } from "@/sanity/lib/client";
import {
  FEATURED_POST_QUERY,
  RECENT_POSTS_QUERY,
} from "@/sanity/lib/queries";

interface Post {
  _id: string;
  title: string;
  excerpt?: string;
  category?: string;
}

export default async function BlogPreview() {
  let featured: Post | null = null;
  let posts: Post[] = [];

  try {
    featured = await client.fetch(FEATURED_POST_QUERY);
    posts = await client.fetch(RECENT_POSTS_QUERY);
  } catch {
    // fallback content if sanity fails
    posts = [
      {
        _id: "1",
        title: "Why your nervous system feels stuck",
        excerpt: "Understanding stored stress and fascia",
        category: "Healing",
      },
      {
        _id: "2",
        title: "Misdiagnosis and the body",
        excerpt: "When symptoms aren’t what they seem",
        category: "Awareness",
      },
    ];
  }

  return (
    <section id="blog" className="px-6 py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-stone-900 mb-10">
          Journal
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-green-700 mb-3">
        {post.category || "Journal"}
      </p>

      <h3 className="font-serif text-2xl text-stone-900 mb-3">
        {post.title}
      </h3>

      <p className="text-stone-700 leading-7">
        {post.excerpt || "No excerpt available."}
      </p>
    </article>
  );
}
