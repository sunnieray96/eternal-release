import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";

export default async function AboutPage() {
  const about = await client.fetch(ABOUT_QUERY).catch(() => null);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <p className="text-terracotta text-[10px] uppercase tracking-[0.4em] font-bold mb-10 opacity-80">
              Our Manifesto
            </p>
            <h1 className="font-serif text-5xl md:text-8xl font-medium leading-[1.1] mb-16">
               Beyond the Labels: <br />
               <span className="italic font-light text-sage-dark">The Science of a Raw Soul</span>
            </h1>

            <div className="space-y-12 manifesto-text text-secondary">
              {about?.body ? (
                <PortableText value={about.body} />
              ) : (
                <div className="space-y-12">
                  <p>My name is Sunnie Ray, and yes, it is my birth name. My mother thought she was being clever, but for a long time, it felt like a cruel irony. When your name is &ldquo;Sunnie,&rdquo; the world expects you to be a constant source of light, but my reality was a shadow. My story began with a primal wound: I was adopted at six months old. Before I had a single word to describe my world, my nervous system had already learned the language of loss and abandonment.</p>

                  <p>That early imprint was compounded by years of abuse, neglect, and sexual assault that followed my adoption. By my early twenties, I was a walking storm, angry, unruly, and struggling with attachment issues so extreme they terrified the professionals. I&apos;ve had therapists quit on me. I&apos;ve been called &ldquo;too much,&rdquo; and &ldquo;unstable.&rdquo; I was cycled through labels like Bipolar, BPD, and even Autism, diagnoses that tried to explain my symptoms without ever touching the fire that caused them. While labels can be helpful for some, they never helped guide me through the experience. I was stiff, tense, anxious, and reactive.</p>

                  <p>The light finally flickered when I worked with a psychiatrist whose background in Traditional Chinese Medicine allowed him to see me holistically. He used yoga, sensory deprivation, and art therapy. He was the one who finally looked past the surface and formally diagnosed me with CPTSD. He saw a human being where others saw a &ldquo;case.&rdquo; But even with that brilliance, there was a missing link. We were doing the work, but my body was still bracing.</p>

                  <p>I quickly learned that for many of us with CPTSD and BPD, traditional talk therapy can be a trap. Science shows that when we recount trauma, the brain cannot always differentiate between a memory and a current threat. Research using fMRI scans, notably discussed by Dr. Bessel van der Kolk in <em className="text-primary">The Body Keeps the Score</em>, shows that during trauma recall, the amygdala (the brain&apos;s alarm center) hyper-activates while the Broca&apos;s area (the speech center) often shuts down. We are literally forced to try and &ldquo;talk&rdquo; our way out of a state where the brain has disabled speech. For many, this doesn&apos;t resolve the symptoms; it retraumatizes.</p>

                  <p>I practiced yoga to get out of my mind and into my body, but because I was stuck in a chronic &ldquo;fight-or-flight&rdquo; loop, I was making my stiffness and posture worse. I didn&apos;t realize I was &ldquo;bracing&rdquo; into the poses, reinforcing the fascia-armor my body had built to survive. I was trying to force peace onto a system that didn&apos;t yet feel safe.</p>

                  <p className="font-serif italic text-primary text-3xl md:text-4xl py-16 border-y border-sand/30 my-20">
                    &ldquo;I&apos;d rather be whole than good.&rdquo; — Carl Jung
                  </p>

                  <p>This is why I don&apos;t believe in spiritual bypassing, that &ldquo;happy-go-lucky&rdquo; positivity that some use to mask their pain. By trying to be &ldquo;good&rdquo; or &ldquo;sunny,&rdquo; I was physically locking my rage and grief into my tissue. Science calls this experiential avoidance, and studies show it is a primary driver of chronic psychological distress. We are the middle ground. We don&apos;t bypass the darkness; we move through it.</p>

                  <p>As a psychology student and yoga teacher, I found the bridge in Somatic Release and Fascia. Your fascia is your largest sensory organ and the biological archive of your life. When you are traumatized, your fascia physically tightens to create a &ldquo;shield&rdquo; for your nervous system. At Eternal Release, we use somatic movement to signal safety to the Vagus nerve, allowing the body to finally drop its guard and hydrate the &ldquo;stuck&rdquo; tissue.</p>

                  <p className="font-medium text-primary pt-12 italic">
                    I truly believe that a flexible, agile body is the gateway to a resilient mind. We are reclaiming our right to be whole, to be agile, and to finally live in our own skin.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-32 pt-20 border-t border-sand/20 text-center">
               <a href="/" className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 hover:text-accent transition-colors">Back to Home</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
