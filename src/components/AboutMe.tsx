import { client } from "@/sanity/lib/client";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";

export default async function AboutMe() {
  const about = await client.fetch(ABOUT_QUERY).catch(() => null);

  return (
    <section id="about" className="py-32 md:py-48 bg-white/40">
      <div className="editorial-container">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-16 md:gap-24 items-start">
          <div className="md:col-span-4 md:sticky md:top-32">
             <p className="text-terracotta text-[10px] uppercase tracking-[0.4em] font-bold mb-6">The Essence</p>
             <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-12">
               {about?.title || "Beyond the Labels"}
             </h2>
             <div className="w-16 h-px bg-sand mb-8" />
             <p className="font-serif text-xl italic text-sage-dark">{about?.subtitle || "Sunnie Ray"}</p>
          </div>

          <div className="md:col-span-8 space-y-12 manifesto-text text-secondary">
             {about?.body ? (
               <PortableText value={about.body} />
             ) : (
               <>
                 <p>My name is Sunnie Ray, and yes, it is my birth name. My mother thought she was being clever, but for a long time, it felt like a cruel irony.</p>
                 <p>My story began with a primal wound: I was adopted at six months old. Before I had a word to describe my world, my nervous system had learned the language of loss.</p>
                 <p className="font-serif italic text-primary text-3xl py-12 border-y border-sand/30 my-16">
                    &ldquo;I&apos;d rather be whole than good.&rdquo; — Carl Jung
                 </p>
                 <p>Talk therapy often failed me because the brain cannot differentiate between a memory and a current threat. For many, this retraumatizes. I found the bridge in Somatic Release and Fascia.</p>
                 <p className="font-medium text-primary pt-8">We are reclaiming our right to be whole, to be agile, and to finally live in our own skin.</p>
               </>
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
