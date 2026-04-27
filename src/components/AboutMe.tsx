import { client } from "@/sanity/lib/client";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";

interface AboutData {
  title: string;
  subtitle: string;
  body: any;
}

async function getAboutData(): Promise<AboutData | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
    const data = await client.fetch(ABOUT_QUERY);
    return data;
  } catch {
    return null;
  }
}

export default async function AboutMe() {
  const about = await getAboutData();

  return (
    <section id="about" className="py-32 md:py-56 bg-cream/40 relative">
       {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/handmade-paper.png")' }} />
           
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-20">
          <div className="md:sticky md:top-32 h-fit">
            <p className="text-terracotta font-medium text-xs tracking-[0.3em] uppercase mb-6">
              The Path
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-slate-dark mb-10 leading-tight">
              {about?.title || "Beyond the Labels"}
            </h2>
            <div className="w-16 h-px bg-sand mb-8" />
            <p className="font-serif text-xl italic text-sage-dark">
              {about?.subtitle || "Sunnie Ray"}
            </p>
          </div>

          <div className="space-y-10 text-stone text-xl md:text-2xl leading-[1.8] font-light">
            {about?.body ? (
              <div className="prose prose-stone max-w-none prose-p:mb-10">
                <PortableText value={about.body} />
              </div>
            ) : (
              <FallbackContent />
            )}
            
            {/* Signature Area */}
            <div className="pt-20 opacity-30">
               <svg width="150" height="60" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 30C30 10 70 10 90 30C110 50 140 50 140 30" stroke="currentColor" strokeWidth="1.5" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FallbackContent() {
  return (
    <>
      <p>
        My name is Sunnie Ray, and yes, it is my birth name. My mother thought she was
        being clever, but for a long time, it felt like a cruel irony. When your name
        is &ldquo;Sunnie,&rdquo; the world expects you to be a constant source of light,
        but my reality was a shadow. 
      </p>

      <p>
        My story began with a primal wound: I was adopted at six months old. Before I 
        had a single word to describe my world, my nervous system had already learned 
        the language of loss and abandonment.
      </p>

      <p className="italic font-medium text-slate-dark border-l-2 border-sage/40 pl-10 my-16">
        &ldquo;I&apos;d rather be whole than good.&rdquo; — Carl Jung
      </p>

      <p>
        Talk therapy often failed me because the brain cannot always differentiate 
        between a memory and a current threat. For many, this doesn&apos;t heal; it retraumatizes.
      </p>

      <p>
        As a psychology student and yoga teacher, I found the bridge in Somatic Release
        and Fascia. We move beyond bypassing and back into the natural flow of the body.
      </p>

      <p className="text-slate-dark font-medium leading-[1.6] pt-10">
        We are reclaiming our right to be whole, to be agile, and to
        finally live in our own skin.
      </p>
    </>
  );
}
