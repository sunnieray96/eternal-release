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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPreview() {
  const [featuredPost, recentPosts] = await Promise.all([
    getFeaturedPost(),
    getRecentPosts(),
  ]);

  const hasSanityData = featuredPost !== null;

  return (
    <section id="blog" className="py-24 md:py-32 bg-cream/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14">
          <div>
            <p className="text-sage font-medium text-sm tracking-[0.2em] uppercase mb-4">
              Journal
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-slate-dark">
              From the Blog
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-0 text-sm font-medium text-sage-dark hover:text-sage transition-colors border-b border-sage/30 hover:border-sage pb/M.5"
          >
            View all posts &rarr;
          </a>
        </div>

        {/* Featured Post */}
        {hasSanityData ? (
          <SanityFeaturedPost post={featuredPost} />
        ) : (
          <FallbackFeaturedPost />
        )}

        {/* Secondary Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {hasSanityData && recentPosts.length > 0
            ? recentPosts.map((post) => (
                <SanityPostCard key={post._id} post={post} />
              ))
            : fallbackSecondaryPosts.map((post, i) => (
                <FallbackPostCard key={i} post={post} />
              ))}
        </div>
      </div>
    </section>
  );
}

function SanityFeaturedPost({ post }: { post: Post }) {
  return (
    <article className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium text-white bg-sage px-3 py-1 rounded-full">
          Featured
        </span>
        {post.category && (
          <span className="text-xs font-medium text-sage bg-sage/10 px-2.5 py-1 rounded-full">
            {CATEGORY_LABELS[post.category] || post.category}
          </span>
        )}
        {post.publishedAt && (
          <span className="text-xs text-stone">
            {formatDate(post.publishedAt)}
          </span>
        )}
        {post.readTime && (
          <span className="text-xs text-stone">
            &middot; {post.readTime} min read
          </span>
        )}
      </div>

      <h3 className="font-serif text-3xl md:text-4xl font-medium text-slate-dark mb-6">
        {post.title}
      </h3>

      <div className="bg-warm-white rounded-2xl border border-cream-dark/40 p-8 md:p-12">
        {post.body && (
          <div className="max-w-3xl mx-auto space-y-6 text-stone text-[16px] md:text-[17px] leading-[1.85] [&>h4]:font-serif [&>h4]:text-2xl [&>h4]:font-medium [&>h4]:text-slate-dark [&>h4]:pt-4">
            <PortableText value={post.body} />
          </div>
        )}
      </div>
    </article>
  );
}

function SanityPostCard({ post }: { post: Post }) {
  return (
    <article className="group cursor-pointer">
      <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-cream-dark to-blush/60 mb-5 overflow-hidden">
        {post.mainImage ? (
          <img
            src={urlFor(post.mainImage).width(640).height(360).url()}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity duration-500">
            <svg
              width="48"
              height="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              className="text-sage-dark"
            >
              <path
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 mb-3">
        {post.category && (
          <span className="text-xs font-medium text-sage bg-sage/10 px-2.5 py-1 rounded-full">
            {CATEGORY_LABELS[post.category] || post.category}
          </span>
        )}
        {post.publishedAt ? (
          <span className="text-xs text-stone">
            {formatDate(post.publishedAt)}
          </span>
        ) : (
          <span className="text-xs text-stone">Coming Soon</span>
        )}
      </div>
      <h3 className="font-serif text-xl font-medium text-slate-dark mb-2 group-hover:text-sage-dark transition-colors duration-300">
        {post.title}
      </h3>
      {post.excerpt && (
        <p className="text-stone text-sm leading-relaxed">{post.excerpt}</p>
      )}
    </article>
  );
}

/* ──── Fallback data (shown when Sanity is not configured) ──── */

const fallbackSecondaryPosts = [
  {
    category: "Somatics",
    title: "Why Your Body Still Thinks It\u2019s in Danger",
    excerpt:
      "When the nervous system gets stuck in fight-or-flight, no amount of thinking can talk it down. Here\u2019s what to do instead.",
  },
  {
    category: "Psychology",
    title: "Parts Work for People Who Feel \u201cToo Much\u201d",
    excerpt:
      "If you\u2019ve been told you\u2019re \u201ctoo sensitive\u201d or \u201ctoo intense,\u201d your parts are trying to protect you. Let\u2019s learn to listen.",
  },
];

function FallbackFeaturedPost() {
  return (
    <article className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium text-white bg-sage px-3 py-1 rounded-full">
          Featured
        </span>
        <span className="text-xs font-medium text-sage bg-sage/10 px-2.5 py-1 rounded-full">
          Fascia &amp; Somatics
        </span>
        <span className="text-xs text-stone">Apr 26, 2026</span>
        <span className="text-xs text-stone">&middot; 12 min read</span>
      </div>

      <h3 className="font-serif text-3xl md:text-4xl font-medium text-slate-dark mb-6">
        The Biology of Fear
      </h3>

      <div className="bg-warm-white rounded-2xl border border-cream-dark/40 p-8 md:p-12">
        <div className="max-w-3xl mx-auto space-y-6 text-stone text-[16px] md:text-[17px] leading-[1.85]">
          <p>
            For years, we have been told that healing happens in the mind. We are taught
            that if we can just talk about our past enough, understand our triggers deeply
            enough, or think positively enough, we will finally be free. But for those of
            us living with CPTSD, BPD, or the long shadow of childhood trauma, we know the
            truth. You can understand your trauma perfectly and still feel like your body is
            a cage.
          </p>

          <p className="font-medium text-slate-dark text-lg md:text-xl leading-[1.8] italic">
            This is because your trauma doesn&apos;t just live in your memories. It lives
            in your fascia.
          </p>

          <h4 className="font-serif text-2xl font-medium text-slate-dark pt-4">
            The Body&apos;s Living Archive
          </h4>

          <p>
            Fascia is the silvery, web-like connective tissue that wraps around every
            muscle, organ, and nerve in your body. For a long time, science dismissed it as
            mere &ldquo;packaging&rdquo; for our muscles. We now know that fascia is
            actually our largest sensory organ, more sensitive than the skin and more
            communicative than our eyes.
          </p>

          <p>
            When we experience a threat, especially the prolonged threats of abuse, neglect,
            or the primal wound of early abandonment, our nervous system enters a state of
            high-voltage survival. To protect us, our fascia physically tightens. It
            dehydrates, becomes sticky, and creates a literal layer of armor around our
            organs. This is why you feel stiff, why your posture collapses, and why your
            muscles feel like they are perpetually braced for an impact that never comes.
          </p>

          <h4 className="font-serif text-2xl font-medium text-slate-dark pt-4">
            The Trap of Talk Therapy
          </h4>

          <p>
            If you have ever felt &ldquo;stuck&rdquo; in talk therapy, there is a
            biological reason for it. In her research on trauma, pioneers like Dr. Bessel
            van der Kolk have shown that when we are triggered or asked to recount a
            traumatic memory, the amygdala fires as if the event is happening right now.
            Simultaneously, the Broca&apos;s area, the part of the brain responsible for
            speech, often shuts down.
          </p>

          <p>
            We are essentially trying to speak our way out of a state where the brain has
            disabled our ability to talk. Furthermore, because the brain cannot differentiate
            between a memory and a current threat, simply &ldquo;talking it out&rdquo; can
            often retraumatize the system, keeping the fascia in a state prmanent
            contraction.
          </p>

          <h4 className="font-serif text-2xl font-medium text-slate-dark pt-4">
            The Failure of the &ldquo;Happy-Go-Lucky&rdquo; Mask
          </h4>

          <p>
            In the spiritual world, there is a pervasive pressure to
            be &ldquo;positive.&rdquo; We seie it in
            the &ldquo;happy-go-lucky&rdquo; spiritual bypassing that tells us to
            just &ldquo;let go&rdquo; and find the light. But as Carl Jung famously
            reminded us, we cannot become whole by ignoring our shadows.
          </p>

          <p>
            When we force a &ldquo;Sunnie&rdquo; disposition over a body that is screaming
            in pain, we are practicing what science calls experiential avoidance. Studies
            show that this avoidance is a primary driver of chronic psychological distress.
            By refusing to feel the stiffness, the rage, and the grief, we are physically
            locking those emotions into our tissue. You cannot &ldquo;light and
            love&rdquo; your way out of a frozen psoas.
          </p>

          <h4 className="font-serif text-2xl font-medium text-slate-dark pt-4">
            The Middle Ground: Reclaiming the Flow
          </h4>

          <p>
            At Eternal Release, we believe in the middle ground. We don&apos;t ask you to
            bypass your darkness or &ldquo;think&rdquo; your way to peace. Instead, we
            speak the language of the body.
          </p>

          <p>
            Through somatic release, we signal safety to the Vagus nerve. We use gentle,
            intentional movement to re-hydrate the fascia and melt the armor that was built
            for survival. When the body finally feels safe enough to drop its guard, the
            mind follows.
          </p>

          <p className="font-medium text-slate-dark leading-[1.85]">
            Healing isn&apos;t about becoming a &ldquo;perfect&rdquo; version of yourself.
            It is about building a body that is resilient and agile enough to hold the full
            spectrum of your human experience. It is about finally, after all these years,
            being able to live in your own skin.
          </p>
        </div>
      </div>
    </article>
  );
}
