import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen font-sans text-left">
      <Navbar />
      <section className="pt-64 pb-32 max-w-7xl mx-auto px-8 md:px-12">
        <div className="max-w-4xl">
           <div className="aspect-[21/9] w-full bg-sand/10 rounded-[60px] mb-20 overflow-hidden border border-sand/20 relative group">
              <img 
                src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/d88bb604e1054353ae9dcd0ccc20d03b_pexels-darina-belonogova-9167188.jpg" 
                alt="Sanctuary" 
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7]/40 to-transparent" />
           </div>
           
           <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-12 uppercase">The Manifesto</p>
           <h1 className="font-serif text-5xl md:text-[8rem] font-medium leading-[1] mb-24">
             Beyond the Labels: <br/>
             <span className="italic font-light text-[#A8613F]">The Science of a Raw Soul</span>
           </h1>
           
           <div className="space-y-16 text-xl md:text-2xl font-light opacity-80 leading-relaxed text-left">
              <p>My name is Sunnie Ray, and yes, it is my birth name. My mother thought she was being clever, but for a long time, it felt like a cruel irony. When your name is &ldquo;Sunnie,&rdquo; the world expects light, but my reality was a shadow. My story began with a primal wound: I was adopted at six months old. Before I had a single word to describe my world, my nervous system had already learned the language of loss and abandonment.</p>

              <p>That early imprint was compounded by years of abuse, neglect, and sexual assault that followed my adoption. By my early twenties, I was a walking storm, angry, unruly, and struggling with attachment issues so extreme they terrified the professionals. I&apos;ve had therapists quit on me. I&apos;ve been called &ldquo;too much,&rdquo; &ldquo;reactive,&rdquo; and &ldquo;unstable.&rdquo; I was cycled through labels like Bipolar, BPD, and even Autism, diagnoses that tried to explain my symptoms without ever touching the fire that caused them. While labels can be helpful for some, they never helped guide me through the experience. I was stiff, tense, anxious, and reactive.</p>

              <div className="py-24 border-y border-[#D9D2C5]/30 my-32 text-center">
                 <p className="font-serif italic text-black text-4xl md:text-6xl text-center leading-tight text-balance">
                    &ldquo;I&apos;d rather be whole than good.&rdquo; — Carl Jung
                 </p>
              </div>

              <p>I quickly learned that for many of us with CPTSD and BPD, traditional talk therapy can be a trap. Science shows that when we recount trauma, the brain cannot always differentiate between a memory and a current threat. Research using fMRI scans, discussed by Dr. Bessel van der Kolk in <em className="text-black underline">The Body Keeps the Score</em>, shows that during trauma recall, the amygdala fires while the speech center often shuts down. We are literally forced to try and &ldquo;talk&rdquo; our way out of a state where the brain has disabled speech. For many, this doesn&apos;t resolve symptoms; it retraumatizes.</p>

              <div className="grid md:grid-cols-2 gap-12 my-24">
                 <div className="aspect-square bg-bone rounded-[100px] overflow-hidden border border-sand/30">
                    <img src="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/1a8adf3e79cf4dadb4f2b6208dce502d_pexels-arun-350214906-15520327.jpg" alt="Somatic Flow" className="w-full h-full object-cover opacity-80" />
                 </div>
                 <div className="flex flex-col justify-center">
                    <p>I practiced yoga to get out of my mind and into my body, but because I was stuck in a chronic &ldquo;fight-or-flight&rdquo; loop, I was making my stiffness and posture worse. I didn&apos;t realize I was &ldquo;bracing&rdquo; into the poses, reinforcing the fascia-armor my body had built to survive childhood abuse. I was trying to force peace onto a system that didn&apos;t yet feel safe.</p>
                 </div>
              </div>

              <p>Your fascia is your largest sensory organ and the biological archive of your history. At Eternal Release, we use somatic movement to signal safety to the Vagus nerve, allowing the body to finally drop its guard and hydrate the &ldquo;stuck&rdquo; tissue. I believe that a flexible, agile body is the gateway to a resilient mind. We are reclaiming our right to be whole, to be agile, and to finally live in our own skin.</p>

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
