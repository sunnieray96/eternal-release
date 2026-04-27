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
    <section id="about" className="py-24 md:py-32 bg-cream/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sage font-medium text-sm tracking-[0.2em] uppercase mb-4">
            My Story
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-slate-dark mb-3">
            {about?.title || "About Me"}
          </h2>
          <p className="font-serif text-xl md:text-2xl italic text-sage-dark">
            {about?.subtitle || "Sunnie Ray"}
          </p>
        </div>

        <div className="space-y-6 text-stone text-[16px] md:text-[17px] leading-[1.85]">
          {about?.body ? (
            <div className="prose prose-stone max-w-none [&>p]:mb-6 [&>p]:leading-[1.85] [&>p:last-child]:font-medium [&>p:last-child]:text-slate-dark">
              <PortableText value={about.body} />
            </div>
          ) : (
            <FallbackContent />
         0)}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-px w-16 bg-sand" />
          <div className="w-2 h-2 rounded-full bg-sage/30 mx-4" />
          <div className="h-px w-16 bg-sand" />
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
        but my reality was a shadow. My story began with a primal wound: I was adopted at
        six months old. Before I had a single word to describe my world, my nervous system
        had already learned the language of loss and abandonment.
      </p>

      <p>
        That early imprint was compounded by years of abuse, neglect, and sexual assault
        that followed my adoption. By my early twenties, I was a walking storm, angry,
        unruly, and struggling with attachment issues so extreme they terrified the
        professionals. I&apos;ve had therapists quit on me. I&apos;ve been
        called &ldquo;too much,&rdquo; &ldquo;reactive,&rdquo;
        and &ldquo;unstable.&rdquo; I was cycled through labels like Bipolar, BPD, and
        even Autism, diagnoses that tried to categorize
        my &ldquo;bad behavior&rdquo; without ever touching the fire that caused it.
        While labels can be helpful for some, they never helped guide me through the
        symptoms. I was stiff, tense, anxious, and reactive.
      </p>

      <p>
        The light finally flickered when I worked with a psychiatrist whose background in
        Traditional Chinese Medicine (TCM) in China allowed him to see me holistically.
        He used yoga, sensory deprivation, and art therapy to treat me. He was the one
        who finally looked past the surface and formally diagnosed me with CPTSD. He saved
        me by seeing a human being where others saw a &ldquo;case.&rdquo; But even with
        that brilliance, there was a missing link. We were doing the work, but my body was
        still bracing.
      </p>

      <p>
        I quickly learned that for many of us with CPTSD and BPD, traditional talk therapy
        can be a trap. Science shows that when we recount trauma, the brain cannot always
        differentiate between a memory and a current threat. Research using fMRI scans,
        notably discussed by Dr. Bessel van der Kolk in{" "}
        <em className="text-sage-dark">The Body Keeps the Score</em>, shows that during
        trauma recall, the amygdala (the brain&apos;s alarm center) hyper-activates while
        the Broca&apos;s area (the speech center) often shuts down. We are literally forced
        to try and &ldquo;talk&rdquo; our way out of a state where the brain has disabled
        our ability to speak. For many, this doesn&apos;t heal; it retraumatizes.
      </p>

      <p>
        I practiced yoga to get out of my mind and into my body, but because I was stuck in
        a chronic &ldquo;fight-or-flight&rdquo; loop, I was making my stiffness and posture
        worse. I didn&apos;t realize I was &ldquo;bracing&rdquo; into the poses, reinforcing
        the fascia-armor my body had built to survive. I was trying to force peace onto a
        system that didn&apos;t yet feel safe.
      </p>

      <p>
        This is why I don&apos;t believe in spiritual bypassing,
        that &ldquo;happy-go-lucky&rdquo; positivity that some use to mask their pain.
        Carl Jung famously said, &ldquo;I&apos;d rather be whole than good.&rdquo; By
        trying to be &ldquo;good&rdquo; or &ldquo;sunny,&rdquo; I was physically locking
        my rage and grief into my tissue. Science calls this experiential avoidance, and
        studies show it is a primary driver of chronic psychological distress. We are the
        middle ground. We don&apos;t bypass the darkness; we move through it.
      </p>

      <p>
        As a psychology student and yoga teacher, I found the bridge in Somatic Release
        and Fascia. Your fascia is your largest sensory organ and the biological archive
        of your life. When you are traumatized, your fascia physically tightens to create
        a &ldquo;shield&rdquo; for your nervous system. At Eternal Release, we use somatic
        movement to signal safety to the Vagus nerve, allowing the body to finally drop
        its guard and hydrate the &ldquo;stuck&rdquo; tissue.
      </p>

      <p className="text-slate-dark font-medium leading-[1.85]">
        Healing isn&apos;t about becoming a &ldquo;perfect&rdquo; version of yourself.
        It&apos;s about building a body that is resilient enough to hold the full spectrum
        of human emotion. I truly believe that a flexible, agile body is the gateway to a
        resilient mind. We are reclaiming our right to be whole, to be agile, and to
        finally live in our own skin.
      </p>
    </>
  );
}
