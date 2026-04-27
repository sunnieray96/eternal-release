import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen">
      <Navbar />
      <section className="pt-48 pb-32 max-w-6xl mx-auto px-8 md:px-12">
        <div className="max-w-4xl">
           <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1C1C1C]/40 mb-12">The Manifesto</p>
           <h1 className="font-serif text-5xl md:text-8xl font-medium leading-tight mb-24">
             Beyond the Labels: <br/>
             <span className="italic font-light text-[#A8613F]">The Science of a Raw Soul</span>
           </h1>
           
           <div className="space-y-16 text-xl md:text-3xl font-light text-[#1C1C1C]/80 leading-relaxed">
              <p>My name is Sunnie Ray. My mother thought she was being clever, but for a long time, it felt like a cruel irony. When your name is &ldquo;Sunnie,&rdquo; the world expects light. My reality was a shadow.</p>
              
              <p>My story began with a primal wound: I was adopted at six months old. Before I had a word for loss, my nervous system had already learned its weight.</p>
              
              <p>The imprint was compounded by years of abuse and neglect. By my early twenties, I was a walking storm. I was cycled through labels—Bipolar, BPD, Autism—diagnoses that tried to explain my symptoms without ever touching the fire that caused them.</p>

              <div className="py-24 border-y border-[#D9D2C5]/30 my-32">
                 <p className="font-serif italic text-[#1C1C1C] text-4xl md:text-6xl text-center leading-tight">
                    &ldquo;I&apos;d rather be whole than good.&rdquo; — Carl Jung
                 </p>
              </div>

              <p>Talk therapy often failed me because the brain cannot always differentiate between a memory and a current threat. For many, this doesn&apos;t resolve the symptoms; it retraumatizes. I found the bridge in Somatic Release and Fascia.</p>

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
