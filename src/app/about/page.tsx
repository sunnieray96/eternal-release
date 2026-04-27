import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen">
      <Navbar />
      <section className="pt-64 pb-32 editorial-container">
        <div className="max-w-4xl mx-auto">
           <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1C1C1C]/40 mb-12">The Manifesto</p>
           <h1 className="font-serif text-5xl md:text-8xl font-medium leading-[1.1] mb-24 text-[#1C1C1C]">
             Beyond the Labels: <br/>
             <span className="italic font-light text-[#A8613F]">The Science of a Raw Soul</span>
           </h1>
           
           <div className="space-y-16 text-xl md:text-2xl font-light text-[#1C1C1C]/80 leading-relaxed">
              <p>My name is Sunnie Ray, and yes, it is my birth name. My mother thought she was being clever, but for a long time, it felt like a cruel irony. When your name is &ldquo;Sunnie,&rdquo; the world expects light, but my reality was a shadow. My story began with a primal wound: I was adopted at six months old. Before I had a single word to describe my world, my nervous system had already learned the language of loss and abandonment.</p>
              
              <p>That early imprint was compounded by years of abuse, neglect, and sexual assault that followed. By my early twenties, I was a walking storm, angry, unruly, and struggling with attachment issues so extreme they terrified the professionals. I&apos;ve had therapists quit on me. I&apos;ve been called &ldquo;too much,&rdquo; &ldquo;reactive,&rdquo; and &ldquo;unstable.&rdquo; I was cycled through labels like Bipolar, BPD, and even Autism, diagnoses that tried to explain my symptoms without ever touching the fire that caused them. While labels can be helpful for some, they never helped guide me through the experience. I was stiff, tense, anxious, and reactive.</p>

              <p>The light finally flickered when I worked with a psychiatrist whose background in Traditional Chinese Medicine allowed him to see me holistically. He used yoga, sensory deprivation, and art therapy. He was the one who finally looked past the surface and formally diagnosed me with CPTSD. He saw a human being where others saw a &ldquo;case.&rdquo; But even with that brilliance, there was a missing link. We were doing the work, but my body was still bracing.</p>

              <div className="py-24 border-y border-[#D9D2C5]/30 my-32">
                 <p className="font-serif italic text-[#1C1C1C] text-4xl md:text-6xl text-center leading-tight">
                    &ldquo;I&apos;d rather be whole than good.&rdquo; — Carl Jung
                 </p>
              </div>

              <p>I quickly learned that for many of us with CPTSD and BPD, traditional talk therapy can be a trap. Science shows that when we recount trauma, the brain cannot always differentiate between a memory and a current threat. Research shows that during trauma recall, the amygdala fires while the speech center often shuts down. We are literally forced to try and &ldquo;talk&rdquo; our way out of a state where the brain has disabled speech. For many, this doesn&apos;t resolve the symptoms; it retraumatizes.</p>

              <p>I practiced yoga to get out of my mind and into my body, but because I was stuck in a chronic &ldquo;fight-or-flight&rdquo; loop, I was making my stiffness and posture worse. I didn&apos;t realize I was &ldquo;bracing&rdquo; into the poses, reinforcing the fascia-armor my body had built to survive. I was trying to force peace onto a system that didn&apos;t yet feel safe.</p>

              <p>Your fascia is your largest sensory organ and the biological archive of your history. At Eternal Release, we use somatic movement to signal safety to the Vagus nerve, allowing the body to finally drop its guard. We are reclaiming our right to be whole, to be agile, and to finally live in our own skin.</p>
              
              <div className="pt-12 italic opacity-60 text-base md:text-lg">
                 Sunnie Ray is a psychology student and yoga teacher. This platform is an educational sanctuary for somatic exploration.
              </div>
           </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
